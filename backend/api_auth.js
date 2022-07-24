const express = require('express');
const router = express.Router();
const user = require("./models/user");
const bcrypt = require('bcryptjs');
const constant = require("./constant");



router.post("/login", async (req, res) => {
   
    const{username , password} = req.body;
    const result = await user.findOne({where:{username:username}});
    try{
    if (result){
          if(bcrypt.compareSync(password, result.password)){
            res.json({result:constant.kResultOk, message: JSON.stringify(result)});
          }else{
            res.json({result:constant.kResultNok, message:"Wrong password"});
          }
    }else{
      res.json({result:constant.kResultNok, message:"Wrong username"});
    }
    }catch(error){
        res.json({result:constant.kResultNok, message: JSON.stringify(error)});
    }
});

router.post("/register", async(req, res) => {
    try{
    console.log("register:" + JSON.stringify(req.body));
    req.body.password = await bcrypt.hash(req.body.password, 8);
  const result = await user.create(req.body);
    res.json({result: constant.kResultOk, message:JSON.stringify(result)});
    }catch(error){
       res.json({result: constant.kResultNok, message: JSON.stringify(error)});
    }
});

module.exports = router;