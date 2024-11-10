import mongoose from 'mongoose';

import Order from '../models/Order.js';

export const createOrder = async (req,res)=>{
    //http://localhost:5000/
    const order = req.body;

    console.log('working');

    if(!order.productname|| !order.price || !order.quantity || !order.status){
        return res.status(400).json({succes:false,message:"please send all the data"});
    }

    const newOrder = new Order(order);

    try{
        await newOrder.save();
        res.status(201).json({succes:true,data:newOrder});
    }catch(error){
        console.log('error in creating product',error.message);
        res.status(500).json({succes:false,message:"server error"})
    }
}


export const getOrder = async (req,res)=>{
    try{
        const orders = await Order.find({})
        res.status(200).json({succes:true,data:orders})
    }catch(error){
        console.log('error in finding products',error.message);
        res.status(500).json({succes:false,message:"server error could not find product"});
    }
    
}

export const deleteOrder = async (req,res)=>{
    const {id} = req.params;
    try{
        await Order.findByIdAndDelete(id);
        res.status(400).json({succes:true,message:"Product Deleted"})
    }catch(error){
        console.log('error in Deleting Product',error.message);
        res.status(404).json({succes:false,message:"Product not deleted"})
    }
}

export const updateOrder = async (req,res)=>{

    const {id} = req.params; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({succes:false,message:"Id not found"});
    }
    
    const order = req.body;
    try{
        const updatedorders = await Order.findByIdAndUpdate(id,order,{new:true});
        res.status(200).json({succes:true,message:"product updated"})
    }catch(error){
        console.log("Error in Updating the Product ",error,message);
        res.status(500).json({succes:false,message:"Error in upadating the product"})
    }
}

