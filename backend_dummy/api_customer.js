const express = require('express');
const router = express.Router();

router.get("/customer",(req,res)=>{
    res.json([
        {
            id: 105489,
            companyname: "haloh",
            address: "123/4",
            contact : "09876",
            service: "Cafe",
            phone: "09876",
            employeeid: 1212793,
            employeename: "Nguyen Van A",

        },
        {
            id: 2,
            companyname: "haloh",
            address: "123/4",
            contact : "09876",
            service: "Cafe",
            phone: "09876",
            employeeid: 1212793,
            employeename: "Nguyen Van A",
        },
        {
            id: 3,
              companyname: "haloh",
            address: "123/4",
            contact : "09876",
            service: "Cafe",
            phone: "09876",
            employeeid: 1212793,
            employeename: "Nguyen Van A",
        },
        {
            id: 4,
            companyname: "haloh",
            address: "123/4",
            contact : "09876",
            service: "Cafe",
            phone: "09876",
            employeeid: 1212793,
            employeename: "Nguyen Van A",
        },
        {
            id: 6,
            companyname: "haloh",
            address: "123/4",
            contact : "09876",
            service: "Cafe",
            phone: "09876",
            employeeid: 1212793,
            employeename: "Nguyen Van A",
        },
        {
            id: 7,
            companyname: "haloh",
            address: "123/4",
            contact : "09876",
            service: "Cafe",
            phone: "09876",
            employeeid: 1212793,
            employeename: "Nguyen Van A",
        }
    ]);
});
module.exports = router;