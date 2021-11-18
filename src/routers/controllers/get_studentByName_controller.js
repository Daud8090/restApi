const get_studentByName_service = require("../services/get_studentByName_service");
const Student = require("../../models/students")
const error_service=require('../services/error_service');



// const get_studentByName_controller = async (req, res) => {
//     try {

//         //     const sname=req.params.name;
//         const sname = req.params.name;
//         if (!sname) throw "no name to find";
//         else {
//             const singlestudent = await get_studentByName_service(sname);
//             if (singlestudent.length === 0) throw " could not found by this name";
//             else
//                 res.send(singlestudent);
//         }
//     }
//     catch (e) {
//         res.status(500).send({ "error": e });
//     }
// }






// const get_studentByName_controller = (req, res) => {
//     try {
//         const sname = req.params.name;
//         if (!sname) throw "no name to find";
//         else {
//             get_studentByName_service(sname).then((specific_student)=>{
//                     res.send(specific_student);
//             }).catch((e)=>{
//                 res.status(500).send({ "error": e });
//             })
//         }
//     }
//     catch (e) {
//     }
// }







//
const get_studentByName_controller = async (req, res) => {
    try {

        //     const sname=req.params.name;
        const sname = req.params.name;
        if (!sname) throw new Error("no name to find");
        else {
            const singlestudent = await get_studentByName_service(sname);
            if (singlestudent.length === 0) throw new Error(" could not found by this name");
            else
                res.send(singlestudent);
        }
    }
    catch (e) {
       const actualerror= await error_service(e)
        res.status(500).send({ error: e.message  });
    }
}
module.exports = get_studentByName_controller;

