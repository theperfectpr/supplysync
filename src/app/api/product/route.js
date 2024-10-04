// create product
const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

// create a product
router.post('/product', async (req, res) => {
    try {
        const product = await Product.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update a product
router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.updateProduct(id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// delete a product
router.delete('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.deleteProduct(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get all products
router.get('/product', async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// to fetch all products by id
router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.getProduct(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
