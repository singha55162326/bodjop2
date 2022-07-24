const express = require('express');
const router = express.Router();

router.get("/order",(req,res)=>{
    res.json(
        [
            {
                id: 1054822,
                cos:"Ptt สาขาสำนักงานใหญ่",
                employeeid: 105489,
                employeename: "นายสมชาย สมบัติ",
                category: "Desel",
                companyid: "PTT",
                date:"2020-01-01",
                companyname:"PTT",
            },
            {
                id: 1054822,
                cos:"Ptt สาขาสำนักงานใหญ่",
                employeeid: 105489,
                employeename: "นายสมชาย สมบัติ",
                category: "Desel",
                companyid: "PTT",
                date:"2020-01-01",
                companyname:"PTT",
            },
            {
                id: 1054822,
                cos:"Ptt สาขาสำนักงานใหญ่",
                employeeid: 105489,
                employeename: "นายสมชาย สมบัติ",
                category: "Desel",
                companyid: "PTT",
                date:"2020-01-01",
                companyname:"PTT",
            },
            {
                id: 1054822,
                cos:"Ptt สาขาสำนักงานใหญ่",
                employeeid: 105489,
                employeename: "นายสมชาย สมบัติ",
                category: "Desel",
                companyid: "PTT",
                date:"2020-01-01",
                companyname:"PTT",
            },
            {
                id: 1054822,
                cos:"Ptt สาขาสำนักงานใหญ่",
                employeeid: 105489,
                employeename: "นายสมชาย สมบัติ",
                category: "Desel",
                companyid: "PTT",
                date:"2020-01-01",
                companyname:"PTT",
            }
        ]
    );
    });
module.exports = router;