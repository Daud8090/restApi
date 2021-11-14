const patch_student_service =require("../services/patch_student_service");
const Student=require("../../models/students")



const patch_student_controller=async(req,res)=>{
    try{

    //     const sname=req.params.name;
    const patchdData=await patch_student_service(req);
    res.send(patchdData);
    }
    catch(e){
        res.status(500).send(e);
    }
}
module.exports=patch_student_controller;
