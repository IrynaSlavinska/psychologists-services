import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import GlobalStyles from 'assets/styles/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/psychologists-services">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
