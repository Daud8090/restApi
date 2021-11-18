// const Student = require("../../models/students")
const db=require('../../db/sequelizeconn');
const Student=db.student;


// const patch_student_service = async (student_to_patch,_id) => {
//     try {
//         const patchstudent = await Student.findByIdAndUpdate(_id, student_to_patch.body, {
//             new: true
//         });
//         // console.log(patchstudent);
//         return patchstudent;
//     }
//     catch (e) {
//         throw e;
//     }
// }



//
const patch_student_service = async (student_to_patch,_id) => {
    try {
        const patchstudent = await Student.update(student_to_patch.body, {
           where:{
               id:_id
           }
        });
        const studentPatched = await Student.findAll({
            where:{
                id:_id
            }
        });
        console.log(studentPatched);
        return studentPatched;
    }
    catch (e) {
        throw e;
    }
}
module.exports = patch_student_service;