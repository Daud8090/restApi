// const Student = require("../../models/students")
const db=require('../../db/sequelizeconn');
const Student=db.student;

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

// const create_student_service =  (new_student) => {
//         const student = new Student(new_student);
//         //    console.log(student,  " in promise")
//         return student.save().then((studentCreated)=>{
//            return new Promise((resolve,reject)=>{
//             if(studentCreated)   
//             resolve(new_student);
//             else
//             reject("something out of limit or not unique")
//            })
//        })
// }


//using sequelize
const create_student_service = async (new_student) => {
    try {

        let createStudent = await Student.create(new_student);
        return createStudent;
    }
    catch (e) {
        throw e;
    }
}



module.exports = create_student_service;
