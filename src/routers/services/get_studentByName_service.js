
const Student = require("../../models/students")



const get_studentByName_service = async (specific_student) => {
    try {
        const singlestudent = await Student.find({ "name": specific_student });
        return singlestudent;
    }
    catch (e) {
        throw e;
    }
}
module.exports = get_studentByName_service;