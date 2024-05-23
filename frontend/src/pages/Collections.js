import React, { useState, useEffect,useCallback } from "react";
import LeftSideBar from "../components/LeftSideBar";
import "./Collections.scss";
import wishlistIcon from "../images/us/icon-park-solid--love-and-help.svg";
import cartIcon from "../images/ic--round-shopping-cart.svg";
import Footer from "../components/Footer";
import Nav from "../components/Navbar";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Collections = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "DapperDaze Designer Tees",
      price: 10,
      discountedPrice: 8,
      rating: 4,
      images: [
        require("../images/webp/ts1.webp"),
        require("../images/webp/ts2.webp"),
        require("../images/webp/ts3.webp"),
        require("../images/webp/ts4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 2,
      name: "TrendyTwist Tailored Treasures",
      price: 15,
      discountedPrice: 12,
      rating: 3,
      images: [
        require("../images/webp/womsuit1.webp"),
        require("../images/webp/womsuit2.webp"),
        require("../images/webp/womsuit3.jpg"),
        require("../images/webp/womsuit4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 3,
      name: "ClassyChic Tee Collection",
      price: 20,
      discountedPrice: 16,
      rating: 5,
      images: [
        require("../images/webp/tp1.webp"),
        require("../images/webp/tp2.webp"),
        require("../images/webp/tp3.webp"),
        require("../images/webp/tp4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 4,
      name: "UrbanChic Tee Collection",
      price: 25,
      discountedPrice: 20,
      rating: 4,
      images: [
        require("../images/webp/tz1.webp"),
        require("../images/webp/tz2.webp"),
        require("../images/webp/tz5.webp"),
        require("../images/webp/tz4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 5,
      name: "UrbanKhaki",
      price: 30,
      discountedPrice: 24,
      rating: 3,
      images: [
        require("../images/webp/khaki1.jpg"),
        require("../images/webp/khaki2.jpg"),
        require("../images/webp/khaki3.jpg"),
        require("../images/webp/khaki4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 6,
      name: "Urban Men's Cool Tee",
      price: 35,
      discountedPrice: 28,
      rating: 5,
      images: [
        require("../images/webp/cool1.webp"),
        require("../images/webp/cool2.webp"),
        require("../images/webp/cool3.webp"),
        require("../images/webp/cool4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 7,
      name: "StreetStyle Statement Shirts",
      price: 40,
      discountedPrice: 32,
      rating: 4,
      images: [
        require("../images/webp/tss1.webp"),
        require("../images/webp/tss2.webp"),
        require("../images/webp/tss3.webp"),
        require("../images/webp/tss4.webp")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 8,
      name: "Ladies Denim Delight",
      price: 45,
      discountedPrice: 36,
      rating: 3,
      images: [
        require("../images/webp/womdenim.webp"),
        require("../images/webp/womendenim6.jpeg"),
        require("../images/webp/womdenim2.avif"),
        require("../images/webp/womdenim3.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 9,
      name: "VintageVibe Fancy Men's Wear",
      price: 50,
      discountedPrice: 40,
      rating: 5,
      images: [
        require("../images/webp/menstyle1.jpg"),
        require("../images/webp/menstyle2.jpg"),
        require("../images/webp/menstyle3.jpg"),
        require("../images/webp/menstyle4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 10,
      name: "Modern Minimalist Hoodies",
      price: 55,
      discountedPrice: 44,
      rating: 4,
      images: [
        require("../images/webp/hoodies1.jpg"),
        require("../images/webp/hoodies2.jpg"),
        require("../images/webp/hoodies3.jpg"),
        require("../images/webp/hoodies4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 11,
      name: "Urban Edge Jeans",
      price: 60,
      discountedPrice: 48,
      rating: 3,
      images: [
        require("../images/webp/m1.jpg"),
        require("../images/webp/m2.jpg"),
        require("../images/webp/m7.jpg"),
        require("../images/webp/m6.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 12,
      name: "Autumn men's wear",
      price: 65,
      discountedPrice: 52,
      rating: 5,
      images: [
        require("../images/webp/autumn1.avif"),
        require("../images/webp/autumn2.jpg"),
        require("../images/webp/autumn3.jpg"),
        require("../images/webp/autumn4.avif")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 13,
      name: "DivineDiva Maxi Marvels dress",
      price: 70,
      discountedPrice: 56,
      rating: 4,
      images: [
        require("../images/webp/pink1.jpg"),
        require("../images/webp/pink2.jpg"),
        require("../images/webp/pink3.jpg"),
        require("../images/webp/pink4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 14,
      name: "Urban buggy turtle necks and hat",
      price: 75,
      discountedPrice: 60,
      rating: 3,
      images: [
        require("../images/webp/mid1.jpg"),
        require("../images/webp/mid2.jpg"),
        require("../images/webp/mid3.jpg"),
        require("../images/webp/mid4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 15,
      name: "Smart Casual for Men Full Outfit",
      price: 80,
      discountedPrice: 64,
      rating: 5,
      images: [
        require("../images/webp/cs1.jpg"),
        require("../images/webp/cs2.jpg"),
        require("../images/webp/cs3.jpg"),
        require("../images/webp/cs4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 16,
      name: "Urban Elegance Dress",
      price: 85,
      discountedPrice: 68,
      rating: 4,
      images: [
        require("../images/webp/be1.jpg"),
        require("../images/webp/be5.jpg"),
        require("../images/webp/be3.jpg"),
        require("../images/webp/be4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 17,
      name: "LuminousLace women's wear",
      price: 90,
      discountedPrice: 72,
      rating: 3,
      images: [
        require("../images/webp/bea1.jpg"),
        require("../images/webp/bea2.jpg"),
        require("../images/webp/bea3.jpg"),
        require("../images/webp/bea4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 18,
      name: "Kids' shirt and skirt set",
      price: 95,
      discountedPrice: 76,
      rating: 5,
      images: [
        require("../images/webp/kid1.avif"),
        require("../images/webp/kid2.jpg"),
        require("../images/webp/kid3.avif"),
        require("../images/webp/kid4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 19,
      name: "Business smart casual for men",
      price: 100,
      discountedPrice: 80,
      rating: 4,
      images: [
        require("../images/webp/jack1.jpg"),
        require("../images/webp/jack2.jpg"),
        require("../images/webp/jack3.jpg"),
        require("../images/webp/jack4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 20,
      name: "Kids sweater and skirt set",
      price: 105,
      discountedPrice: 84,
      rating: 3,
      images: [
        require("../images/webp/kids1.avif"),
        require("../images/webp/kids2.jpg"),
        require("../images/webp/kids3.jpg"),
        require("../images/webp/kids4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 21,
      name: "ClassiqueCarry Purse",
      price: 110,
      discountedPrice: 88,
      rating: 5,
      images: [
        require("../images/webp/bag1.jpg"),
        require("../images/webp/bag2.jpg"),
        require("../images/webp/bag4.jpg"),
        require("../images/webp/bag3.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 22,
      name: "Men's shirt",
      price: 115,
      discountedPrice: 92,
      rating: 4,
      images: [
        require("../images/webp/man1.jpg"),
        require("../images/webp/man2.jpg"),
        require("../images/webp/man3.jpg"),
        require("../images/webp/man4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 23,
      name: "Womens' Elegant purse",
      price: 120,
      discountedPrice: 96,
      rating: 3,
      images: [
        require("../images/webp/purse1.jpg"),
        require("../images/webp/purse5.jpg"),
        require("../images/webp/purse3.jpg"),
        require("../images/webp/purse4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 24,
      name: "Sexy Women's Jeans and top set",
      price: 125,
      discountedPrice: 100,
      rating: 5,
      images: [
        require("../images/webp/jeans1.jpg"),
        require("../images/webp/jeans2.jpg"),
        require("../images/webp/jeans3.jpg"),
        require("../images/webp/jeans4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 25,
      name: "Kids' Trousers",
      price: 130,
      discountedPrice: 104,
      rating: 4,
      images: [
        require("../images/webp/k1.avif"),
        require("../images/webp/k2.avif"),
        require("../images/webp/k3.jpg"),
        require("../images/webp/k4.avif")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 26,
      name: "Ladies' skirt + stockings set",
      price: 135,
      discountedPrice: 108,
      rating: 3,
      images: [
        require("../images/webp/skirt1.jpg"),
        require("../images/webp/skirt2.jpg"),
        require("../images/webp/skirt3.jpg"),
        require("../images/webp/skirt4.jpg")
      ],
      wishlistIconPath: wishlistIcon,
      addToCartIconPath: cartIcon,
      currentImageIndex: 0
    },
    {
      id: 27,
      name: "EliteElegance three piece suit",
      price: 140,
      discountedPrice: 112,
      rating: 5,
      images: [
        require("../images/webp/ms1.jpg"),
        require("../images/webp/ms2.jpg"),
        require("../images/webp/ms3.jpg"),
        require("../images/webp/ms4.jpg")
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
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
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


  return (
    <div className="collections-page">
      <div className="header-container">
      <Nav />
      </div>
      <div className="side-bar">
        <LeftSideBar />
      </div>
      <div className="collections-items">
        {groupedItems.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((item, columnIndex) => (
              <div
                className={`item-container ${
                  item.id >= 10 && item.id <= 15 ? "special-card" : ""
                }`}
                key={item.id}
              >
                <div
                  className="item-image"
                  onClick={() => handleOpenModal(item)}
                >
                  <img
                    src={item.images[item.currentImageIndex]}
                    alt={item.name}
                  />
                  <div className="item-overlay">
                    <div className="item-discount">
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
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                      <img src={item.addToCartIconPath} alt="Add to Cart" />
                      Add to Cart
                    </button>
                    <div className="discounted-price">
                      {item.discountedPrice}
                    </div>
                  </div>
                </div>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="price-container">
                    <span className="previous-price">${item.price}</span>
                    <span className="current-price">
                      ${item.discountedPrice}
                    </span>
                  </div>
                  <div className="item-rating">
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <span
                        key={index}
                        className="star-icon"
                        style={{
                          color: "crimson",
                          fontSize: "1.5em"
                        }}
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
      {/* Render the Modal component inside the return statement */}
      <Modal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        product={selectedProduct}
        selectedImageIndex={selectedImageIndex}
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
      />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Collections;