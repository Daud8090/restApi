// const Student = require("../../models/students")
const db=require('../../db/sequelizeconn');
const Student=db.student;


const delete_student_service = async (_id) => {
    try {
        // const _id = student_to_delete.params.id;
        const delstudent = await Student.destroy({
            where:{
                id:_id
            }
        });
        // console.log(delstudent);
        if(delstudent)
        return delstudent;
        else
        {
            return "";
        }
    }
    catch (e) {
        throw e;
    }
}
module.exports = delete_student_service;