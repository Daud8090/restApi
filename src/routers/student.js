const express= require('express');
const router =new express.Router();
const Student=require("../models/students")



router.post("/students", async(req,res)=>{
    // console.log(req.body)
    //now get the data and add to the db
    try{
    const student=new Student(req.body);
    const createStudent=await student.save();
    res.status(201).send(createStudent);
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.get("/students", async(req,res)=>{
    // console.log(req.body)
    //now get the data and add to the db
    try{
    const studentData=await Student.find();
    res.send(studentData);
    }
    catch(e){
        res.send(e);
    }
})
router.get("/students/:name", async(req,res)=>{
    // console.log(req.body)
    //now get the data and add to the db
    try{
        const sname=req.params.name;
    const individualData=await Student.find({"name":sname});
    // console.log(individualData," yha aya")
    res.send(individualData);
    }
    catch(e){
        res.status(500).send(e);
    }
})
router.delete("/students/:id", async(req,res)=>{
    // console.log(req.body)
    //now get the data and add to the db
    try{
        const _id=req.params.id;
    const delstudent=await Student.findByIdAndDelete(_id);
    // console.log(individualData," yha aya")
    res.send(delstudent);
    }
    catch(e){
        res.status(500).send(e);
    }
})
router.patch("/students/:id", async(req,res)=>{
    try{
        const _id=req.params.id;
    const patchstudent=await Student.findByIdAndUpdate(_id,req.body,{
        new:true
    });
    res.send(patchstudent);
    }
    catch(e){
        res.status(404).send(e);
    }
})

module.exports =router;