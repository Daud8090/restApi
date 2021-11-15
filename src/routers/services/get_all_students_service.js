const Student = require("../../models/students")



const get_all_students_service = async () => {
    try {
        const studentData = await Student.find();
        // console.log(studentData);
        return studentData;
    }
    catch (e) {
        throw e;
    }
}
module.exports = get_all_students_service;