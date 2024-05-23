// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

// Create Express app
const app = express();

// CORS middleware
app.use(cors());

// the app to use json
app.use(express.json());

// Other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// image paths
app.use('/images/webp/men', express.static(path.join(__dirname, 'images/webp/men')));
app.use('/images/webp/women', express.static(path.join(__dirname, 'images/webp/women')));
app.use('/images/webp/flash', express.static(path.join(__dirname, 'images/webp/flash')));
app.use('/images/webp/kids', express.static(path.join(__dirname, 'images/webp/kids')));
app.use('/images/webp/accessories', express.static(path.join(__dirname, 'images/webp/accessories')));
app.use('/images/webp/shoes', express.static(path.join(__dirname, 'images/webp/shoes')));

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// User details routes



app.use('/auth', authRoutes); // Authentication routes
app.use('/products', productRoutes); // Product routes
app.use('/cart', cartRoutes); // Cart routes
// User details routes
app.use('/me', require('./routes/authRoutes'));

// MongoDB Atlas connection string
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Generate JWT secret key if not already present in .env
if (!process.env.JWT_SECRET) {
    process.env.JWT_SECRET = require('crypto').randomBytes(64).toString('hex');
    console.log('Generated JWT secret key:', process.env.JWT_SECRET);
}

// Import Product model
const Product = require('./models/Product');

// Add route to handle POST request for storing items data
app.post('/save-items', async (req, res) => {
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

// Add search endpoint
app.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
      const results = await Product.find({ name: new RegExp(query, 'i') }, 'name price _id'); // Return name, price, and ID
      res.json({ results });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching search results' });
    }
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
