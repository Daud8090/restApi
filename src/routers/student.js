const express = require('express');
const router = new express.Router();
// const Student = require("../models/students")
const create_student_controller = require("./controllers/create_student_controller")
const get_data_controller = require("./controllers/get_data_controller")
const get_singleData_controller = require("./controllers/get_singleData_controller")
const delete_student_controller = require("./controllers/delete_student_controller")
const patch_student_controller = require("./controllers/patch_student_controller")



router.post("/students", create_student_controller)
router.get("/students", get_data_controller)
router.get("/students/:name", get_singleData_controller)
router.delete("/students/:id", delete_student_controller)
router.patch("/students/:id", patch_student_controller)


module.exports = router;