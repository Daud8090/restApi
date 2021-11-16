const Student = require("../../models/students")



// const get_all_students_service = async () => {
//     try {
//         const studentData = await Student.find();
//         // console.log(studentData);
//         return studentData;
//     }
//     catch (e) {
//         throw e;
//     }
// }



const get_all_students_service =  () => {
        return Student.find().then((allstudentData)=>{
            return new Promise((resolve,reject)=>{
                if(allstudentData)
                resolve(allstudentData);
                else
                reject("nothing to show")
            })
        })
        // console.log(studentData);
}
module.exports = get_all_students_service;