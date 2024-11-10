import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    productname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Order = new mongoose.model('Order',orderSchema);

export default Order