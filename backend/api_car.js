    const express = require('express');
    const router = express.Router();
    const car = require("./models/car");
    const formidable = require('formidable');
    const { kResultNok } = require('./constant');
    const constant = require('./constant');
    const Sequelize = require("sequelize")
    const fs = require("fs-extra");
    const sequelize = require('sequelize');





    router.get("/car",async(req,res)=>{
        try{
        const cars = await car.findAll();
        res.json(cars);
        }catch(err){
            console.log(err);
        }
    });

    router.get("/car/id:id", async (req, res)=>{
        try{
            let result = await car.findone({where:{id: req.params.id}})
            if (result){
                res.json(result)
            }else{
                res.json({});
            }
        }catch(error){
            res.json({});
        }
    })

    router.post("/car",(req,res)=>{
        try{
        const form = new formidable.IncomingForm();
        form.parse(req, async(err, fields, files) => {
            let result = await car.create(fields);
            res.json({
                result: constant.kResultOk,
                message: JSON.stringify(car)
            });
        });
        }catch(err){
            res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
        }
    }
    );
    router.put("/car", (req,res)=>{
        try{
        var form = new formidable.IncomingForm();
        form.parse(req,async (err, fields, files) => {
            let result = await car.update(fields,{where: {id: fields.id}});
            res.json({
                result: constant.kResultOk, message: JSON.stringify(car)
            });
        });
        }catch(err){
            res.json({result: constant.kResultNok, message: JSON.stringify(err)});
        }
    }
    );
    router.delete("/car/id/:id",async(req,res)=>{
        try{
        const {id} = req.params.id;
        let car = await car.findone({where:{id}});
        car = await car.destroy({where:{id:id}});
        res.json({
            mylove: constant.kResultOk, message: JSON.stringify(car)
        });
        }catch(err){
            res.json({mylove: constant.kResultNok, message: JSON.stringify(err)});
        }

    })



    module.exports = router;