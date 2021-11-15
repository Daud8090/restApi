const Student = require("../../models/students")



const patch_student_service = async (student_to_patch) => {
    try {
        const _id = student_to_patch.params.id;
        const patchstudent = await Student.findByIdAndUpdate(_id, student_to_patch.body, {
            new: true
        });
        // console.log(patchstudent);
        if(!patchstudent) throw " id not matched to start patching";
        else
        return patchstudent;
    }
    catch (e) {
        throw e;
    }
}
module.exports = patch_student_service;