const Student = require("../../models/students")



const create_student_service = async (new_student) => {
    try {
        const student = new Student(new_student);
        const createStudent = await student.save();
        return createStudent;
    }
    catch (e) {
        throw e;
    }
}
module.exports = create_student_service;