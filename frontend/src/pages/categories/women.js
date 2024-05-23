import React, { useState, useEffect,useCallback } from "react";
import wishlistIcon from "../../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../../images/ic--round-shopping-cart.svg";
import "./Women.scss";
import Modal from "../../components/Modal";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Women = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Stylish all-pink outfit",
      category :"women",
      price: 150,
      discountedPrice: 110,
      rating: 4,
      images: [
        require("../../images/webp/women/a1.jpg"),
        require("../../images/webp/women/a2.jpg"),
        require("../../images/webp/women/a3.jpg"),
        require("../../images/webp/women/a4.jpg"),

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "Elegant Essence Dress",
      category :"women",
      price: 210,
      discountedPrice: 180,
      rating: 4,
      images: [
        require("../../images/webp/women/b1.avif"),
        require("../../images/webp/women/b2.jpg"),
        require("../../images/webp/women/b3.jpg"),
        require("../../images/webp/women/b4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "Urban Chic Bodycon Dress",
      category :"women",
      price: 90,
      discountedPrice: 75,
      rating: 4,
      images: [
        require("../../images/webp/women/c1.jpg"),
        require("../../images/webp/women/c2.jpg"),
        require("../../images/webp/women/c3.jpg"),
        require("../../images/webp/women/c4.jpg")


      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "Sleek turtle-neck and trousers",
      category :"women",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      images: [
        require("../../images/webp/women/d1.jpg"),
        require("../../images/webp/women/d2.jpg"),
        require("../../images/webp/women/d3.jpg"),
        require("../../images/webp/women/d4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "Executive lady suit",
      category :"women",
      price: 170,
      discountedPrice: 150,
      rating: 4,
      images: [
        require("../../images/webp/women/e1.jpg"),
        require("../../images/webp/women/e2.jpg"),
        require("../../images/webp/women/e3.jpg"),
        require("../../images/webp/women/e4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "Graceful Garnet Dress",
      category :"women",
      price: 180,
      discountedPrice: 175,
      rating: 4,
      images: [
        require("../../images/webp/women/f1.jpg"),
        require("../../images/webp/women/f2.jpg"),
        require("../../images/webp/women/f3.jpg"),
        require("../../images/webp/women/f4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },

    {
      id: 7,
      name: "Urban Chic stylish dress",
      category :"women",
      price: 210,
      discountedPrice: 185,
      rating: 4,
      images: [
        require("../../images/webp/women/g1.jpg"),
        require("../../images/webp/women/g2.jpg"),
        require("../../images/webp/women/g3.jpg"),
        require("../../images/webp/women/g4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "stylish women smart casual",
      category :"women",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      images: [
        require("../../images/webp/women/h1.jpg"),
        require("../../images/webp/women/h2.jpg"),
        require("../../images/webp/women/h3.jpg"),
        require("../../images/webp/women/h4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "Full work-out attire",
      category :"women",
      price: 160,
      discountedPrice: 150,
      rating: 4,
      images: [
        require("../../images/webp/women/i1.jpg"),
        require("../../images/webp/women/i2.jpg"),
        require("../../images/webp/women/i3.jpg"),
        require("../../images/webp/women/i4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Stylish women jeans and top",
      category :"women",
      price: 105,
      discountedPrice: 88.99,
      rating: 4,
      images: [
        require("../../images/webp/women/j1.jpg"),
        require("../../images/webp/women/j2.jpg"),
        require("../../images/webp/women/j3.avif"),
        require("../../images/webp/women/j4.jpg")
        
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "urban chic stylish attire",
      category :"women",
      price: 200,
      discountedPrice: 175.96,
      rating: 4,
      images: [
        require("../../images/webp/women/k1.jpg"),
        require("../../images/webp/women/k2.jpg"),
        require("../../images/webp/women/k3.jpg"),
        require("../../images/webp/women/k4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Chic Charm dress",
      category :"women",
      price: 109.99,
      discountedPrice: 89.99,
      rating: 4,
      images: [
        require("../../images/webp/women/l1.jpg"),
        require("../../images/webp/women/l2.jpg"),
        require("../../images/webp/women/l3.jpg"),
        require("../../images/webp/women/l4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "Modern stylish crop top and trouser",
      category :"women",
      price: 199.99,
      discountedPrice: 129.99,
      rating: 4,
      images: [
        require("../../images/webp/women/m1.jpg"),
        require("../../images/webp/women/m2.jpg"),
        require("../../images/webp/women/m3.jpg"),
        require("../../images/webp/women/m4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "Stylish jeans and top",
      category :"women",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      images: [
        require("../../images/webp/women/n1.jpg"),
        require("../../images/webp/women/n2.jpg"),
        require("../../images/webp/women/n3.avif"),
        require("../../images/webp/women/n4.jpg")

      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "Gentle Glow women attire",
      category :"women",
      price: 200,
      discountedPrice: 180.99,
      rating: 4,
      images: [
        require("../../images/webp/women/o1.jpg"),
        require("../../images/webp/women/o2.jpg"),
        require("../../images/webp/women/o3.avif"),
        require("../../images/webp/women/o4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "Modern Muse Hoodie",
      category :"women",
      price: 100,
      discountedPrice: 68.98,
      rating: 4,
      images: [
        require("../../images/webp/women/p1.jpg"),
        require("../../images/webp/women/p2.jpg"),
        require("../../images/webp/women/p3.jpg"),
        require("../../images/webp/women/p4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 17,
      name: "Street Style Hoodie",
      category :"women",
      price: 109.99,
      discountedPrice: 87.99,
      rating: 4,
      images: [
        require("../../images/webp/women/q1.jpg"),
        require("../../images/webp/women/q2.jpg"),
        require("../../images/webp/women/q3.jpg"),
        require("../../images/webp/women/q4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "Cozy Chic Hoodie",
      category :"women",
      price: 109.99,
      discountedPrice: 89.99,
      rating: 4,
      images: [
        require("../../images/webp/women/r1.jpg"),
        require("../../images/webp/women/r2.jpg"),
        require("../../images/webp/women/r3.jpg"),
        require("../../images/webp/women/r4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 19,
      name: "Magnificence Dress",
      category :"women",
      price: 307.99,
      discountedPrice: 280.99,
      rating: 4,
      images: [
        require("../../images/webp/women/s1.jpg"),
        require("../../images/webp/women/s2.jpg"),
        require("../../images/webp/women/s3.jpg"),
        require("../../images/webp/women/s4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 20,
      name: "Warm women sweater",
      category :"women",
      price: 75.00,
      discountedPrice: 58.99,
      rating: 4,
      images: [
        require("../../images/webp/women/t1.jpg"),
        require("../../images/webp/women/t2.jpg"),
        require("../../images/webp/women/t3.jpg"),
        require("../../images/webp/women/t4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "Executive women's coat",
      category :"women",
      price: 200,
      discountedPrice: 199.99,
      rating: 4,
      images: [
        require("../../images/webp/women/v1.jpg"),
        require("../../images/webp/women/v2.jpg"),
        require("../../images/webp/women/v3.jpg"),
        require("../../images/webp/women/v4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "Smart casual business attire",
      category :"women",
      price: 300,
      discountedPrice: 275,
      rating: 4,
      images: [
        require("../../images/webp/women/w1.jpg"),
        require("../../images/webp/women/w2.jpg"),
        require("../../images/webp/women/w3.jpg"),
        require("../../images/webp/women/w4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "UbanTone dress and coat",
      category :"women",
      price: 250,
      discountedPrice: 200,
      rating: 4,
      images: [
        require("../../images/webp/women/y1.jpg"),
        require("../../images/webp/women/y2.jpg"),
        require("../../images/webp/women/y3.jpg"),
        require("../../images/webp/women/y4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "TrendyTwist stylish attire",
      category :"women",
      price: 155,
      discountedPrice: 145,
      rating: 4,
      images: [
        require("../../images/webp/women/x1.jpg"),
        require("../../images/webp/women/x2.jpg"),
        require("../../images/webp/women/x3.jpg"),
        require("../../images/webp/women/x4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    

  ]);
  const navigate = useNavigate();
  

  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }

  return (
    <div className="women-page">
      <h1>Women's Collection</h1>
      <div className="women-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="women-row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`women-item-container ${
                  item.id >= 10 && item.id <= 15 ? "special-card" : ""
                }`}
                key={item.id}
              >
                <div className="item-image" onClick={() => handleAddToCart(item)}>
                  <img
                    src={item.images[item.currentImageIndex]}
                    alt={item.name}
                    className={item.nextImage ? "next" : ""}
                    onAnimationEnd={() => {
                      setItems((prevItems) =>
                        prevItems.map((prevItem) =>
                          prevItem.id === item.id
                            ? { ...prevItem, nextImage: false }
                            : prevItem
                        )
                      );
                    }}
                  />
                  <div className="item-overlay" onClick={() => handleOpenModal(item)}>
                    <div className="item-discount-women">
                      {(
                        ((item.price - item.discountedPrice) / item.price) *
                        100
                      ).toFixed(0)}
                      % off
                    </div>
                    <div className="wish">
                      <img
                        src={item.wishlistIconPath}
                        alt="Wishlist"
                        className="wishlist-icon"
                      />
                    </div>
                    <button className="add-to-cart-btn" onClick={() => handleOpenModal(item)}>
                      <img
                        src={item.addToCartIconPath}
                        alt="Add to Cart"
                      />
                      Add to Cart
                    </button>
                    <div className="discounted-price-women">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info-women">
                  <div className="item-name-women">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price-women">${item.price}</span>
                    <span className="current-price-women">
                      ${item.discountedPrice}
                    </span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span
                        key={index}
                        className="star-icon"
                        style={{ color: "#FF6F61", fontSize: "1.5em" }}
                      >
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

export default Women;
