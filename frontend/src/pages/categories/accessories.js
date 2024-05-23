import React, { useState, useEffect,useCallback } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Accessories.scss";
import Modal from "../../components/Modal";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Accessories = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Timeless Elegance Rolex Watch",
      category: "Accessories",
      price: 210,
      discountedPrice: 180,
      rating: 4,
      images: [
        require("../../images/webp/accessories/a1.avif"),
        require("../../images/webp/accessories/a2.jpg"),
        require("../../images/webp/accessories/a3.jpg"),
        require("../../images/webp/accessories/a4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "Vintage Glamour Men's wallet(all leather)",
      category: "Accessories",
      price: 200,
      discountedPrice: 150,
      rating: 5,
      images: [
        require("../../images/webp/accessories/b1.jpg"),
        require("../../images/webp/accessories/b2.jpg"),
        require("../../images/webp/accessories/b3.jpg"),
        require("../../images/webp/accessories/b4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Urban Edge Eyewear",
      category: "Accessories",
      price: 130,
      discountedPrice: 105,
      rating: 4,
      images: [
        require("../../images/webp/accessories/c1.jpg"),
        require("../../images/webp/accessories/c2.jpg"),
        require("../../images/webp/accessories/c3.jpg"),
        require("../../images/webp/accessories/c4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "Luxury Statement Watch",
      category: "Accessories",
      price: 140,
      discountedPrice: 135,
      rating: 3,
      images: [
        require("../../images/webp/accessories/d1.avif"),
        require("../../images/webp/accessories/d2.jpg"),
        require("../../images/webp/accessories/d3.jpg"),
        require("../../images/webp/accessories/d4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "Retro Chic Eyeglasses",
      category: "Accessories",
      price: 150,
      discountedPrice: 145,
      rating: 4,
      images: [
        require("../../images/webp/accessories/e1.jpg"),
        require("../../images/webp/accessories/e2.jpg"),
        require("../../images/webp/accessories/e3.jpg"),
        require("../../images/webp/accessories/e4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "Glamorous Crystal Earrings",
      category: "Accessories",
      price : 160,
      discountedPrice: 155,
      rating: 5,
      images: [
        require("../../images/webp/accessories/f1.jpg"),
        require("../../images/webp/accessories/f2.jpg"),
        require("../../images/webp/accessories/f3.jpg"),
        require("../../images/webp/accessories/f4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "Classic Hoop Earrings",
      category: "Accessories",
      price: 70,
      discountedPrice: 65,
      rating: 4,
      images: [
        require("../../images/webp/accessories/g1.jpg"),
        require("../../images/webp/accessories/g2.jpg"),
        require("../../images/webp/accessories/g3.jpg"),
        require("../../images/webp/accessories/g4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "Statement Chandelier Earrings and bracelets",
      category: "Accessories",
      price: 80,
      discountedPrice: 75,
      rating: 3,
      images: [
        require("../../images/webp/accessories/h1.jpg"),
        require("../../images/webp/accessories/h2.jpg"),
        require("../../images/webp/accessories/h3.jpg"),
        require("../../images/webp/accessories/h4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "Urban Muse Perfume",
      category: "Accessories",
      price: 90,
      discountedPrice: 85,
      rating: 4,
      images: [
        require("../../images/webp/accessories/y1.jpg"),
        require("../../images/webp/accessories/y2.jpg"),
        require("../../images/webp/accessories/y3.jpg"),
        require("../../images/webp/accessories/y4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Classic Elegance Golden necklace 24k gold plated",
      category: "Accessories",
      price: 1000,
      discountedPrice: 950,
      rating: 5,
      images: [
        require("../../images/webp/accessories/j1.jpg"),
        require("../../images/webp/accessories/j2.jpg"),
        require("../../images/webp/accessories/j3.jpg"),
        require("../../images/webp/accessories/j4.jpg"),
    
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "Vintage Chic Accessories",
      category: "Accessories",
      price: 110,
      discountedPrice: 105,
      rating: 4,
      images: [
        require("../../images/webp/accessories/k1.jpg"),
        require("../../images/webp/accessories/k2.jpg"),
        require("../../images/webp/accessories/k3.jpg"),
        require("../../images/webp/accessories/k4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Elegant Embrace Ring",
      category: "Accessories",
      price: 120,
      discountedPrice: 115,
      rating: 4,
      images: [
        require("../../images/webp/accessories/l1.jpg"),
        require("../../images/webp/accessories/l2.jpg"),
        require("../../images/webp/accessories/l3.jpg"),
        require("../../images/webp/accessories/l4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "Vintage Pearl necklace",
      category: "Accessories",
      price: 130,
      discountedPrice: 125,
      rating: 4,
      images: [
        require("../../images/webp/accessories/m1.jpg"),
        require("../../images/webp/accessories/m2.jpg"),
        require("../../images/webp/accessories/m3.jpg"),
        require("../../images/webp/accessories/m4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "Executive leather purse",
      category: "Accessories",
      price: 140,
      discountedPrice: 135,
      rating: 5,
      images: [
        require("../../images/webp/accessories/n1.avif"),
        require("../../images/webp/accessories/n2.jpg"),
        require("../../images/webp/accessories/n3.jpg"),
        require("../../images/webp/accessories/n4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "Classic Fedora Hat",
      category: "Accessories",
      price: 50,
      discountedPrice: 45,
      rating: 4,
      images: [
        require("../../images/webp/accessories/o1.jpg"),
        require("../../images/webp/accessories/o2.jpg"),
        require("../../images/webp/accessories/o3.jpg"),
        require("../../images/webp/accessories/o4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "Urban male belt",
      category: "Accessories",
      price: 70,
      discountedPrice: 55,
      rating: 3,
      images: [
        require("../../images/webp/accessories/p1.jpg"),
        require("../../images/webp/accessories/p2.jpg"),
        require("../../images/webp/accessories/p3.jpg"),
        require("../../images/webp/accessories/p4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 17,
      name: "Urban Edge Cuff",
      category: "Accessories",
      price: 70,
      discountedPrice: 55,
      rating: 4,
      images: [
        require("../../images/webp/accessories/q1.jpg"),
        require("../../images/webp/accessories/q2.jpg"),
        require("../../images/webp/accessories/q3.jpg"),
        require("../../images/webp/accessories/q4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "Vintage Glamour Business leather bag",
      category: "Accessories",
      price: 180,
      discountedPrice: 175,
      rating: 5,
      images: [
        require("../../images/webp/accessories/r1.jpg"),
        require("../../images/webp/accessories/r2.jpg"),
        require("../../images/webp/accessories/r3.avif"),
        require("../../images/webp/accessories/r4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 19,
      name: "Classic Elegance Hairpieces 10 in 1 set",
      category: "Accessories",
      price: 90,
      discountedPrice: 75,
      rating: 4,
      images: [
        require("../../images/webp/accessories/s1.jpg"),
        require("../../images/webp/accessories/s2.jpg"),
        require("../../images/webp/accessories/s3.jpg"),
        require("../../images/webp/accessories/s4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 20,
      name: "Elegant Sheer Stockings",
      category: "Accessories",
      price: 60,
      discountedPrice: 55,
      rating: 3,
      images: [
        require("../../images/webp/accessories/t1.jpg"),
        require("../../images/webp/accessories/t2.jpg"),
        require("../../images/webp/accessories/t3.jpg"),
        require("../../images/webp/accessories/t4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "Chic Lace Top Stockings",
      category: "Accessories",
      price: 70,
      discountedPrice: 55,
      rating: 4,
      images: [
        require("../../images/webp/accessories/u1.jpg"),
        require("../../images/webp/accessories/u2.jpg"),
        require("../../images/webp/accessories/u3.jpg"),
        require("../../images/webp/accessories/u4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "Classic Headwrap",
      category: "Accessories",
      price: 50,
      discountedPrice: 35,
      rating: 5,
      images: [
        require("../../images/webp/accessories/v1.jpg"),
        require("../../images/webp/accessories/v2.jpg"),
        require("../../images/webp/accessories/v3.jpg"),
        require("../../images/webp/accessories/v4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "EliteGlow Skin Cream",
      category: "Accessories",
      price: 50,
      discountedPrice: 45,
      rating: 4,
      images: [
        require("../../images/webp/accessories/w1.jpg"),
        require("../../images/webp/accessories/w2.jpg"),
        require("../../images/webp/accessories/w3.jpg"),
        require("../../images/webp/accessories/w4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "Classic Elegance Scent",
      category: "Accessories",
      price: 120,
      discountedPrice: 105,
      rating: 3,
      images: [
        require("../../images/webp/accessories/x1.jpg"),
        require("../../images/webp/accessories/x2.jpg"),
        require("../../images/webp/accessories/x3.jpg"),
        require("../../images/webp/accessories/x4.jpg"),
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    }
  ]);
    

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const navigate = useNavigate();

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
    navigate('/cart', { state: { item: data } });
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
    <div className="accessories-page"> 
      <h1>Accessories Flash Sale</h1>
      <div className="accessories-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="accessories-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`accessories-item-container ${item.id >= 10 && item.id <= 15 ? "special-card" : ""}`}
                key={item.id}
              >
                <div className="item-image" onClick={() => handleOpenModal(item)}>
                  <img src={item.images[item.currentImageIndex]} alt={item.name} />
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
                    <div className="item-discount-accessories">
                      {((item.price - item.discountedPrice) / item.price * 100).toFixed(0)}% off
                    </div>
                    <div className="wish">
                      <img src={item.wishlistIconPath} alt="Wishlist" className="wishlist-icon" />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price-accessories">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-accessories">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">${item.discountedPrice}</span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span key={index} className="star-icon" style={{ color: "crimson", fontSize: "1.5em" }}>★</span>
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

export default Accessories;
