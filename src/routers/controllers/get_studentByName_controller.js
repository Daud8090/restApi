const get_studentByName_service = require("../services/get_studentByName_service");
const Student = require("../../models/students")



const get_studentByName_controller = async (req, res) => {
    try {

        //     const sname=req.params.name;
        const sname = req.params.name;
        if (!sname) throw "no name to find";
        else {
            const singlestudent = await get_studentByName_service(sname);
            if (singlestudent.length === 0) throw " could not found by this name";
            else
                res.send(singlestudent);
        }
    }
    catch (e) {
        res.status(500).send({ "error": e });
    }
}
module.exports = get_studentByName_controller;

