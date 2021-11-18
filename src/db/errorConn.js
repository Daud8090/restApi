const mongoose = require('mongoose');


const DB="mongodb+srv://root:root@cluster0.cfnpi.mongodb.net/studentapi?retryWrites=true&w=majority" ;

mongoose.connect(DB).then(()=>{
console.log("sucessfull connection with error_logs collection");
})
.catch((err)=> console.log("err in connection"));
