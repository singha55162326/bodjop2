const express = require('express');
const router = express.Router();
const employee = require("./models/employee");
const formidable = require('formidable');
const { kResultNok } = require('./constant');
const constant = require('./constant');
const Sequelize = require("sequelize")
const fs = require("fs-extra");
const e = require('express');
const order = require('./models/order');

const basicAuth = require('express-basic-auth');
router.get("/employee",async(req,res)=>{
    try{
    const result = await  employee.findAll({
        include:[{
            model:order, require:true,
           
        }]
      });
    res.json(result);
    }catch(err){
        console.log(err);
    }
});
router.get("/employee/id/:id", async (req, res)=>{
    try{
        let result = await employee.findOne({where:{id: req.params.id}})
        if (result){
            res.json(result)
        }else{
            res.json({});
        }
    }catch(error){
        res.json({});
    }
})

router.post("/employee",(req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {
        let result = await employee.create(fields);
        res.json({
            delivery: constant.kResultOk,
            message: JSON.stringify(employee)
        });
    });
    }catch(err){
        res.json({delivery: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.put("/employee", (req,res)=>{
    try{
    const form = new formidable.IncomingForm();
    form.parse(req,async (err, fields, files) => {
        let result = await employee.update(fields,{where: {id: fields.id}});
        res.json({
            result: constant.kResultOk, message: JSON.stringify(result)
        });
    });
    }catch(err){
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }
}
);
router.delete("/employee/id/:id",async(req,res)=>{
    try{
    const {id} = req.params;
    let result = await employee.findOne({where:{id}});
    result = await employee.destroy({where:{id:id}});
    res.json({
        result: constant.kResultOk, message: JSON.stringify(result)
    });
    }catch(err){
        res.json({result: constant.kResultNok, message: JSON.stringify(err)});
    }

})

module.exports = router;