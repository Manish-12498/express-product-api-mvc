const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100,
        trim: true
    },

    description: {
        type: String,
        maxlength: 500
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    category: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        default: 0,
        min: 0
    },


    isAvailable: {
        type: Boolean,
        default: true
    }

}, {
    timestamps: true // creates createdAt + updatedAt automatically
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;