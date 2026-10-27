import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/plus-jakarta-sans';
import App from './App.jsx';
import './styles.css';

// BASE_URL is set by Vite from VITE_BASE (e.g. "/socialmint-website/").
// The router needs it without the trailing slash so that
// /socialmint-website/about resolves to the About page.
const basename = import.meta.env.BASE_URL.replace(/\/+$/, '');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/socialmint-website">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
