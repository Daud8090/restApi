const Student = require("../../models/students")



const delete_student_service = async (req) => {
    // console.log(req.body)
    //now get the data and add to the db
    try {
        const _id = req.params.id;
        const delstudent = await Student.findByIdAndDelete(_id);
        // console.log(individualData," yha aya")
        return delstudent;
    }
    catch (e) {
        res.status(500).send(e);
    }
}
module.exports = delete_student_service;