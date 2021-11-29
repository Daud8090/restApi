const mongoose = require('mongoose');
const validator=require("validator");
const bcrypt = require('bcrypt')



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

// perform the pre function which will bcrypt the password

signupSchema.pre('save',async function(next){
if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,12);
}
next();
})







// now we will create a new model


const AdminSignup = mongoose.model('admin_signup', signupSchema);
module.exports = AdminSignup;