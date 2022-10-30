const CreditCard = require("../models/CreditCard");
const User = require("../models/User");

//Working
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Working
exports.createNewUser = async (req, res, next) => {
  try {
    let { username, password, full_name, email, home_address } = req.body;
    let user = new User(username, password, full_name, email, home_address);

    user = await user.save();

    res.status(201).json({ message: "User was created." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//working
exports.deleteId = async (req, res, next) => {
  try {
    let user_id = req.params.id;
    await User.deleteById(user_id);

    res.status(200).json({ message: "User was deleted." });
  } catch (error) {
    next(error);
  }
};

//Working
exports.getByUsername = async (req, res, next) => {
  try {
    let username = req.params.username;

    let [user, _] = await User.findByUsername(username);

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

//Working
exports.updateUsername = async (req, res, next) => {
  try {
    let { username, user_id } = req.body;

    await User.updateUsername(username, user_id);

    res.status(200).json({ message: "Username was updated." });
  } catch (error) {
    next(error);
  }
};

//Working
exports.updatePassword = async (req, res, next) => {
  try {
    let { password, user_id } = req.body;

    await User.updatePassword(password, user_id);
    res.status(200).json({ message: "Password was updated." });
  } catch (error) {
    next(error);
  }
};

//working
exports.updateName = async (req, res, next) => {
  try {
    let { full_name, user_id } = req.body;

    await User.updateName(full_name, user_id);
    res.status(200).json({ message: "Name was updated." });
  } catch (error) {
    next(error);
  }
};

//working
exports.updateAddress = async (req, res, next) => {
  try {
    let { home_address, user_id } = req.body;

    await User.updateAddress(home_address, user_id);
    res.status(200).json({ message: "Home address was updated." });
  } catch (error) {
    next(error);
  }
};

//working
exports.createCreditCard = async (req, res, next) => {
  try {
    let { company, number, user_id } = req.body;
    let card = new CreditCard(company, number, user_id);

    card = await card.save();

    res.status(201).json({ message: "New credit card was created." });
  } catch (error) {
    next(error);
  }
};

//working
exports.showAllCards = async (req, res, next) => {
  try {
    let user_id = req.params.id;
    const cards = await CreditCard.showAll(user_id);

    res.status(200).json({ cards });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//working
exports.deleteCreditCard = async (req, res, next) => {
  try {
    let { number } = req.body;
    await CreditCard.deleteCreditCard(number);

    res.status(200).json({ message: "Credit Card was deleted." });
  } catch (error) {
    next(error);
  }
};
