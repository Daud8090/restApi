const create_student_service = require("../services/create_student_service");

const create_student_controller = async (req, res) => {
    try {
        //send the student data to validate and save
        const { name, email, phone, address } = req.body;

        if (!name) throw "name empty";
        else if (!email) throw "email empty";
        else if (!phone) throw "phone empty";
        else if (!address) throw "address empty";
        else {
            const new_student={name,email,phone,address};
            const createStudent = await create_student_service(new_student)
            return res.status(201).send(createStudent);
        }

    }
    catch (e) {
        // console.log(e);
        return res.status(400).send({ error: e });
    }
}
module.exports = create_student_controller;