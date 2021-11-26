const express = require('express');
const signupRouter = new express.Router();
const jwt = require('jsonwebtoken');
const signupController=require('./controllers/signupController')


signupRouter.post("/",signupController)


module.exports = signupRouter;