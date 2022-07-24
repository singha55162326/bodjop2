const express = require('express');
const router = express.Router();
const supplier = require("./models/supplier");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');
const customer1 = require('./models/customer1');




router.get("/supplier",async(req,res)=>{
    try{
    const suppliers = await supplier.findAll({
        include:[{
            model:customer1, require:true,
           
        }]
    });
    res.json(suppliers);
    }catch(err){
        console.log(err);
    }
});

router.get("/supplier/id:id", async (req, res)=>{
    try{
        let result = await supplier.findone({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/supplier",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await supplier.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(supplier)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/supplier", (req,res)=>{
    try{
    var form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await supplier.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message: JSON.stringify(supplier)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/sup/id/:id",async(req,res)=>{
    try{
    const {id} = req.params.id;
    let category = await category.findone({where:{id}});
    category = await category.destroy({where:{id:id}});
    res.json({
        category: constant.kResultOk, message: JSON.stringify(category)
    });
    }catch(err){
        res.json({category: constant.kResultNok, message: JSON.stringify(err)});
    }

})



module.exports = router;