import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import MinhaConta from './pages/MinhaConta/index';
import DetalheEvento from './pages/DetalheEvento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<DetalheEvento />*/}
    {/*<MinhaConta />*/}
    <Home />
  </React.StrictMode>
);
