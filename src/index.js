import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { App, Practice1} from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/practice1" element={<Practice1 />} />
  </Routes>
  </BrowserRouter>
);
