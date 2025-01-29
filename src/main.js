import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { children: _jsx(StrictMode, { children: _jsx("div", { children: _jsx(App, {}) }) }) }));
