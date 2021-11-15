const delete_student_service =require("../services/delete_student_service");
const Student=require("../../models/students")



const delete_student_controller=async(req,res)=>{
    try{

    //     const sname=req.params.name;
    //sending specific student data to the service to delete it
    const deletedData=await delete_student_service(req);
    res.send(deletedData);
    }
    catch(e){
        // console.log(e);
        res.status(500).send({"error":e});
    }
}
module.exports=delete_student_controller;

