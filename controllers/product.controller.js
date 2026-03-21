const ProductModel = require("../model/productModel");
const Prodct = require("../model/productModel");


//Bussiness Logic

const getProduct = async (req, res) => {

    try {
        const allProducts = await ProductModel.find();
        if (!allProducts || allProducts.length === 0) {
            return res.json({
                message: "There is no Product"
            });

        }
        res.status(200).json({
            success: true,
            message: allProducts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        });

    }

};

const getProductById = async (req, res) => {

    try {
        const Product = await ProductModel.findById(req.params.id);

        if (!Product) {
            res.status(404).json({
                success: false,
                message: "There is no Product"
            });

        }
        res.status(200).json({
            success: true,
            message: Product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Invalid ID or Server Error !"
        });
    }
};

const addProduct = async (req, res) => {
    try {
        let { name, description, price, category, stock } = req.body;

        if (!name || !price === undefined) {
            return res.status(400).json({
                success: false,
                message: "Name and Price are Required "
            });
        }
        price = Number(price);
        stock = Number(stock) || 0;
        if (isNaN(price) || price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price cannot be negative OR Zero "
            });
        }
        const newProduct = await ProductModel.create(
            {
                name,
                description,
                price,
                category,
                stock
            });

        return res.status(201).json({
            succes: true,
            data: newProduct
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }

}

const updateProductById = async (req, res) => {
    const ProductId = req.params.id;

    try {
        let { name, description, price, category, stock } = req.body;

        if (!name || price === undefined) {
            return res.status(400).json({
                success: false,
                message: "Name and Price are Required "
            });
        }
        price = Number(price);
        stock = Number(stock) || 0;

        if (isNaN(price) || price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price cannot be negative OR Zero "
            });
        }
        const updateProduct = await ProductModel.findByIdAndUpdate(ProductId, { name, description, price, category, stock },{new:true});
        if (!updateProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: updateProduct
        });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });

    }

}

module.exports = {
    getProduct,
    getProductById,
    addProduct,
    updateProductById,

    
}