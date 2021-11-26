const signup_service = require("../services/signup_service");
// const ErrorLog = require("../../models/errorModel")
// const error_service = require('../services/error_service');

/* using async await */

const signup_controller = async (req, res) => {
    try {
        //send the student data to validate and save
        const { email, username, password } = req.body;
        // res.send(req.body)
        if (!email) { throw new Error("email empty") }
        else if (!username) throw new Error("name empty")
        else if (!password) throw new Error("password empty");
        else {
            const anotherAdmin = { email, username, password };
            const createdAdmin = await signup_service(anotherAdmin)
            if (createdAdmin) {
                return res.status(201).send(createdAdmin);

            }
        }

    }
    catch (e) {
        // console.log(e);
        return res.status(400).send({ error: e.message });
    }
}

module.exports = signup_controller;
