const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const stripe = require('stripe')('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')


const myCart = require('./routes/cartRoutes')
const messageRoute = require('./routes/messageRoutes')

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.post("/api/create-checkout-session", async (req, res) => {
    try {
      const { cart, size } = req.body;
  
      // Ensure that cart is an array
      
  
      const lineItems = cart.map(item => ({
        price: item.id, // Use the Stripe price ID for the item
        quantity: 1,
      }));
      
      
      

      console.log(lineItems)
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
        billing_address_collection: "required",
      });
  
      res.json({ id: session.id }); 
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred while creating a checkout session from backend' });
    }
  });
  
     
 
mongoose.connect(process.env.MONGO_URI)
.then(() => { 
    app.listen(process.env.PORT, ()=> {
        console.log("Listening to port " +process.env.PORT)
    })  
    
}) 
 
.catch((error) => {
    console.log(error) 
})

app.use('/api/cart', myCart)
app.use('/api/message', messageRoute)


