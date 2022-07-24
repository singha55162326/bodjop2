const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')
app.use(express.static(__dirname + "/uploaded"));

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());
app.use("/api/v1", require("./api"));
app.use("/api/v1", require("./api_auth"));
app.use("/api/v1", require("./api_customer"));
app.use("/api/v1", require("./api_transport"));
app.use("/api/v1", require("./api_document"));
app.use("/api/v1", require("./api_order"));
app.use("/api/v1", require("./api_car"));
app.use("/api/v1", require("./api_oil"));
app.use("/api/v1", require("./api_sale"));
app.use("/api/v1", require("./api_supplier"));




app.listen(3000, ()=>{
    console.log('Server is running ');
})