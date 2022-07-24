const express = require('express');
const router = express.Router();

router.get("/price",(req,res)=>{
    res.json(
        [
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
            {
                date: "2020-01-01",
                price: "1,000",
                vat: "100",

            },
        ]
    );
    });
module.exports = router;