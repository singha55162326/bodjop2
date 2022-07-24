const express = require('express');
const router = express.Router();
const order = require("./models/order");

const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');
const basicAuth = require('express-basic-auth');
const employee = require('./models/employee');



router.get("/order",async(req,res)=>{
    try{
    const orders = await order.findAll({
        include:{
            model:employee,require:true
           
        }
    }
    );
    res.json(orders);
    }catch(err){
        console.log(err);
    }
});

router.get("/order/id/:id", async (req, res)=>{
    try{
        let result = await order.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/order",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await order.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(order)
        });
    });
    }catch(err){
        res.json({order: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/order",  (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await order.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message:JSON.stringify(result)
        });
    });
    }catch(err){
        res.json({order: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/order/id/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    let result = await order.findOne({where:{id}});
    result = await order.destroy({where:{id:id}});
    res.json({
        result: constant.kResultOk, message: JSON.stringify(result)
    });
    }catch(err){
        console.log(err)
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }

})


module.exports = router;