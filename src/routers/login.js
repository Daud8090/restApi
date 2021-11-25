const express = require('express');
const loginRouter = new express.Router();
const jwt = require('jsonwebtoken');


loginRouter.post("/", (req, res) => {
    const user = {
        id: 1,
        username: 'brad',
        email: 'brad@brad.com'
    }
    jwt.sign({ user: user }, 'secretKey', (err, token) => {
        res.json({
            token: token
        })
    })
})


module.exports = loginRouter;