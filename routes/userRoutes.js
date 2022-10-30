const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

// @route GET && POST - /users/
router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createNewUser);

router.route("/:username").get(userControllers.getByUsername);

router.route("/:id").delete(userControllers.deleteId);

router.route("/username").put(userControllers.updateUsername);

router.route("/password").put(userControllers.updatePassword);

router.route("/fullname").put(userControllers.updateName);

router.route("/address").put(userControllers.updateAddress);

//Credit Card Routes
router.route("/card/:id").get(userControllers.showAllCards);

router.route("/card").post(userControllers.createCreditCard);

router.route("/card").delete(userControllers.deleteCreditCard);

module.exports = router;
