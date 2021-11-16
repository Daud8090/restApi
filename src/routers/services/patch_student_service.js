const Student = require("../../models/students")



const patch_student_service = async (student_to_patch,_id) => {
    try {
        const patchstudent = await Student.findByIdAndUpdate(_id, student_to_patch.body, {
            new: true
        });
        // console.log(patchstudent);
        return patchstudent;
    }
    catch (e) {
        throw e;
    }
}
module.exports = patch_student_service;