// this is a middle model for company and supplier create a model for it where we can store information of supplier and company makes a deal

const mongoose = require('mongoose');

const companySupplierSchema = new mongoose.Schema({
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    contractStartDate: {
        type: Date,
        required: true,
    },
    contractEndDate: {
        type: Date,
    },
    paymentTerms: {
        type: String,
        enum: ['Net 30', 'Net 60', 'Net 90', 'Immediate'],
        default: 'Net 30',
    },
    creditLimit: {
        type: Number,
    },
    discountRate: {
        type: Number,
        min: 0,
        max: 100,
    },
    preferredSupplier: {
        type: Boolean,
        default: false,
    },
    notes: {
        type: String,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// write a function to create a company supplier
companySupplierSchema.statics.createCompanySupplier = async function (companyId, supplierId, contractStartDate, contractEndDate, paymentTerms, creditLimit, discountRate, preferredSupplier, notes) {
    const companySupplier = new this({ companyId, supplierId, contractStartDate, contractEndDate, paymentTerms, creditLimit, discountRate, preferredSupplier, notes });
    await companySupplier.save();
    return companySupplier;
};

// write a function to update a company supplier
companySupplierSchema.statics.updateCompanySupplier = async function (id, companyId, supplierId, contractStartDate, contractEndDate, paymentTerms, creditLimit, discountRate, preferredSupplier, notes) {
    const companySupplier = await this.findByIdAndUpdate(id, { companyId, supplierId, contractStartDate, contractEndDate, paymentTerms, creditLimit, discountRate, preferredSupplier, notes });
    return companySupplier;
};

// write a function to delete a company supplier
companySupplierSchema.statics.deleteCompanySupplier = async function (id) {
    await this.findByIdAndDelete(id);
};

// write a function to get a company supplier
companySupplierSchema.statics.getCompanySupplier = async function (id) {
    const companySupplier = await this.findById(id);
    return companySupplier;
};

// write a function to get all company suppliers
companySupplierSchema.statics.getAllCompanySuppliers = async function () {
    const companySuppliers = await this.find();
    return companySuppliers;
};

const CompanySupplier = mongoose.model('CompanySupplier', companySupplierSchema);

module.exports = CompanySupplier;
