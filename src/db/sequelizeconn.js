const {Sequelize,DataTypes} = require('sequelize');


const sequelize=new Sequelize('sample_db','root','root',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
    pool:{max:5,min:0,idle:10000}
});


sequelize.authenticate()
.then(()=>{
    console.log("connected by sequelize")
})
.catch((err)=>{
    console.log("error: ",err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require('../models/studentUsingSeq')(sequelize,Sequelize);

db.sequelize.sync({forced:true})
.then(()=>{
   console.log("yes re-sync") 
})
 
module.exports=db;