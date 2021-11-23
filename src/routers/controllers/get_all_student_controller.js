const get_all_students_service = require("../services/get_all_students_service");
const error_service = require('../services/error_service');


/* using async await */

// const get_all_student_controller = async (req, res) => {
//     try {
//         const studentdata = await get_all_students_service();
//         if (studentdata.length === 0) throw "nothing to show"
//         else
//             return res.status(201).send(studentdata);
//     }
//     catch (e) {
//         // console.log(e)
//         return res.status(400).send({ "message": e });
//     }
// }


//using promises;
// const get_all_student_controller = (req, res) => {
//          get_all_students_service().then((allstudentData)=>{
//              if (allstudentData.length === 0) throw "nothing to show"
//              else
//                  return res.status(201).send(allstudentData);
//          }).catch((e)=>{
//             return res.status(400).send({ "message": e });
//          })

// }


//
const get_all_student_controller = async (req, res) => {
    console.log(Data.now())
    try {
        const studentdata = await get_all_students_service();
        if (studentdata.length === 0) {
            throw new Error("nothing to show");
        }
        else {
            return res.status(201).send(studentdata);
        }
    }
    catch (e) {
        // console.log(e)
        const actualerror = await error_service(e)
        return res.status(400).send({ error: e.message });
    }
}


module.exports = get_all_student_controller;

