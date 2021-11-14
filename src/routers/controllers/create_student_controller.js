const create_student_service=require("../services/create_student_service");
const Student=require("../../models/students")

const create_student_controller=async(req,res)=>{
    try{
    const createStudent= await create_student_service(req.body)
    return res.status(201).send(createStudent);
    }
    catch(e){
        return res.status(400).send(e);
    }
}
module.exports=create_student_controller;