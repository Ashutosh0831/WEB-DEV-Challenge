const webtoken = require("jsonwebtoken")


async function identifyUser(req, res, next){
    const token = req.cookie.token

    if(!token){
        return res.status(401).json({
            message : "Unauthorised access"
        })
    }

    let decode = null;

    try{
        decode =await webtoken.verify(token, process.env.JWT_SECRET_TOKEN)
    }catch(err){
        return res.status(401).json({
            message : "User is not authorised"
        })
    }

    req.user = decode

    next()
}


module.exports = identifyUser