// const Sequelize = require('sequelize')
// const sequelize=require('../db/sequelizeconn')

module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("student", {
        //sequelize.BIGInteger
        id:{type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name: Sequelize.STRING ,
        email: { type: Sequelize.STRING,
        defaultValue:'abc@abc.com' },
        address: Sequelize.STRING ,

    })
    return Students;
}
