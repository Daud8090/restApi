const ErrorLog = require("../../models/errorModel")



const error_service = async (_error) => {
    try {

        var caller_line = _error.stack.split("\n")[1];
        var index = caller_line.indexOf("at ");
        var stack_trace = caller_line.slice(index + 2, caller_line.length);
        const error = { stack_trace, "error_message": _error.message }
        const stack = new ErrorLog(error);
        const createErrorStack = await stack.save();
        return createErrorStack;
    }
    catch (e) {
        throw new Error("cannot save error");
    }
}
module.exports = error_service;

//         // console.log(stack_trace);
//         //error save 