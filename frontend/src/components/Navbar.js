import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIcon from "../images/ic--baseline-apps.svg";
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navigate =useNavigate();

    const navigateToCollections = () => {
        navigate("/collections");
    }
    return (
        <nav className="navbar-main">
            <div className="container">
                <div className="categories" onClick={navigateToCollections}>
                    <span className="category-icon">
                        <img src={CategoryIcon} alt="Category Icon" />
                        <h2>Categories</h2>
                    </span>
                </div>
                <div className="container2">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/collections" className="nav-link">Collections</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
