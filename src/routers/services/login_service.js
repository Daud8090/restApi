const Admin = require("../../models/adminModel")
const jwt = require('jsonwebtoken');


/* using async await */

const login_service = async (new_admin) => {
    try {
        const adminExists = await Admin.findOne(new_admin);

        if (adminExists) {
            return adminExists
            // const pasMatch = await Admin.findOne({ password: new_admin.password })
            // if (!pasMatch)
            //     return res.status(400).json({ error: "invalid credentials" })
            // else {
                    // jwt.sign({ user: new_admin }, 'secretKey', (err, token) => {
                    //     return {
                    //         token: token,
                    //         "message":"successfully login"
                    //     }
                    // })
            // }
        }
        else {
            return { error: "invalid credentials" }
        }
    }
    catch (e) {
        throw e;
    }
}

module.exports = login_service;
