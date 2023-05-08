const User = require("../models/User.js");

exports.getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await User.findById(id).select({ carts: 1 });
    res.status(200).json(cart);
    console.log(cart);
  } catch (error) {
    console.log(error);
  }
};

exports.saveCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { country, bp, price } = req.body;
    const user = await User.findById(id);
    const newCart = {
      country: country,
      bp: bp,
      price: price,
    };
    user.carts.push(newCart);
    await user.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const user = await User.findById(userId);
    user.carts = user.carts.filter((cart) => cart._id != id);
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
