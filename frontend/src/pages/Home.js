import React, { useEffect, useState } from 'react';
import './Home.scss';
import CartIcon from "../images/ic--round-shopping-cart.svg";
import StarIcon from "../images/women/ic--outline-star.svg";
import Image1 from "../images/pexels-rfera-432059.jpg";
import Image2 from "../images/pexels-godisable-jacob-226636-794062.jpg";
import Image3 from "../images/wom2.jpg";
import Footer from '../components/Footer';
import DeliveryIcon from "../images/us/carbon--delivery.svg";
import SupportIcon from "../images/us/mdi--customer-service.svg";
import DiscountIcon from "../images/us/streamline--discount-percent-badge.svg";
import SecurePaymentsIcon from "../images/us/ri--secure-payment-fill.svg";
import Header from '../components/header';
import Navbar from '../components/Navbar';

const images = [
  {
    src: require('../images/pic2.jpg'),
    text: 'First Image',
    heading: 'Discover Your Style',
    paragraph: 'Explore our latest collection and find the perfect outfit that reflects your unique personality',
    buttonText: 'Shop Now'
  },
  {
    src: require('../images/pic3.jpg'),
    text: 'Second Image',
    heading: 'Elevate Your Wardrobe',
    paragraph: 'Revamp your closet with our exclusive selection of trendy apparel',
    buttonText: 'Shop Now'
  },
  {
    src: require('../images/js.jfif'),
    text: 'Third Image',
    heading: 'Step into Comfort',
    paragraph: 'Experience unparalleled comfort and style with our premium footwear collection',
    buttonText: 'Shop Now'
  }
];

const products = [
  {
    imageClass: "product-image-1", 
    name: "Men Suits",
    price: "$399.99",
    originalPrice: "$499.99",
    rating: 4
  },
  {
    imageClass: "product-image-2", 
    name: "Floral Dress",
    price: "$49.99",
    originalPrice: "$59.99",
    rating: 5
  },
  {
    imageClass: "product-image-3", 
    name: "Running Shoes",
    price: "$79.99",
    originalPrice: "$99.99",
    rating: 4.5
  },
  {
    imageClass: "product-image-4",
    name: "Luxury Watch",
    price: "$199.99",
    originalPrice: "$249.99",
    rating: 4
  },
  {
    imageClass: "product-image-5",
    name: "Leather Bag",
    price: "$149.99",
    originalPrice: "$199.99",
    rating: 5
  },
  {
    imageClass: "product-image-6",
    name: "Fedora Hat",
    price: "$39.99",
    originalPrice: "$49.99",
    rating: 4.5
  },
  {
    imageClass: "product-image-7",
    name: "Sunglasses",
    price: "$19.99",
    originalPrice: "$29.99",
    rating: 3.5
  },
  {
    imageClass: "product-image-8",
    name: "Leather Belt",
    price: "$29.99",
    originalPrice: "$39.99",
    rating: 4
  }
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
      element.classList.remove('fadeIn');
      void element.offsetWidth;
      element.classList.add('fadeIn');
    });
  }, [index]);

  return (
    <div className="Homepage">
    <div className="header-container">
    <Header />
    </div>
    <div className="navigation">
    <Navbar />
    </div>
      
      <div
        className="home-intro"
        style={{
          backgroundImage: `url(${images[index].src})`,
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <div className="text-container animate">
          <h1 className="heading animate">{images[index].heading}</h1>
          <p className="paragraph animate">{images[index].paragraph}</p>
          <p className="colored-paragraph animate">{images[index].paragraph}</p>
          <button className="animate">
            <img src={CartIcon} alt="Cart Icon" />
            {images[index].buttonText}
          </button>
        </div>
      </div>
      <div className="loading-indicator">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={i === index ? 'dot active' : 'dot'}
          ></span>
        ))}
      </div>
      <div className="home-content">
        <div className="women-shop">
          <h1>Shop Women's</h1>
          <button>Shop Now</button>
        </div>
        <div className="mens-shop">
          <h1>Shop Men's</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="welcome">
        <h1>Welcome to GlamourGallerie</h1>
        <p>Discover the latest fashion trends and elevate your wardrobe with Glamour Gallerie. Our exclusive collection of apparel, footwear, and accessories is designed to help you make a statement wherever you go. Explore our online store and find the perfect outfit that reflects your unique personality.</p>
        <div className="items">
          <div className="dresses">
            <h3>Dresses</h3>
            <button>Shop Now</button>
          </div>
          <div className="watches">
            <h3>Watches</h3>
            <button>Shop Now</button>
          </div>
          <div className="shoes">
            <h3>Shoes</h3>
            <button>Shop Now</button>
          </div>
          <div className="accessories">
            <h3>Accessories</h3>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="featured">
        <h1>Featured Products</h1>
        <p>These are some of the latest and most ordered items on glamourgallerie</p>
        <div className="products-row1">
          {products.slice(0, 4).map((product, idx) => (
            <div className={`product ${product.imageClass}`} key={idx}>
              <h3>{product.name}</h3>
              <p><del>{product.originalPrice}</del> {product.price}</p>
              <div className="rating">
                {Array.from({ length: product.rating }, (_, index) => (
                  <img key={index} src={StarIcon} alt="Star Icon" />
                ))}
              </div>
              <button>
                <img src={CartIcon} alt="Cart Icon" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="products-row2">
          {products.slice(4, 8).map((product, idx) => (
            <div className={`product ${product.imageClass}`} key={idx}>
              <h3>{product.name}</h3>
              <p><del>{product.originalPrice}</del> {product.price}</p>
              <div className="rating">
                {Array.from({ length: product.rating }, (_, index) => (
                  <img key={index} src={StarIcon} alt="Star Icon" />
                ))}
              </div>
              <button>
                <img src={CartIcon} alt="Cart Icon" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="about">
        <div className="rectangle"></div>
        <h1>Elevate Your New Style With GlamourGellerie’s Wide range of fashion products </h1>
        <p>Step into GalmourGallerie, where fashion meets enchantment, and every corner whispers tales of elegance and style.</p>
        <div className="image-container">
          <div className="image">
            <img src={Image1} alt="suit" />
          </div>
          <div className="image">
            <img src={Image2} alt="dress" />
          </div>
          <div className="image">
            <img src={Image3} alt="dress" />
          </div>
        </div>
      </div>
      <div className="set-apart">
        <h1>We are best known for</h1>
        <div className="unique">
          <div className="free-delivery">
            <div className="DeliveryIcon">
              <img src={DeliveryIcon} alt="Deliver" />
            </div>
            <h2>Free Delivery</h2>
            <p>Free shipping on all orders over $500</p>
          </div>
          <div className="support">
            <div className="SupportIcon">
              <img src={SupportIcon} alt="Support" />
            </div>
            <h2>24/7 Customer Support</h2>
            <p>Our customer support team is available 24/7</p>
          </div>
          <div className="discount">
            <div className="DiscountIcon">
              <img src={DiscountIcon} alt="Discount" />
            </div>
            <h2>Exclusive Discounts</h2>
            <p>Get exclusive discounts on your favorite products</p>
          </div>
          <div className="secure-payments">
            <div className="SecurePaymentsIcon">
              <img src={SecurePaymentsIcon} alt="Secure Payments" />
            </div>
            <h2>Secure Payments</h2>
            <p>100% secure payment options</p>
          </div>

        </div>

      </div>
      <div className="footer">
        <Footer />
      </div>
     
    </div>
  );
}

export default Home;
