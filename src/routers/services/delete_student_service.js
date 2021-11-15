const Student = require("../../models/students")



const delete_student_service = async (student_to_delete) => {
    // console.log(student_to_delete.body)
    //now get the data and add to the db
    try {
        const _id = student_to_delete.params.id;
        const delstudent = await Student.findByIdAndDelete(_id);
        // console.log(delstudent," yha aya")
        if (!delstudent) throw "not matched";
        else
        return delstudent;
    }
    catch (e) {
        throw e;
    }
}
module.exports = delete_student_service;