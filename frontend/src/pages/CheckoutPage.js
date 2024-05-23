// CheckoutPage.js

import React, { useState } from 'react';
import './Checkout.scss';
import VisaIcon from '../images/us/fontisto--visa.svg';
import MasterCardIcon from '../images/us/fontisto--mastercard.svg';
import PayPalIcon from '../images/us/fontisto--paypal.svg';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        paymentMethod: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const [showCardDetails, setShowCardDetails] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePaymentMethodChange = (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            paymentMethod: value,
        }));
        setShowCardDetails(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setOrderPlaced(true);
    };

    const hide = () => {
        setShowCardDetails(false);
    };

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    }

    return (
        <div className="container">
            <div className="checkout-container">
                <h2 className="checkout-title">Checkout</h2>
                {orderPlaced ? (
                    <div className="success-message">
                        Order placed successfully!
                        <button onClick={handleHomeClick}>Home</button>
                    </div>
                ) : (
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <div className="form">
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                            <label>Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                            <label>Zip:</label>
                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                            <label>Country:</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="checkout-input"
                                required
                            />
                        </div>

                        {showCardDetails ? (
                            <div className="card-details-form">
                                <label>Card Number:</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="checkout-input"
                                    required
                                />
                                <label>Expiration Date:</label>
                                <input
                                    type="text"
                                    name="expirationDate"
                                    value={formData.expirationDate}
                                    onChange={handleChange}
                                    className="checkout-input"
                                    required
                                />
                                <label>CVV:</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    className="checkout-input"
                                    required
                                />
                                <button type="submit" className="checkout-button">
                                    Place Order
                                </button>
                            </div>
                        ) : (
                            <div className="payment-method">
                                <label>Payment Method:</label>
                                <div className="payment-method-options">
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="visa"
                                            onClick={hide}
                                            style={{ display: 'none' }}
                                            onChange={handlePaymentMethodChange}
                                            required
                                        />
                                        <img src={VisaIcon} alt="Visa" />
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="mastercard"
                                            onChange={handlePaymentMethodChange}
                                            required
                                        />
                                        <img src={MasterCardIcon} alt="MasterCard" />
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="paypal"
                                            style={{ display: 'none' }}
                                            onChange={handlePaymentMethodChange}
                                            required
                                        />
                                        <img src={PayPalIcon} alt="PayPal" />
                                    </label>
                                </div>
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
