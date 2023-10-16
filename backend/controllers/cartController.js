const cartItem = require('../models/cartModel')




const getProducts = async (req, res) => {

    
    
    
   console.log(req.user)
    
    const user_id = req.user
   
    const getItems = await cartItem.find({user_id}).sort({createdAt : -1})
    res.status(200).json(getItems)
    console.log(getItems)
   
}

const addProduct = async (req,res) => {

    const user_id = req.user
    const {id, product, size, price, url} = req.body
    
    
     
    try{

        const addItems = await cartItem.create({
            id,
            product,
            size,
            price,
            url, 
            user_id

            
            
            
            
            
        })
        res.status(200).json(addItems)
        

    }catch(error){
        res.status(400).json({error: error.message})
    } 
}

const deleteProduct = async (req, res) => {

    const {id} = req.params
    try {
        const deleteItem = await cartItem.findOneAndDelete({_id: id})
        res.status(200).json(deleteItem)
        

    }catch(error){
        res.status(400).json({error: error.message})
    }
}
 
module.exports = {
    getProducts,
    addProduct,
    deleteProduct
}

