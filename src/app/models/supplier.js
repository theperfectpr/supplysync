// create a supplier model with parameters like companyName, products, locations, contactPerson, contactEmail, contactPhone, website, createdAt, updatedAt, userId

const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Product',
        required: true
    },
    locations: {
        type: [String],
        required: true
    },
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
    businessSize: {
        type: String,
        enum: ['small', 'medium', 'large'],
        required: true
    },
    businessType: {
        type: String,
        enum: ['sole proprietorship', 'partnership', 'corporation', 'limited liability company', 'other'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// create a function to create a supplier
supplierSchema.statics.createSupplier = async function (companyName, products, locations, contactPerson, contactEmail, contactPhone, website, businessSize, businessType, userId) {
    const supplier = new this({ companyName, products, locations, contactPerson, contactEmail, contactPhone, website, businessSize, businessType, userId });
    await supplier.save();
    return supplier;
};

// create a function to update a supplier
supplierSchema.statics.updateSupplier = async function (supplierId, companyName, products, locations, contactPerson, contactEmail, contactPhone, website, businessSize, businessType, userId) {
    const supplier = await this.findByIdAndUpdate(supplierId, { companyName, products, locations, contactPerson, contactEmail, contactPhone, website, businessSize, businessType, userId }, { new: true });
    return supplier;
};

// create a function to delete a supplier
supplierSchema.statics.deleteSupplier = async function (supplierId) {
    const supplier = await this.findByIdAndDelete(supplierId);
    return supplier;
};

// create a function to get a supplier
supplierSchema.statics.getSupplier = async function (supplierId) {
    const supplier = await this.findById(supplierId);
    return supplier;
};

// create a function to get all suppliers
supplierSchema.statics.getAllSuppliers = async function () {
    const suppliers = await this.find();
    return suppliers;
};










const Supplier = mongoose.model('Supplier', supplierSchema);


