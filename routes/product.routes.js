const express = require('express');
const router = express.Router();

const {
    getProduct,
    getProductById,
    addProduct,
    updateProductById,

}=require("../controllers/product.controller")

router.route("/products").get(getProduct).post(addProduct);
router.route("/products/:id",).get(getProductById).patch(updateProductById);


module.exports = router
