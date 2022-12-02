import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import MinhaConta from './pages/MinhaConta';
import DetalheEvento from './pages/DetalheEvento';
import Pagamento from './pages/Pagamento';
import Login from './pages/Login';
import Carrinho from './pages/Carrinho';
import Cadastrar from './pages/Cadastrar';
import MeusIngressos from './pages/MeusIngressos';
import { Wrapper } from './components/Wrapper';
import { useAuth } from './context/Auth';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useLocation
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: Wrapper(<Home />),
  },{
    path: "/minhaconta",
    element: Wrapper(<MinhaConta />),
  },{
    path: "/pagamento",
    element: Wrapper(<Pagamento />),
  },{
    path: "/login",
    element: Wrapper(<Login />),
  },{
    path: "/detalheevento",
    element: Wrapper(<DetalheEvento />),
  },{
    path: "/carrinho",
    element: Wrapper(<Carrinho />),
  },{
    path: "/cadastrar",
    element: Wrapper(<Cadastrar />),
  },{
    path: "/meusingressos",
    element: Wrapper(<MeusIngressos />),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
