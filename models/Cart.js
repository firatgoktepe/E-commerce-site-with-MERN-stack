const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: String,
    },
    Items: [{
        productId: {
            type: String,
        },
        name: String,
        price: Number,
        quantity: {
            type: Number,
            default: 1,
            required: true,
            min: [1, 'Quantity must be at least 1']
        },
    }],
    bill: {
        type: Number,
        default: 0,
        required: true
    }
})

module.exports = Cart = mongoose.model('cart', CartSchema);