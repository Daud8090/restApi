
const Student = require("../../models/students")



const get_data_service = async () => {
    try {
        const studentData = await Student.find();
        return studentData;
    }
    catch (e) {
        throw new Error("could not found")
    }
}
module.exports = get_data_service;