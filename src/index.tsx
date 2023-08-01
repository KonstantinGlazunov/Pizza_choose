import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Hw_24 from './Hw_24/Hw_24';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter> 
  <Hw_24 />
  </BrowserRouter>
  

);


reportWebVitals();
