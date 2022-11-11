import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { VecinoApp } from './VecinoApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VecinoApp />
  </React.StrictMode>
);
