const delete_student_service = require("../services/delete_student_service");
const Student = require("../../models/students")



const delete_student_controller = async (req, res) => {
    try {
        // console.log("going")
        const _id = req.params.id;
        // console.log(_id);
        if (!_id || _id === undefined) throw "id missing";
        else {
            //sending specific student data to the service to delete it
            if (_id.length > 24 && _id.length<24) throw "not a avalid id";
            else {
                const delstudent = await delete_student_service(_id);
                console.log(delstudent)
                if (!delstudent) throw "not matched with any to delete";
                else
                    res.send(delstudent);
            }
        }
    }
    catch (e) {
        // console.log(e);
        res.status(500).send({ "message": e });
    }
}
module.exports = delete_student_controller;

