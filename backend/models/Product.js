const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    category : { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number, required: true },
    rating: { type: Number, required: true },
    images: [{ type: String, required: true }],
});

// Create a compound index on the 'name' and 'price' fields
productSchema.index({ name: 1, price: 1 }, { unique: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
