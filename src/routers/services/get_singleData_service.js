
const Student = require("../../models/students")



const get_singleData_service = async (req) => {
    try {
        const sname=req.params.name;
        const individualData=await Student.find({"name":sname});
        return individualData;
    }
    catch (e) {
        throw new Error("could not found")
    }
}
module.exports = get_singleData_service;