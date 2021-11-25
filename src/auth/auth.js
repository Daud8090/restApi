
function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];
    // console.log(bearerHeader)//correct

    // check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //split by space
        const bearer = bearerHeader.split(' ')
        
        //get token from array
        const bearerToken = bearer[1];
        // console.log(bearerToken)
        //set the token
        req.token = bearerToken;
        //call next middleware
        next();
    }
    else {
        //not allowed 
        res.sendStatus(403)
    }
}
module.exports = verifyToken;