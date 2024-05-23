import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Signup.scss";
import Background from "../images/webp/women/Background.mp4";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://codsoft-eccomerce-website-backend2.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("User registered successfully");
        setRegistrationSuccess(true);
      } else {
        // Registration failed
        console.error("User registration failed");
      }
    } catch (error) {
      alert("The error" + error + " occurred. Please try again later.");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="overlay"></div>
      <div className="card">
        <div className="left">
          <div className="left-container">
            <nav className="horizontal-nav">
              <ul>
                <li>
                  <NavLink exact to="/signup" activeClassName="active">
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/admin" activeClassName="active">
                    Admin
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="signup-form">
              <h2>Create an Account</h2>
              <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                {/* Submit button */}
                <button type="submit">Sign Up</button>
              </form>
              <div className="login-link">
                <p>
                  Already have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="overlaytwo"></div>
          <div class="welcome-text">
            <h2>Welcome to GlamourGallerie</h2>
            <p>
              Explore our curated collection of haute couture and trendsetting
              ensembles. Step into a world where style meets sophistication, and fashion finds its true expression.
            </p>
          </div>
          <video autoPlay muted loop>
            <source src={Background} type="video/mp4" />
          </video>
        </div>
      </div>
      {registrationSuccess && (
        <div className={`success ${registrationSuccess ? '' : 'hide'}`}>
          <h2>Registration Successful</h2>
          <p>Thank you for signing up with GlamourGallerie. You can now log in to your account.</p>
          <button><Link to="/" style={{color:'white'}}>Login</Link></button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
