const delete_student_service = require("../services/delete_student_service");
const error_service=require('../services/error_service');



const delete_student_controller = async (req, res) => {
    try {
        // console.log("going")
        const _id = req.params.id;
        // console.log(_id);
        if (!_id || _id === undefined) throw new Error("id missing");
        else {
            //sending specific student data to the service to delete it

            const delstudent = await delete_student_service(_id);
            // console.log(delstudent)
            if (!delstudent) throw new Error("not matched with any to delete");
            else
                res.send({"student deleted whose id is ":_id});
        }
    }
    catch (e) {
        // console.log(e);
       const actualerror= await error_service(e)
        res.status(500).send({ error: e.message });
    }
}
module.exports = delete_student_controller;

