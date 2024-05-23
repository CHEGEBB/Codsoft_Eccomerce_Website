import React from 'react';
import './Custom.scss';
import { useNavigate } from 'react-router-dom';

const CustomAlert = ({ message, onClose }) => {
  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate('/cart'); // Make sure the route is '/cart' (or the correct path)
    onClose(); 
  };

  return (
    <div className="custom-alert">
      <span>{message}</span>
      <div className="buttons-container">
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="view-cart-btn" onClick={handleViewCart}>View Cart</button>
      </div>
    </div>
  );
};

export default CustomAlert;
