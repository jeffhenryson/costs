import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando a aplicação dentro do root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
