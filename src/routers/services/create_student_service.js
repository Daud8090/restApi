
const Student = require("../../models/students")



const create_student_service = async (new_student) => {

    try {
        //extracting data by object destructuring
        const { name, email, phone, address } = new_student;
        //validating the fields
        if (!name) throw "name empty";
        else if (!email) throw "email empty";
        else if (!phone) throw "phone empty";
        else if (!address) throw "address empty";
        else {
            const student = new Student(new_student);
            const createStudent = await student.save();
            return createStudent;
        }

    }
    catch (e) {
        throw e;
    }
}
module.exports = create_student_service;