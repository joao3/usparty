import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import MinhaConta from './pages/MinhaConta';
import DetalheEvento from './pages/DetalheEvento';
import Pagamento from './pages/Pagamento';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';
import Cadastrar from './pages/Cadastrar';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/minhaconta",
    element: <MinhaConta />,
  },{
    path: "/pagamento",
    element: <Pagamento />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/detalheevento",
    element: <DetalheEvento />,
  },{
    path: "/carrinho",
    element: <Carrinho />,
  },{
    path: "/cadastrar",
    element: <Cadastrar />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
