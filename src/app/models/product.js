// create a product model with parameters like name, description, price, stock, category, createdAt, updatedAt

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// write a function to create a product
productSchema.statics.createProduct = async function (name, description, price, stock, category) {
    const product = new this({ name, description, price, stock, category });
    await product.save();
    return product;
};

// write a function to update a product
productSchema.statics.updateProduct = async function (id, name, description, price, stock, category) {
    const product = await this.findByIdAndUpdate(id, { name, description, price, stock, category });
    return product;
};

// write a function to delete a product
productSchema.statics.deleteProduct = async function (id) {
    await this.findByIdAndDelete(id);
};

// write a function to get a product
productSchema.statics.getProduct = async function (id) {
    const product = await this.findById(id);
    return product;
};

// write a function to get all products
productSchema.statics.getAllProducts = async function () {
    const products = await this.find();
    return products;
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;