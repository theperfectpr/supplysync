// create a order model, order will be placed by a company, and it will be made to a supplier it will contain relevant information of products quantity location and other details

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        receivedQuantity: {
            type: Number,
            default: 0
        },
        remainingQuantity: {
            type: Number,
            default: function () {
                return this.quantity;
            }
        }
    }],
    location: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
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

// create a function to create a order
orderSchema.statics.createOrder = async function (company, supplier, products, location, orderDate, deliveryDate, status) {
    const order = new this({ company, supplier, products, location, orderDate, deliveryDate, status });
    await order.save();
    return order;
};

// create a function to update a order 
orderSchema.statics.updateOrder = async function (orderId, company, supplier, products, location, orderDate, deliveryDate, status) {
    const order = await this.findByIdAndUpdate(orderId, { company, supplier, products, location, orderDate, deliveryDate, status });
    return order;
};



// Add a pre-save hook to update remainingQuantity
orderSchema.pre('save', function (next) {
    this.products.forEach(product => {
        product.remainingQuantity = product.quantity - product.receivedQuantity;
    });
    next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
