import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/genaral.css';
import theme from './assets/style'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode theme = {theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
