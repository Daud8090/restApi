const express = require('express');
const studentRouter = new express.Router();
// importing all the services required
const create_student_controller = require("./controllers/create_student_controller")
const get_all_students_controller = require("./controllers/get_all_student_controller")
const get_studentByName_controller = require("./controllers/get_studentByName_controller")
const delete_student_controller = require("./controllers/delete_student_controller")
const patch_student_controller = require("./controllers/patch_student_controller")


//get records of all the student
studentRouter.get("/", get_all_students_controller)
// creates a student
studentRouter.post("/createStudent", create_student_controller)
//get records of the specific student
studentRouter.get("/getByName/:name?", get_studentByName_controller)
//delete records of the specific student by giving the id of student
studentRouter.delete("/deleteById/:id?", delete_student_controller)
//patch or update records of the specific student by giving the id of student
studentRouter.patch("/patchById/:id?", patch_student_controller)


module.exports = studentRouter;