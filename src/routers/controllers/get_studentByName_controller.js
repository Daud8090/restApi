const get_studentByName_service =require("../services/get_studentByName_service");
const Student=require("../../models/students")



const get_studentByName_controller=async(req,res)=>{
    try{

    //     const sname=req.params.name;
    const singlestudent=await get_studentByName_service(req);
    res.send(singlestudent);
    }
    catch(e){
        res.status(500).send({"error":e});
    }
}
module.exports=get_studentByName_controller;

