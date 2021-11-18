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
    res.send("welcom")
})

app.listen(port, () => {
    console.log(`connected on port ${port}`)
})









// {
//     Error: name empty
//     at create_student_controller(D: \farMart\restapi\src\routers\controllers\create_student_controller.js: 62: 26)
//     at Layer.handle[as handle_request](D: \farMart\restapi\node_modules\express\lib\router\layer.js: 95:5)
//     at next(D: \farMart\restapi\node_modules\express\lib\router\route.js: 137: 13)
//     at Route.dispatch(D: \farMart\restapi\node_modules\express\lib\router\route.js: 112: 3)
//     at Layer.handle[as handle_request](D: \farMart\restapi\node_modules\express\lib\router\layer.js: 95:5)
//     at D: \farMart\restapi\node_modules\express\lib\router\index.js: 281: 22
//     at Function.process_params(D: \farMart\restapi\node_modules\express\lib\router\index.js: 335: 12)
//     at next(D: \farMart\restapi\node_modules\express\lib\router\index.js: 275: 10)
//     at Function.handle(D: \farMart\restapi\node_modules\express\lib\router\index.js: 174: 3)
//     at router(D: \farMart\restapi\node_modules\express\lib\router\index.js: 47: 12)
// }