
const Student = require("../../models/students")



const get_studentByName_service = async (specific_student) => {
    try {
        const sname = specific_student.params.name;
        const singlestudent = await Student.find({ "name": sname });
        // console.log(singlestudent)
        if(singlestudent.length===0) throw " could not found by this name";
        else
        return singlestudent;
    }
    catch (e) {
        throw e;
    }
}
module.exports = get_studentByName_service;