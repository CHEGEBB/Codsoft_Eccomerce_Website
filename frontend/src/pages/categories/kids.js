import React, { useState, useEffect,useCallback } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Kids.scss";
import Modal from "../../components/Modal";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Kids = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Kid's Denim skirt with shirt",
      category : "kids",
      price: 250,
      discountedPrice: 150,
      rating: 4,
      images: [
        require("../../images/webp/kid1.avif"),
        require("../../images/webp/kid2.jpg"),
        require("../../images/webp/kid3.avif"),
        require("../../images/webp/kid4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "Kid's Denim jacket with urban trousers",
      category : "kids",
      price: 150,
      discountedPrice: 120,
      rating: 3,
      images: [
        require("../../images/webp/kids/a1.jpg"),
        require("../../images/webp/kids/a2.jpg"),
        require("../../images/webp/kids/a3.jpg"),
        require("../../images/webp/kids/a4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Kid's Stylish shirt with white trousers",
      category : "kids",
      price: 200,
      discountedPrice: 180,
      rating: 5,
      images: [
        require("../../images/webp/kids/b1.jpg"),
        require("../../images/webp/kids/b2.jpg"),
        require("../../images/webp/kids/b3.jpg"),
        require("../../images/webp/kids/b4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "Kid's Casual wear with hat",
      category : "kids",
      price: 180,
      discountedPrice: 150,
      rating: 4,
      images: [
        require("../../images/webp/kids/c1.jpg"),
        require("../../images/webp/kids/c2.jpg"),
        require("../../images/webp/kids/c3.jpg"),
        require("../../images/webp/kids/c4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "Kid's t-shirt with trousers",
      category : "kids",
      price: 190,
      discountedPrice: 140,
      rating: 3,
      images: [
        require("../../images/webp/kids/d1.avif"),
        require("../../images/webp/kids/d2.avif"),
        require("../../images/webp/kids/d3.jpg"),
        require("../../images/webp/kids/d4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "Stylish sweaters for kids",
      category : "kids",
      price: 135.00,
      discountedPrice: 129.99,
      rating: 5,
      images: [
        require("../../images/webp/kids/e1.jpg"),
        require("../../images/webp/kids/e2.jpg"),
        require("../../images/webp/kids/e3.jpg"),
        require("../../images/webp/kids/e4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "Cute sweaters and skirt combo for kids",
      category : "kids",
      price: 140,
      discountedPrice: 130,
      rating: 4,
      images: [
        require("../../images/webp/kids/f1.avif"),
        require("../../images/webp/kids/f2.jpg"),
        require("../../images/webp/kids/f3.jpg"),
        require("../../images/webp/kids/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "urban dress and jeans for kids",
      category : "kids",
      price: 145,
      discountedPrice : 130,
      rating: 3,
      images: [
        require("../../images/webp/kids/h4.jpg"),
        require("../../images/webp/kids/h2.jpg"),
        require("../../images/webp/kids/h3.avif"),
        require("../../images/webp/kids/h4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "Kid's Crop top with trousers",
      category : "kids",
      price: 250,
      discountedPrice: 180,
      rating: 5,
      images: [
        require("../../images/webp/kids/i1.jpg"),
        require("../../images/webp/kids/i2.jpg"),
        require("../../images/webp/kids/i3.jpg"),
        require("../../images/webp/kids/i4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Kid's cozy wear with hat",
      category : "kids",
      price: 185,
      discountedPrice: 175,
      rating: 4,
      images: [
        require("../../images/webp/kids/j1.jpg"),
        require("../../images/webp/kids/j2.jpg"),
        require("../../images/webp/kids/j3.jpg"),
        require("../../images/webp/kids/j4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "Cute kid's trouser with shirt",
      category : "kids",
      price: 160,
      discountedPrice: 145,
      rating: 3,
      images: [
        require("../../images/webp/kids/k1.jpg"),
        require("../../images/webp/kids/k2.jpg"),
        require("../../images/webp/kids/k3.jpg"),
        require("../../images/webp/kids/k4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Kid's stylish shirt with jeans",
      category : "kids",
      price: 165,
      discountedPrice: 150,
      rating: 5,
      images: [
        require("../../images/webp/kids/l1.jpg"),
        require("../../images/webp/kids/l2.jpg"),
        require("../../images/webp/kids/l3.jpg"),
        require("../../images/webp/kids/l4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "Kid's Denim jacket with urban trousers",
      category : "kids",
      price: 170,
      discountedPrice : 155,
      rating: 4,
      images: [
        require("../../images/webp/kids/m1.jpg"),
        require("../../images/webp/kids/m2.jpg"),
        require("../../images/webp/kids/m3.jpg"),
        require("../../images/webp/kids/m4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "Urban jeans and shirt combo",
      category : "kids",
      price: 175,
      discountedPrice: 160,
      rating: 4,
      images: [
        require("../../images/webp/kids/n1.jpg"),
        require("../../images/webp/kids/n2.jpg"),
        require("../../images/webp/kids/n3.jpg"),
        require("../../images/webp/kids/n4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "Stylish jacket for kids",
      category : "kids",
      price: 180,
      discountedPrice: 160,
      rating: 5,
      images: [
        require("../../images/webp/kids/o1.jpg"),
        require("../../images/webp/kids/o2.jpg"),
        require("../../images/webp/kids/o3.jpg"),
        require("../../images/webp/kids/o4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "Kids warm wear with hat",
      category : "kids",
      price: 185,
      discountedPrice: 175,
      rating: 4,
      images: [
        require("../../images/webp/kids/p1.jpg"),
        require("../../images/webp/kids/p2.jpg"),
        require("../../images/webp/kids/p3.jpg"),
        require("../../images/webp/kids/p4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    }
  ]);

   
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const navigate = useNavigate(); // Use the useNavigate hook to navigate to the Cart page
  

  const handleOpenModal = (item) =>{
    setSelectedProduct(item);
    setIsModalOpen(true);
  }

  const handleCloseModal = () =>{
    setSelectedProduct(null);
    setIsModalOpen(false);
    setSelectedImageIndex(0);
  }

  const handleNextImage = () =>{
    setSelectedImageIndex((prevIndex) => (prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1));
  }

  const handlePrevImage = () =>{
    setSelectedImageIndex((prevIndex) => (prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1));
  }

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
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => {
          const nextImageIndex =
            (item.currentImageIndex + 1) % item.images.length;
          return { ...item, currentImageIndex: nextImageIndex };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }

  return (
    <div className="kids-page"> 
      <h1>Kids Flash Sale</h1>
      <div className="kids-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="kids-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`kids-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image" onClick={() => handleOpenModal(item)}>
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
                    <div className="item-discount-kids">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-kids">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-kids">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "#F5AD42 ", fontSize: "1.5em" }}>★</span>
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

export default Kids;
