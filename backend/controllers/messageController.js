const messaging = require('../models/messageModel')


const newMessage = async (req,res) => {
    const {name, email, message} = req.body
    try{
        const postMessage = await messaging.create({
            name,
            email,
            message
        })
        res.status(200).json(postMessage)

    } catch (error){
        res.status(400).json({error:"Please enter all fields"})
    }
}

module.exports = newMessage