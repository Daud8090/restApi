const Student = require("../../models/students")



const delete_student_service = async (_id) => {
    try {
        // const _id = student_to_delete.params.id;
        const delstudent = await Student.findByIdAndDelete(_id);
        console.log(delstudent);
        if(delstudent)
        return delstudent;
        else
        {
            return "";
        }
    }
    catch (e) {
        throw e;
    }
}
module.exports = delete_student_service;