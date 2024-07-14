const express = require("express");

const router = express.Router()



const {cartProduct, getcart, removecart, updateItemQuantity , totalUniqueItems} = require("../controllers/cartControlles")

router.post("/addcart/:id", cartProduct);
router.get("/getcart", getcart);
router.post("/removecarts/:id", removecart);
router.post('/updatecart', updateItemQuantity);
router.get('/totalUniqueItems',totalUniqueItems);


module.exports = router