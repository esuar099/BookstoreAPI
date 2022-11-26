/*
Tatiana
*/

const CartItem=require("../models/CartItem");

exports.addBookToCart = async (req, res, next)=> {
    try{
        let {ISBN,cart_id}=req.body;
        let cart_item=new CartItem(ISBN, cart_id);
        cart_item = await cart_item.save();
        console.log(cart_item);
        res.status(201).json({message:"Book added"});
    } catch(error){
        next(error);
    }
}

exports.deleteBookFromCart=async(req, res, next)=>{
    try{
        let ISBN=req.params.ISBN;
        let cartId=req.params.cart_id;
        
        let [deletedItem, _]=await CartItem.deleteBookFromCart(ISBN, cartId);

        res.status(200).json({deletedItem: deletedItem[0]})
    }
    catch(error){
        next(error);
    }
}

exports.getBookByCart=async(req, res, next)=>{
    try{
        let cartId=req.params.cart_id;
        let[books,_]=await CartItem.findAllBooks(cartId);
        res.status(200).json({books});
    }
    catch(error){
        console.log(error);
        next(error);
    }
}