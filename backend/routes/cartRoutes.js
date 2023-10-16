

const requireAuth = require('../middleware/requireAuth')

const app = require('express')
const express = require('express')
const { addProduct,
getProducts,
deleteProduct }  = require('../controllers/cartController')




 
  
const router = express.Router()

router.use(requireAuth)

router.get('/', getProducts )

router.post('/', addProduct )

router.delete('/:id', deleteProduct )



module.exports = router  