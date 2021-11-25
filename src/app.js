const express = require('express');
const app = express();
//mongoDb
// require("./db/conn");
//basic mysql
// require("./db/mysqlconn");

//using sequelize
require('./db/sequelizeconn');

//mongo db error logs
require("./db/errorConn");

const port = process.env.PORT || 8000;
const allRouter = require("./routers/index.js")

//express.json is used to recognise that the incoming rqst is hvaing json format
app.use(express.json());
//all student routes
app.use(allRouter)
app.get("/", (req, res) => {
    res.send({success:true,message:"welcom"})
})

app.listen(port, () => {
    console.log(`connected on port ${port}`)
})

