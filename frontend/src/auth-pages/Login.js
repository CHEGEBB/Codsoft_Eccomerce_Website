import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require("../images/webp/login/a1.jpg"),
    require("../images/webp/login/a2.jpg"),
    require("../images/webp/login/a3.jpg"),
    require("../images/webp/login/a4.jpg")
  ];
  const messages = [
    "Our T-Shirts are made from the finest cotton in the world. They are soft, comfortable, and durable. They are available in a variety of colors and sizes.",
    "We sell high-class suits that are made from the finest materials. They are available in a variety of colors and sizes.",
    "Our shoes are made from the finest leather in the world. They are comfortable, durable, and stylish. They are available in a variety of colors and sizes."
  ];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('https://codsoft-eccomerce-website-backend2.onrender.com/auth/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem('token', token); 
        navigate('/home'); 
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>
      <div className="card">
        <div className="left">
          <div className="left-container">
            <nav className="horizontal-nav">
              <ul>
                <li>
                  <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>Sign Up</Link>
                </li>
                <li>
                  <Link to="/login" className={location.pathname === "/" ? "active" : ""}>Login</Link>
                </li>
              </ul>
            </nav>
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={ handleLogin}>Login</button>
              </form>
              <div className="forgot-password">
                <p>
                  <Link to="/forgotpassword">Forgot your password?</Link>
                </p>
              </div>
              <div className="signup-link">
                <p>
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <img
              src={images[currentImageIndex]}
              alt="Product"
              className={`product-image ${currentImageIndex === 0 ? "zoom-in-out" : ""}`}
            />
            <p className="product-description">{messages[currentImageIndex]}</p>
            <div className="image-container">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`image-indicator ${index === currentImageIndex ? "active" : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
