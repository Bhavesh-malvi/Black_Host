const express = require("express");

const router = express.Router()


const {adminUser , getDataUser , deleteProduct , updateProduct, moreProduct, categoryProduct } = require("../controllers/productControlles")

router.post("/admin", adminUser);
router.get("/getData", getDataUser);
router.post("/delete/:id", deleteProduct);
router.post("/update/:id", updateProduct);
router.post("/more/:id", moreProduct);
router.get("/category/:category", categoryProduct);

module.exports = router
