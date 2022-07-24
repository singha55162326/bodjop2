const express = require('express');
const router = express.Router();
const price = require("./models/price");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra")

const sequelize = require('sequelize');
const basicAuth = require('express-basic-auth');


router.get("/price",async(req,res)=>{
    try{
    const prices = await price.findAll({order: Sequelize.literal("id DESC")});
    res.json(prices);
    }catch(err){
        console.log(err);
    }
});

router.get("/price/id/:id", async (req, res)=>{
    try{
        let result = await price.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/price",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await price.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(price)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/price",  (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await price.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message:JSON.stringify(result)
        });
    });
    }catch(err){
        res.json({price: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/price/id/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    let result = await price.findOne({where:{id}});
    result = await price.destroy({where:{id:id}});
    res.json({
        result: constant.kResultOk, message: JSON.stringify(result)
    });
    }catch(err){
        console.log(err)
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }

})

module.exports = router;