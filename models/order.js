const { timeStamp } = require("console")
const mongoose = require("mongoose")

const {Schema} = require("mongoose")

const BuyerSchema = new Schema({
    name:{
        type:String,
        required:[true, "Name is Required"]
    },
    phone:{
        type:String,
        required:[true, "Phon no is Required"]
    },
    email:{
        type:String,
        required:false
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:false
    }
})

const OrderItemSchema = new Schema ({
    name:{
        type: String,
        required: [ true, "Name is Required"],

    description:{
        type: String,
        required:[true, "description is required"]
    },
    amount:{
        type:Number,
        required:[true, "Amount is required"]
    },
    quantity:{
        type:Number,
        required:[true, "Qquantity is required"]
    },

    }
})

const OrderSchema = new Schema({
    total_fee:{
        type: Number,
        required: [true, "Totl amount is require"]
    },
    total_quantity:{
        type:Number,
        required:[true, "Total quantity is required"]
    },
    cartItems:{
        type:[OrderItemSchema],
        required:[true, "Item is required"]
    },
    buyer:{
        type:[BuyerSchema],
        required:[true]
    },
    sessionId:{
        type:String,
        required:[true]
    }

}, {timeStamps:true})

module.exports = mongoose.model("Order", OrderSchema)