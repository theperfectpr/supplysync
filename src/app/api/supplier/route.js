// create a route for supplier to create, get, update a supplier

const express = require('express');
const router = express.Router();
const Supplier = require('../../models/supplier');

// create a supplier
router.post('/supplier', async (req, res) => {
    try {
        const supplier = await Supplier.createSupplier(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get a supplier
router.get('/supplier/:id', async (req, res) => {
    try {
        const supplier = await Supplier.getSupplier(req.params.id);
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update a supplier
router.put('/supplier/:id', async (req, res) => {
    try {
        const supplier = await Supplier.updateSupplier(req.params.id, req.body);
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get all suppliers
router.get('/supplier', async (req, res) => {
    try {
        const suppliers = await Supplier.getAllSuppliers();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
