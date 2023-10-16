
const admin = require('../config/firebase-config')
const User = require('../models/cartModel')

const requireAuth = async( req, res, next) => {
    

    
    const {authorization} = req.headers
    

    const token = authorization.split(' ')[1]
    console.log(token)


    try { 

    

        const decodeValue = await admin.auth().verifyIdToken(token) //in the token there is a long string and in  the long string, there is the uid which will give access to the user id
 
    if(decodeValue){
         
    console.log(decodeValue)
    req.user = decodeValue.user_id
    console.log(req.user)
        
       return next()
     
    }
    return res.json({message: 'Unauthorized'})
}catch(error){
    return res.json({message: 'Internal Error'})
}



}

module.exports = requireAuth