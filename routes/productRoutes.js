const express = require('express');
const router = express.Router();

const {
    getProduct,
    getProductById,
    addProduct,

}=require("../controllers/productController")

router.route("/products").get(getProduct).post(addProduct);
router.get("/products/:id",getProductById);


module.exports = router
