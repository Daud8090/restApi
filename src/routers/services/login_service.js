const Admin = require("../../models/adminModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


/* using async await */

const login_service = async (new_admin) => {
    try {
        const adminExists = await Admin.findOne({ email: new_admin.email });

        if (adminExists) {
            const isMatch =await bcrypt.compare(new_admin.password,adminExists.password);
            if(isMatch)
            return adminExists
            else{
                throw new Error("invalid credentials1")
            }
        }
        else {
            throw new Error("invalid credentials2")
        }
    }
    catch (e) {
        throw new Error(e);
    }
}

module.exports = login_service;
