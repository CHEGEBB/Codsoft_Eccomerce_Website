const CartItem = require('../models/cart');

exports.addItemToCart = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const newItem = new CartItem({ name, price, category });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};
