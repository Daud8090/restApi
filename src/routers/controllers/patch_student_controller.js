const patch_student_service = require("../services/patch_student_service");
const Student = require("../../models/students")
const error_service = require('../services/error_service');
const jwt = require('jsonwebtoken');



// const patch_student_controller = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         // console.log(_id);
//         if (!_id || _id === null) throw "no id provided";
//         else {
//             const patchdData = await patch_student_service(req, _id);
//             if(!patchdData) throw " id not matched to start patching";
//         else
//             res.send(patchdData);
//         }
//     }
//     catch (e) {
//         res.status(500).send({ "message": e });
//     }
// }




//
const patch_student_controller = async (req, res) => {
    jwt.verify(req.token, 'secretKey' , async(err,authData)=>{
        if(err){
            console.log(err)
            res.sendStatus(403)
        }
        else
        {
            try {
                const _id = req.params.id;
                // console.log(_id);
                if (!_id || _id === null) throw new Error("no id provided");
                else {
                    const patchdData = await patch_student_service(req, _id);
                    // console.log(patchdData)
                    if (patchdData.length===0) throw new Error(" id not matched to start patching");
                    else
                        res.send(patchdData);//reurns id
                }
            }
            catch (e) {
                const actualerror = await error_service(e)
                res.status(500).send({ error: e.message });
            }
    
        }
    })
}
module.exports = patch_student_controller;

