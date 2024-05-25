import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartIcon from "../images/ic--round-shopping-cart.svg";
import Wishlist from "../images/icon-park-solid--love-and-help.svg";
import SearchIcon from "../images/ant-design--search-outlined.svg";
import CallIcon from "../images/ic--round-call.svg";
import MailIcon from "../images/mdi--email.svg";
import PersonIcon from "../images/mdi--person.svg";
import bg from "../images/webp/kids/bg3.mp4";
import './header.scss';
import MyLogo from '../images/glamour.png'
import FilterIcon from "../images/filter-32.svg";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartCount, setCartCount] = useState(0); // State to track cart count
  const navigate = useNavigate();

  useEffect(() => {
    const cartCountFromStorage = parseInt(localStorage.getItem('cartCount')) || 0;
    setCartCount(cartCountFromStorage);
  }, []);

  useEffect(() => {
    // Update localStorage when cart count changes
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartCount]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      handleSearch();
    } else {
      setSearchResults([]);
      setDropdownVisible(false);
    }
  }, [searchQuery, category]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:3000/search?q=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results);
      setDropdownVisible(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSelectSuggestion = (product) => {
    navigate("/shop", { state: { productId: product.category } });
    setDropdownVisible(false);
    setSearchQuery("");
    setCategory("all");
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSelectedCategory(selectedCategory); 
    navigate(`/shop/${selectedCategory}`); 
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const userProfile = () => {
    navigate("/");
  }
  
  return (
    <div className="header-section">
      <div className="header">
      <div className="logo">
        <img src={MyLogo} alt="logo"></img>
        <h1>GlamourGallerie</h1>
        </div>
        <div className="reach">
          <div className="phone">
            <div className="call-icon">
              <img src={CallIcon} alt="CallIcon" />
            </div>
            <div className="number">
              <p>Phone: 123-456-7890</p>
            </div>
          </div>
          <div className="email">
            <div className="mail-icon">
              <img src={MailIcon} alt="MailIcon" />
            </div>
            <div className="mail">
              <p>info@glamourgallerie.com</p>
            </div>
          </div>
          <div className="my-account" onClick={
            userProfile
          }>
            <div className="person-icon">
              <img src={PersonIcon} alt="PersonIcon" />
            </div>
            <div className="account">
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bar">
        <div className="choice">
          <div className="cart" onClick={handleCartClick}>
            <div className="catcon">
              <img src={CartIcon} alt="Cart Icon" />
              {cartCount >= 0 && (
                <div className="cart-count">{cartCount}</div>
              )}
            </div>
            <div className="cart-content">
              <h1>Cart</h1>
            </div>
          </div>
          <div className="wishlist">
            <div className="wishcon">
              <img src={Wishlist} alt="Wishlist Icon" />
            </div>
            <div className="wishlist-content">
              <h1>Wishlist</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="search-container">
        <div className="video-container-bg">
          <video autoPlay loop muted className="background-video">
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-bg"></div>
          <div className="filter-functionality">
            <label className="category-label">
              <select
                className="category-filter"
                value={category}
                onChange={handleCategoryChange}
              >
              
                <option value="all">Filter</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="accessories">Accessories</option>
                <option value="shoes">Shoes</option>
                <option value="flash">Flash Sales</option>
              </select>
              <div className="filter-icon">
              <img src={FilterIcon} alt="Filter Icon" />
              </div>
            </label>
          </div>
          <input
            type="text"
            className="input-search"
            placeholder="Search for products here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            <img src={SearchIcon} alt="Search Icon" />
          </button>
          {isDropdownVisible && searchResults.length > 0 && (
            <ul className="autocomplete-dropdown">
              {searchResults.map((result, index) => (
                <li key={index} onClick={() => handleSelectSuggestion(result)}>
                <div className="res">
                {result.name}
                </div>
                 
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
