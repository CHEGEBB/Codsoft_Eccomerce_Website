import React, { useState } from 'react';
import './Modal.scss';
import CustomAlert from './CustomAlert';

const Modal = ({ isOpen, handleClose, product, selectedImageIndex, handleNextImage, handlePrevImage }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    if (!isOpen || !product) return null;

    const { title, desc, images, currentPrice } = product;

    const handleAddToCart = (item) => {
        setAlertMessage(`${item.name} has been added to your cart`);
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={handleClose}>
                    &times;
                </span>
                <div className="modal-body">
                    <div className="product-images">
                        <img src={images[selectedImageIndex]} alt={title} />
                        <button className="arrow prev" onClick={handlePrevImage}>
                            &#8249;
                        </button>
                        <button className="arrow next" onClick={handleNextImage}>
                            &#8250;
                        </button>
                    </div>
                    <div className="product-info">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <p>{currentPrice}</p>
                        <div className="modal-btn">
                            <button
                                onClick={() => handleAddToCart(product)} 
                            >Add to Cart</button>
                        </div>
                        {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
