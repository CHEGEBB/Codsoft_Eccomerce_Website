import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle checkout button click
  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    if (location.state && location.state.item) {
      const newItem = location.state.item;
      setCartItems(prevCartItems => [...prevCartItems, newItem]);
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, newItem]));
    }
  }, [location.state]);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item._id} className="product-details">
              <div className="product-info">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Price:</strong> ${item.price}</p>
                <p><strong>Category:</strong> {item.category}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          ))}
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
