const create_student_service=require("../services/create_student_service");


//no acknowledgement to client in case some validation error occurs
const create_student_controller=async(req,res)=>{
    try{
        // unable to understand that what should i send from client
        const createStudent= await create_student_service(req.body)
        return res.status(201).send(createStudent);
    }
    catch(e){
        return res.status(400).send(e);
    }
}
module.exports=create_student_controller;