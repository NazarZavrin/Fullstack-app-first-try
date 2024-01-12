// client\src\index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';

const localhostURL = 'http://localhost:5000';
const serverURL = 'https://fullstack-app-first-try-backend.onrender.com';
export const URLContext = createContext(serverURL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <URLContext.Provider value={
    window.location.href.includes("localhost") ? localhostURL : serverURL
  }>
    <App />
  </URLContext.Provider>
);