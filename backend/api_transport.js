const express = require('express');
const router = express.Router();

const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const transport = require('./models/transport');
const promise = new Promise(() => {})  
const conn = require('./db_instance')


router.get("/transport",async(req,res)=>{
    try{
    const result = await transport.findAll();
    res.json(result);
    }catch(err){
        console.log(err);
    }
});
router.get("/transport/id/:id", async (req, res)=>{
    try{
        let result = await transport.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})
router.post("/transport/",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await transport.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(transport)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);

router.put("/transport", (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await transport.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message: JSON.stringify(transport)
        });
    });
    }catch(err){
        res.json({transport: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/transport/id/:id",async(req,res)=>{
    try{
    const {id} = req.params.id;
    let transport = await transport.findone({where:{id}});
    transport = await transport.destroy({where:{id:id}});
    res.json({
        deliveries: constant.kResultOk, message: JSON.stringify(transport)
    });
    }catch(err){
        res.json({transport: constant.kResultNok, message: JSON.stringify(err)});
    }

})



module.exports = router;