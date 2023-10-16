const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cartItem = new Schema({
    id:{
        type: String
    },
    product: {
        type: String
    },
    size: {
        type: String
    },
    price:{
        type: Number
    },
    url:{
        type: String
    },
    user_id:{
        type: String
    }
    
   
    
    
},{timestamps: true}) 

module.exports = mongoose.model('online', cartItem)