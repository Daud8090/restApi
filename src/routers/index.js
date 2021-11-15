const express = require('express');
const studentRouter =require("./student")
const router = new express.Router();


router.use('/students',studentRouter);


module.exports = router;