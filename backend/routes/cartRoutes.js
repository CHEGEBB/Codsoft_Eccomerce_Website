const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Ensure you have the Product model



// Route to handle adding item to cart
router.get('/add-to-cart/:name/:price/:category', async (req, res) => {
    try {
        const { name, price, category } = req.params;
        const product = await Product.findOne({ 
            name: decodeURIComponent(name), 
            price: parseFloat(price), 
            category: decodeURIComponent(category) 
        });

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to add the added items to cart
router.post('/add-to-cart', async (req, res) => {
    try {
        const items = req.body;
        // Save items data to the database
        await Product.insertMany(items);
        res.status(200).json({ message: 'Items data stored successfully' });
    } catch (error) {
        console.error('Error storing items data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to handle fetching cart items
router.get('/cart-items', async (req, res) => {
    try {
        const cartItems = await Product.find();
        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to handle removing item from cart
router.delete('/remove-from-cart/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item removed from cart' });
    } catch (error) {
        console.error('Error removing item from cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
