const express = require('express');
const router = express.Router();
const category = require("./models/category");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');




router.get("/category",async(req,res)=>{
    try{
    const category = await category.findAll();
    res.json(category);
    }catch(err){
        console.log(err);
    }
});

router.get("/catgory/id:id", async (req, res)=>{
    try{
        let result = await category.findone({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/category",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await category.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(category)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/category", (req,res)=>{
    try{
    var form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await category.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message: JSON.stringify(category)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/category/id/:id",async(req,res)=>{
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