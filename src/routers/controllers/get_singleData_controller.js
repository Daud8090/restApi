const get_singleData_service =require("../services/get_singleData_service");
const Student=require("../../models/students")



const get_singleData_controller=async(req,res)=>{
    try{

    //     const sname=req.params.name;
    const individualData=await get_singleData_service(req);
    res.send(individualData);
    }
    catch(e){
        res.status(500).send(e);
    }
}
module.exports=get_singleData_controller;

