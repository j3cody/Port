import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Create a root for React 18's new root API
const root = createRoot(document.getElementById('root'));

// Render the app inside the root, wrapped with BrowserRouter for routing
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
