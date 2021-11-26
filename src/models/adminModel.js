const mongoose = require('mongoose');
const validator=require("validator");



const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
        },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    timestamp: { type: Date, default: Date.now},   
})

// now we will create a new model


const AdminSignup = mongoose.model('admin_signup', signupSchema);
module.exports = AdminSignup;