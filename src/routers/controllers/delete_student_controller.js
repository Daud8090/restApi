const delete_student_service =require("../services/delete_student_service");
const Student=require("../../models/students")



const get_singleData_controller=async(req,res)=>{
    try{

    //     const sname=req.params.name;
    const deletedData=await delete_student_service(req);
    res.send(deletedData);
    }
    catch(e){
        res.status(500).send(e);
    }
}
module.exports=get_singleData_controller;

