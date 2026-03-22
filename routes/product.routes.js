const express = require('express');
const router = express.Router();

const {
    getProduct,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById,

}=require("../controllers/product.controller")

router.route("/products").get(getProduct).post(addProduct);
router.route("/products/:id",).get(getProductById).patch(updateProductById).delete(deleteProductById);


module.exports = router
