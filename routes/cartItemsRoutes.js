/*
Tatiana
*/

const express=require('express');
const cartItemsControllers=require('../controllers/cartItemsControllers');
const cartItemRouter=express.Router();

/*
Update shopping cart with book, delete book from shopping cart, get all books in cart.
*/

//@route /cart_items/

cartItemRouter.route("/").post(cartItemsControllers.addBookToCart);

cartItemRouter.route("/:ISBN&:cart_id").delete(cartItemsControllers.deleteBookFromCart);

cartItemRouter.route("/:cart_id").get(cartItemsControllers.getBookByCart);

module.exports=cartItemRouter;
