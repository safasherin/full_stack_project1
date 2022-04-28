import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './fonts/Big Caslon Medium/Big Caslon Medium.ttf';
import './fonts/Brown std/BrownStd-Bold.otf';
import './fonts/Brown std/BrownStd-Light.otf';
import './fonts/Brown std/BrownStd-Regular.otf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
