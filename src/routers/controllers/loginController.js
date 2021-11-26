const login_service = require("../services/login_service");
const jwt = require('jsonwebtoken');

/* using async await */

const login_controller = async (req, res) => {
    try {
        //send the student data to validate and save
        const { email, password } = req.body;
        // res.send(req.body)
        if (!email) {
            throw new Error("email empty")
        }
        else if (!password) {
            throw new Error("password empty")
        }
        else {

            const anotherAdmin = { email, password };
            const getAdmin = await login_service(anotherAdmin)
            if(getAdmin)
            {
                jwt.sign({ user: getAdmin }, 'secretKey', (err, token) => {
                    res.json({
                        token: token,
                        "message":"successfully login",
                        getAdmin
                    })
                })
            }
            // return res.status(200).send(getAdmin);
        }

    }
    catch (e) {
        // console.log(e);
        return res.status(400).send({ error: e.message });
    }
}

module.exports = login_controller;


// (req, res) => {

//     jwt.sign({ user: user }, 'secretKey',{expiresIn:'30s'}, (err, token) => {
//         res.json({
//             token: token
//         })
//     })
// }