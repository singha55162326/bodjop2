const express = require('express');
const router = express.Router();
const customer = require("./models/customer1");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');
const basicAuth = require('express-basic-auth');
const supplier = require('./models/supplier');



router.get("/customer",async(req,res)=>{
    try{
    const customers = await customer.findAll({order: Sequelize.literal("id DESC"),
    include:{
        model:supplier,
        as:'suppliers',
        require:true
       
    }
});
    res.json(customers);
    }catch(err){
        console.log(err);
    }
});

router.get("/customer/id/:id", async (req, res)=>{
    try{
        let result = await customer.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/customer",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await customer.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(customer)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/customer",  (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await customer.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message:JSON.stringify(result)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/customer/id/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    let result = await customer.findOne({where:{id}});
    result = await customer.destroy({where:{id:id}});
    res.json({
        result: constant.kResultOk, message: JSON.stringify(result)
    });
    }catch(err){
        console.log(err)
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }

})



module.exports = router;