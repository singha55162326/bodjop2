const express = require('express');
const router = express.Router();
const customer = require("./models/document");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');
const oil = require('./models/oil');



router.get("/oil",async(req,res)=>{
    try{
    const oils = await oil.findAll({order: Sequelize.literal("id DESC")});
    res.json(oils);
    }catch(err){
        console.log(err);
    }
});

router.get("/oil/id/:id", async (req, res)=>{
    try{
        let result = await oil.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/oil",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await oil.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(oil)
        });
    });
    }catch(err){
        res.json({oil: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/oil",  (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await oil.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message:JSON.stringify(result)
        });
    });
    }catch(err){
        res.json({oil: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/oil/id/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    let result = await oil.findOne({where:{id}});
    result = await oil.destroy({where:{id:id}});
    res.json({
        result: constant.kResultOk, message: JSON.stringify(result)
    });
    }catch(err){
        console.log(err)
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }

})



module.exports = router;