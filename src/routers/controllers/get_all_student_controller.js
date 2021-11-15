const get_all_students_service =require("../services/get_all_students_service");
const Student=require("../../models/students")



const get_all_student_controller=async(req,res)=>{
    try{
    const studentdata= await get_all_students_service()
    return res.status(201).send(studentdata);
    }
    catch(e){
        console.log(e)
        return res.status(400).send({"error":e});
    }
}
module.exports=get_all_student_controller;

