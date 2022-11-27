import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MinhaConta from './pages/MinhaConta/MinhaConta';
import DetalheEvento from './pages/DetalheEvento/DetalheEvento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<DetalheEvento />*/}
    {/*<MinhaConta />*/}
    <App />
  </React.StrictMode>
);
