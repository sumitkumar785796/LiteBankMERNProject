const { customer, Transaction } = require('../models/customermodel')
exports.AddCustomer = async (req, res) => {
    try {
        const { name, email, amount } = req.body
        const sendData = await customer.create({
            name, email, amount
        })
        return res.status(201).json({ message: 'Customer is added successfully...', data: sendData })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error...' })

    }
}
exports.transferAmount = async (req, res) => {
    const { id } = req.params
    const { receiverId } = req.body
    const balance = parseFloat(req.body.balance)

    try {
        const sender = await customer.findById(id)
        const receiver = await customer.findById(receiverId)
        if (id === receiverId) {
            return res.status(400).json({ message: 'Can not transfer money Because Sender and receiver are same' })
        }
        if (!sender || !receiver) {
            return res.status(400).json({message:'Customer not found'})
        }
        if (sender.amount < balance) {
            return res.status(400).json({message:'Insufficient balance'})
        }
        if (balance <= 0) {
            return res.status(400).json({message:'Invalid amount'})
        }
        sender.amount -= balance
        receiver.amount += balance
        const send = await sender.save()
        const rec = await receiver.save()
        const transfer = await Transaction.create({
            sender: id,
            receiver: receiverId,
            balance
        })
        return res.status(200).json({ message: 'Transfer amount successful', data: transfer, sender: send, receiver: rec })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
};
exports.viewCustomerTransaction = async (req, res) => {
    try {
        const view = await Transaction.find().populate('sender receiver')
        return res.status(200).json({ message: 'View data', data: view })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error...' })
    }
}
exports.viewCustomer = async (req, res) => {
    try {
        const view = await customer.find()
        return res.status(200).json({ message: 'View data', data: view })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error...' })
    }
}
exports.SingleViewCustomber = async (req, res) => {
    try {
        const { id } = req.params
        const view = await customer.findById(id)
        return res.status(200).json({ message: 'View data', data: view })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error...' })
    }
}