import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

import './index.css';
import { Footer } from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
renders the app with React router dom (for navigation)
*/
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <App />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
