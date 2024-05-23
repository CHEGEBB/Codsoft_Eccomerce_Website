import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import Login from './auth-pages/Login';

// Example isAuthenticated logic
const isAuthenticated = true; // Change this based on your actual authentication logic

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {isAuthenticated ? <App /> : <Login />}
  </React.StrictMode>
);
