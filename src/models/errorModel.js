const mongoose = require('mongoose');
const validator=require("validator")



const errorLogsSchema = new mongoose.Schema({
    stack_trace: {
        type: String,
        required: true
        },
    error_message: {
        type: String,
        required: true,
    },
    timestamp: { type: Date, default: Date.now},   
})

// now we will create a new model


const ErrorLog = mongoose.model('Error_logs', errorLogsSchema);
module.exports = ErrorLog;