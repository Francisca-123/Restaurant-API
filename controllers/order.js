const order = require('../models/order')
const {statusCodes} = require('http-status-codes')
const {badRequestError} = require("../errors/badRequest")
const cart = require('../models/cart')

const createOrder = async (req, res) =>{
    const body = req.body
    const sessionId = req.headers.sessionId

    if(!sessionId){
        throw new badRequestError("invalid session ID")
    }

    const cart = await cart.findOne({sessionId: sessionId}).populate({path:"item.value"})

    if(!cart){
        throw new badRequestError("Invalid session ID")
    }

    const buyer = req.body.buyer
    const cartItems = []
    let total_fee = 0
    let total_quantity = 0

    cart.items.map(item => {
        const value = item.value[0]
        cartItems.push({
            name: value.name,
            description: value.description,
            amount:value.amount,
            quantity:item.quantity
        })
        total_fee += value.amount
        total_quantity += item.quantity

    })
    console.log(cartItems, total_fee, total_quantity);
    const order = await order.create({
        buyer: buyer,
        cartItems:cartItems,
        total_fee: total_fee,
        total_quantity:total_quantity,
        sessionId:sessionId
    })

    await cart.findOneAndDelete({
        _id: cart._id,
        res.status(statusCodes.OK).json({order, status:"success"})
    })
}

const getOrders = async (req, res) =>{
    const orders = await order.find({sessionId: req.headers.sessionId}).sort("creatAt")
    res.status(statusCodes.OK).json({orders})
}

module.exports ={
    createOrder,
    getOrders
}