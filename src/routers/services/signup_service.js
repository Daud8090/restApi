const Admin = require("../../models/adminModel")


/* using async await */

const signup_service = async (new_admin) => {
    try {

        const adminExists=await Admin.findOne(new_admin);
        if(adminExists)
        {
            throw new Error("admin exists" )
        }
        else
        {
            const admin = new Admin(new_admin);
            // before saving we need to encrypt password
            const createAdmin = await admin.save();
            if (createAdmin)
            return createAdmin;

        }
    }
    catch (e) {
        throw e;
    }
}

module.exports = signup_service;
