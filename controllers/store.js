const FoodMenu = require("../models/foodMenu")
const {statusCodes} = require("http-status-codes")

const getFoodMenu = async(req, res) =>{
    const foodMenu = await FoodMenu.find({}).sort("createdAt")
    res.status(statusCodes.OK).json({
        foodMenu,
        count: foodMenu.length
    })
}

const createFoodMenu = async(req, res)=>{
    console.log(req.body)
    const menu = await FoodMenu.create(req.body)
    res.status(statusCodes.CREATED).json({menu})
}

module.exports = {
    getFoodMenu,
    createFoodMenu
}