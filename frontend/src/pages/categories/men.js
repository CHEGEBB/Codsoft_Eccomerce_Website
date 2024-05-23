import React, { useState, useEffect, useCallback } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Men.scss";
import Modal from "../../components/Modal";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Business Class Attire",
      category :"men",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../../images/webp/men/jack1.jpg"),
        require("../../images/webp/men/jack2.jpg"),
        require("../../images/webp/men/jack3.jpg"),
        require("../../images/webp/men/jack4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "UrbanEssence Casual Shirt",
      category :"men",
      price: 15,
      discountedPrice: 12,
      rating: 3,
      images: [
        require("../../images/webp/men/g1.jpg"),
        require("../../images/webp/men/g2.jpg"),
        require("../../images/webp/men/g3.jpg"),
        require("../../images/webp/men/g4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Urban Fit Leather Jacket",
      category :"men",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../../images/webp/men/f1.jpg"),
        require("../../images/webp/men/f2.jpg"),
        require("../../images/webp/men/f3.jpg"),
        require("../../images/webp/men/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "FlexiStyle t-shirt",
      category :"men",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../../images/webp/men/h1.avif"),
        require("../../images/webp/men/h2.jpg"),
        require("../../images/webp/men/h3.jpg"),
        require("../../images/webp/men/h4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "CityGlam cotton Shirt",
      category :"men",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../../images/webp/men/j1.jpg"),
        require("../../images/webp/men/j2.jpg"),
        require("../../images/webp/men/j3.jpg"),
        require("../../images/webp/men/j4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "UrbanEssence Casual Shirt",
      category :"men",
      price: 35,
      discountedPrice: 28,
      rating: 5,
      images: [
        require("../../images/webp/men/i1.avif"),
        require("../../images/webp/men/i2.avif"),
        require("../../images/webp/men/i3.avif"),
        require("../../images/webp/men/i4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "Suave Cityscape  coat",
      category :"men",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../../images/webp/men/k1.jpg"),
        require("../../images/webp/men/k2.jpg"),
        require("../../images/webp/men/k3.jpg"),
        require("../../images/webp/men/k4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "Trendy casual men's shirt",
      category :"men",
      price: 45,
      discountedPrice: 36,
      rating: 3,
      images: [
        require("../../images/webp/men/l1.jpg"),
        require("../../images/webp/men/l2.jpg"),
        require("../../images/webp/men/l3.jpg"),
        require("../../images/webp/men/l4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "UrbanEssence Sweatshirt",
      category :"men",
      price: 50,
      discountedPrice: 40,
      rating: 5,
      images: [
        require("../../images/webp/men/m1.jpg"),
        require("../../images/webp/men/m2.jpg"),
        require("../../images/webp/men/m3.jpg"),
        require("../../images/webp/men/m4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "The Dark Knot Men's coat",
      category :"men",
      price: 55,
      discountedPrice: 44,
      rating: 4,
      images: [
        require("../../images/webp/men/n1.jpg"),
        require("../../images/webp/men/n2.jpg"),
        require("../../images/webp/men/n3.jpg"),
        require("../../images/webp/men/n4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "Stylish Polo sweater",
      category :"men",
      price: 60,
      discountedPrice: 48,
      rating: 3,
      images: [
        require("../../images/webp/men/q1.jpg"),
        require("../../images/webp/men/q2.jpg"),
        require("../../images/webp/men/q3.jpg"),
        require("../../images/webp/men/q4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Men V-neck short-sleeved sweater",
      category :"men",
      price: 65,
      discountedPrice: 52,
      rating: 5,
      images: [
        require("../../images/webp/men/p1.jpg"),
        require("../../images/webp/men/p2.jpg"),
        require("../../images/webp/men/p3.jpg"),
        require("../../images/webp/men/p4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    }
  ]);

  const navigate = useNavigate(); 

  const handleOpenModal = (item) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    setSelectedImageIndex(0);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    sendItemsToBackend();
  }, []);

  
  const sendItemsToBackend = useCallback(async () => {
    try {
        const { data: existingItems } = await axios.get('https://codsoft-eccomerce-website-backend2.onrender.com/products');

        // Create a set of existing item names and prices
        const existingItemNamesAndPrices = new Set(existingItems.map(item => `${item.name},${item.price}`));

        let allItemsSent = true;

        for (const item of items) {
            const itemNameAndPrice = `${item.name},${item.price}`;
            if (!existingItemNamesAndPrices.has(itemNameAndPrice)) {
                const response = await axios.post('https://codsoft-eccomerce-website-backend2.onrender.com/products', item);
                console.log('Item sent to backend:', response.data);
            } else {
                allItemsSent = false;
                console.log('Item already exists in the backend:', item.name);
            }
        }

        if (allItemsSent) {
            console.log('All items have been sent to the backend.');
        } else {
            console.log('Not all items have been sent to the backend.');
        }
    } catch (error) {
        console.error('Error sending items to backend:', error);
    }
}, [items]);


const handleAddToCart = async (item) => {
  try {
    const name = encodeURIComponent(item.name);
    const category = encodeURIComponent(item.category);
    const { data } = await axios.get(`https://codsoft-eccomerce-website-backend2.onrender.com/cart/add-to-cart/${name}/${item.price}/${category}`);
    console.log('Item fetched from the backend:', data);
    navigate('/cart', { state: { item: data } }); // Navigate to Cart.js and pass the fetched item as state
  } catch (error) {
    console.error('Error fetching item from the backend:', error);
  }
};

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => {
          const nextImageIndex =
            (item.currentImageIndex + 1) % item.images.length;
          return { ...item, currentImageIndex: nextImageIndex };
        })
      );
    }, 3000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }

  return (
    <div className="men-page">
      <h1>Men's Collection</h1>
      <div className="men-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="men-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`men-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image">
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div
                    className="item-overlay"
                    onClick={() => handleOpenModal(item)}
                  >
                    <div className="item-discount-men">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-men">
                      ${item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-men">
                  <div className="item-name-men">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price-men">${item.price}</span>
                    <span className="current-price-men">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "#F5AD42", fontSize: "1.5em" }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        product={selectedProduct}
        selectedImageIndex={selectedImageIndex}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
      />
    </div>
  );
};

export default Men;
