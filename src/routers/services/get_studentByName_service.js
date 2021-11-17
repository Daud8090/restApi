
const Student = require("../../models/students")



// const get_studentByName_service = async (specific_student) => {
//     try {
//         const singlestudent = await Student.find({ "name": specific_student });
//         return singlestudent;
//     }
//     catch (e) {
//         throw e;
//     }
// }



const get_studentByName_service =  (specific_student_name) => {
        return Student.find({ "name": specific_student_name }).then((specific_student)=>{
            return new Promise((resolve,reject)=>{
                if(specific_student)
                resolve(specific_student);
                else
                reject("cannot get data of this student")
            })
        })
    }
module.exports = get_studentByName_service;