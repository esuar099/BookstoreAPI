/*
Tatiana
*/

const express=require('express');
const cartUsersControllers=require('../controllers/cartUsersControllers');
const cartUserRouter=express.Router();

/*
Our one function here is to create a shopping cart instance for a user - therefore, we only have a post request to add a user to the table.
*/

//@route POST - /cart_users/
cartUserRouter.route("/").post(cartUsersControllers.createNewCart)

//router.route("/:id").get(postControllers.getAuthorById);

module.exports=cartUserRouter;