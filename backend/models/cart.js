const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: String, // Assuming productId is a string
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  images: {
    type: [String], // Assuming images is an array of strings
    required: true
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
