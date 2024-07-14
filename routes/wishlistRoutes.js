const express = require("express");

const router = express.Router()


const {addwishlist, getwishlist, removewishlist , totalUniquewishes} = require("../controllers/wishlistControlles")

router.post("/addwishlist/:id", addwishlist);
router.get("/getwishlist", getwishlist);
router.post("/removewishlist/:id", removewishlist);
router.get('/totalUniquewishes',totalUniquewishes);


module.exports = router