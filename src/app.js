//api documentation missing
const express= require('express');
const app=express();
require("./db/conn");
const port= process.env.PORT || 8000;
const studentRouter=require("./routers/student")

//express.json is used to recognise that the incoming rqst is hvaing json format
app.use(express.json());
app.use(studentRouter);
/*
 * what if i want to have another 100 route entities here
 * then i will have to use app.use 100 times here 
 * One Approach could be unifying all routes in one file and then importing it here and passing in app.use
 * try finding other approaches
*/
app.get("/",(req,res)=>{
    res.send("welcom")
})

app.listen(port,()=>{
    console.log(`connected on port ${port}`)
})







//create a new student
//using promise
// app.post("/students",(req,res)=>{
//     // console.log(req.body)
//     //now get the data and add to the db
//     const student=new Student(req.body);
//     student.save().then(()=>{
//         res.status(201).send(student);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })
//using async await