const express = require('express');
const router = express.Router();

router.get("/employee",(req,res)=>{
    res.json(
        [
            {
                id: 105489,
                employeename: "นายสมชาย สมบัติ",
                address: "บ้านหนองหลวง",
                position: "ผู้จัดการ",
                phone: "081-1234567",
            },
            {
                id: 105485,
                employeename: "นายสมชาย สมบัติ",
                address: "บ้านหนองหลวง",
                position: "ผู้จัดการ",
                phone: "081-1234567",
            },
            {
                id: 105485,
                employeename: "นายสมชาย สมบัติ",
                address: "บ้านหนองหลวง",
                position: "ผู้จัดการ",
                phone: "081-1234567",
            },
            {
                id: 105485,
                employeename: "นายสมชาย สมบัติ",
                address: "บ้านหนองหลวง",
                position: "ผู้จัดการ",
                phone: "081-1234567",
            },
            {
                id: 105485,
                employeename: "นายสมชาย สมบัติ",
                address: "บ้านหนองหลวง",
                position: "ผู้จัดการ",
                phone: "081-1234567",
            },
            {
                id: 105485,
                employeename: "นายสมชาย สมบัติ",
                address: "บ้านหนองหลวง",
                position: "ผู้จัดการ",
                phone: "081-1234567",
            },
        ]
    );
    });
module.exports = router;