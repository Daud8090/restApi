const express= require('express');
const app=express();
require("./db/conn");
const port= process.env.PORT || 8000;
const studentRouter=require("./routers/student")

//express.json is used to recognise that the incoming rqst is hvaing json format
app.use(express.json());
app.use(studentRouter)
app.get("/",(req,res)=>{
    res.send("welcom")
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

app.listen(port,()=>{
    console.log(`connected on port ${port}`)
})