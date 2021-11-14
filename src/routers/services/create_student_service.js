
const Student=require("../../models/students")



const create_student_service=async(req)=>{
    // console.log(req.body)
    //now get the data and add to the db
    try{
    const student=new Student(req);
    const createStudent=await student.save();
    return createStudent;
    }
    catch(e){
        throw new Error("could not create")
    }
}
module.exports=create_student_service;