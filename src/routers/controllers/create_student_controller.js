const create_student_service=require("../services/create_student_service");

const create_student_controller=async(req,res)=>{
    try{
        //send the student data to validate and save
    const createStudent= await create_student_service(req.body)
    return res.status(201).send(createStudent);
    }
    catch(e){
        // console.log(e);
        return res.status(400).send({error:e});
    }
}
module.exports=create_student_controller;