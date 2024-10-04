const express = require('express');
const router = express.Router();
const Company = require('../../models/company');

// create a company
router.post('/company', async (req, res) => {
    const { companyName, products, locations, contactPerson, contactEmail, contactPhone, website } = req.body;
    try {
        const company = await Company.createCompany({ companyName, products, locations, contactPerson, contactEmail, contactPhone, website });
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get a company
router.get('/company/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const company = await Company.getCompanyById(id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// update a company
router.put('/company/:id', async (req, res) => {
    const { id } = req.params;
    const { companyName, products, locations, contactPerson, contactEmail, contactPhone, website } = req.body;
    try {
        const company = await Company.updateCompany(id, { companyName, products, locations, contactPerson, contactEmail, contactPhone, website });
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// write a function to delete a company
router.delete('/company/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Company.deleteCompany(id);
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// write a function to get all companies
router.get('/company', async (req, res) => {
    try {
        const companies = await Company.getAllCompanies();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
