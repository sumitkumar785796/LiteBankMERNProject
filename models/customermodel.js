const mongoose = require('mongoose')
const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})
const transactionSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    balance: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const customer = new mongoose.model('Customer', CustomerSchema)
const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = { customer, Transaction }