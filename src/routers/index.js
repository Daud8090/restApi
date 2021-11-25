const express = require('express');
const studentRouter = require("./student")
const router = new express.Router();
const jwt = require('jsonwebtoken');
const loginRouter=require('./login');
// const verifyToken=require('../auth/auth');


router.use('/students', studentRouter);
router.use('/api/login',loginRouter);




// example for jwt

// router.post('/api/posts',verifyToken,(req,res)=>{
//     // console.log("---------->",req.token)//correct
//     jwt.verify(req.token, 'secretKey' ,(err,authData)=>{
//         if(err){
//             console.log(err)
//             res.sendStatus(403)
//         }
//         else
//         {
//             res.json({
//                 message :'p creating...............',
//                 authData
//             })
//         }
//     })
// })


// router.post("/api/login", (req, res) => {
//     const user = {
//         id: 1,
//         username: 'brad',
//         email: 'brad@brad.com'
//     }
//     jwt.sign({ user: user }, 'secretKey', (err, token) => {
//         res.json({
//             token: token
//         })
//     })
// })

//verify token

// function verifyToken(req, res, next) {
//     //get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // console.log(bearerHeader)//correct

//     // check if bearer is undefined
//     if (typeof bearerHeader !== 'undefined') {
//         //split by space
//         const bearer = bearerHeader.split(' ')
        
//         //get token from array
//         const bearerToken = bearer[1];
//         // console.log(bearerToken)
//         //set the token
//         req.token = bearerToken;
//         //call next middleware
//         next();
//     }
//     else {
//         //not allowed 
//         res.sendStatus(403)
//     }
// }




module.exports = router;