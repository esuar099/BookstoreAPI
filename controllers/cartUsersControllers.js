/*
Tatiana
*/

const CartUser=require("../models/CartUser");

exports.createNewCart = async (req, res, next)=> {
    try{
        let {user_id}=req.body;
        let cart_user=new CartUser(user_id);
        cart_user = await cart_user.save();
        console.log(cart_user);
        res.status(201).json({message:"Cart created"});
    } catch(error){
        next(error);
    }
}
