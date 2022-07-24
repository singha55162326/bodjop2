const express = require('express');
const router = express.Router();
const customer = require("./models/document");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');
const document = require('./models/document');



router.get("/document",async(req,res)=>{
    try{
    const documents = await document.findAll({order: Sequelize.literal("id DESC")});
    res.json(documents);
    }catch(err){
        console.log(err);
    }
});

router.get("/document/id/:id", async (req, res)=>{
    try{
        let result = await document.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/document",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await document.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(document)
        });
    });
    }catch(err){
        res.json({document: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/document",  (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await document.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message:JSON.stringify(result)
        });
    });
    }catch(err){
        res.json({document: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/document/id/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    let result = await document.findOne({where:{id}});
    result = await document.destroy({where:{id:id}});
    res.json({
        result: constant.kResultOk, message: JSON.stringify(result)
    });
    }catch(err){
        console.log(err)
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }

})



module.exports = router;