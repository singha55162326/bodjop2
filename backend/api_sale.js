const express = require('express');
const router = express.Router();
const sale = require("./models/sale");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const sequelize = require('sequelize');






router.get("/sale",async(req,res)=>{
    try{
    const sales = await sale.findAll();
    res.json(sales);
    }catch(err){
        console.log(err);
    }
});

router.get("/sale/id:id", async (req, res)=>{
    try{
        let result = await sale.findone({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/sale",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await sale.create(fields);
        res.json({
            result: constant.kResultOk,
            message: JSON.stringify(sale)
        });
    });
    }catch(err){
        res.json({customer: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/sale", (req,res)=>{
    try{
    var form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await sale.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message: JSON.stringify(sale)
        });
    });
    }catch(err){
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/sale/id/:id",async(req,res)=>{
    try{
    const {id} = req.params.id;
    let sale = await sale.findone({where:{id}});
    sale = await sale.destroy({where:{id:id}});
    res.json({
        sale: constant.kResultOk, message: JSON.stringify(sale)
    });
    }catch(err){
        res.json({sale: constant.kResultNok, message: JSON.stringify(err)});
    }

})



module.exports = router;