const Student = require("../../models/students")


/* using async await */

// const create_student_service = async (new_student) => {
//     try {
//         const student = new Student(new_student);
//         const createStudent = await student.save();
//         return createStudent;
//     }
//     catch (e) {
//         throw e;
//     }
// }


//using promises;

const create_student_service =  (new_student) => {
        // const student = new Student(new_student);
        //    console.log(student,  " in promise")
        return new_student.save().then((studentCreated)=>{
           return new Promise((resolve,reject)=>{
            if(studentCreated)   
            resolve(new_student);
            else
            reject("something out of limit or not unique")
           })
       })
}

module.exports = create_student_service;
//using promise
// app.post("/students",(req,res)=>{
//     // console.log(req.body)
//     const student=new Student(req.body);
//     student.save().then(()=>{
//         res.status(201).send(student);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })