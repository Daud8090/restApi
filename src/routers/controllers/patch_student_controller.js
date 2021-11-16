const patch_student_service = require("../services/patch_student_service");
const Student = require("../../models/students")



const patch_student_controller = async (req, res) => {
    try {
        const _id = req.params.id;
        // console.log(_id);
        if (!_id || _id === null) throw "no id provided";
        else {
            const patchdData = await patch_student_service(req, _id);
            if(!patchdData) throw " id not matched to start patching";
        else
            res.send(patchdData);
        }
    }
    catch (e) {
        res.status(500).send({ "message": e });
    }
}
module.exports = patch_student_controller;

