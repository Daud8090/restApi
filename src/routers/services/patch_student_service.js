const Student = require("../../models/students")



const patch_student_service = async (req) => {
    try {
        const _id = req.params.id;
        const patchstudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        return patchstudent;
    }
    catch (e) {
        res.status(500).send(e);
    }
}
module.exports = patch_student_service;