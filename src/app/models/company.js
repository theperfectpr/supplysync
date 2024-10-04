// create a company model with parameters like companyName, products, locations, contactPerson, contactEmail, contactPhone, website, createdAt, updatedAt, userId

const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    locations: [{
        type: String,
        required: true
    }],
    contactPerson: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactPhone: {
        type: String,
        required: true
    },
    website: {
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

// write a function to create a company
companySchema.statics.createCompany = async function (companyName, products, locations, contactPerson, contactEmail, contactPhone, website) {
    const company = new this({ companyName, products, locations, contactPerson, contactEmail, contactPhone, website });
    await company.save();
    return company;
};

// write a function to update a company
companySchema.statics.updateCompany = async function (id, companyName, products, locations, contactPerson, contactEmail, contactPhone, website) {
    const company = await this.findByIdAndUpdate(id, { companyName, products, locations, contactPerson, contactEmail, contactPhone, website });
    return company;
};

// write a function to delete a company
companySchema.statics.deleteCompany = async function (id) {
    await this.findByIdAndDelete(id);
};

// write a function to get a company
companySchema.statics.getCompany = async function (id) {
    const company = await this.findById(id);
    return company;
};

// write a function to get all companies
companySchema.statics.getAllCompanies = async function () {
    const companies = await this.find();
    return companies;
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
