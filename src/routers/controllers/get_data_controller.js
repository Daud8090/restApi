const get_data_service =require("../services/get_data_service");
const Student=require("../../models/students")



const get_data_controller=async(req,res)=>{
    try{
    const studentdata= await get_data_service()
    return res.status(201).send(studentdata);
    }
    catch(e){
        return res.status(400).send(e);
    }
}
module.exports=get_data_controller;

