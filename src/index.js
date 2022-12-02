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

const eventos = [
  {
    "titulo": "Diego Serafim em Eu to pra explodir | Stand-up Comedy",
    "imagem": require('./imgs/eventos/evento (1).jpg'),
    "alt_imagem": "Banner Show Eu to pra explodir",
    "data": "07 DEZ",
    "local": "Villa Raiz - Rio Claro, SP",
  },
  {
    "titulo": "Musa | Open Cooler",
    "imagem": require('./imgs/eventos/evento (2).jpg'),
    "alt_imagem": "Banner Evento Musa",
    "data": "09 DEZ",
    "local": "Local a definir - Americana, SP",
  },
  {
    "titulo": "Douglas Zóio no Ribeirão Comedy",
    "imagem": require('./imgs/eventos/evento (3).jpg'),
    "alt_imagem": "Banner Show Douglas Zóio",
    "data": "11 DEZ",
    "local": "Boteco Brazukis - Ribeirão Preto, SP",
  },
  {
    "titulo": "REVEILLON 2023",
    "imagem": require('./imgs/eventos/evento (4).jpg'),
    "alt_imagem": "Banner Evento Reveillon 2023",
    "data": "31 DEZ",
    "local": "ROYAL CLUB - Americana, SP",
  },
  {
    "titulo": "Especial Natiruts Acústico",
    "imagem": require('./imgs/eventos/evento (5).jpg'),
    "alt_imagem": "Banner Show Natiruts Acústico",
    "data": "13 JAN",
    "local": "A Fábrica de Extintores - Ribeirão Preto, SP",
  },
  {
    "titulo": "Especial Barão & Cazuza e Rock Nacional c/ Johnnie Rock",
    "imagem": require('./imgs/eventos/evento (6).jpg'),
    "alt_imagem": "Banner Show Barão & Cazuza",
    "data": "03 DEZ",
    "local": "Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP",
  },
  {
    "titulo": "Pearl Jam Cover",
    "imagem": require('./imgs/eventos/evento (7).jpg'),
    "alt_imagem": "Show Pearl Jam Cover",
    "data": "01 DEZ",
    "local": "Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP",
  },
  {
    "titulo": "MULTIVERSO DA BRAZILIAN VERSION",
    "imagem": require('./imgs/eventos/evento (8).jpg'),
    "alt_imagem": "Banner Multiverso Da Brazilian Version",
    "data": "03 DEZ",
    "local": "Caos - Campinas, SP",
  },
  {
    "titulo": "Cover Jimi Hendrix - Eduardo Ardanuy",
    "imagem": require('./imgs/eventos/evento (9).jpg'),
    "alt_imagem": "Banner Cover Jimi Hendrix - Eduardo Ardanuy",
    "data": "10 DEZ",
    "local": "Gabrielle Cultural Lounge - São Carlos, SP",
  },
  {
    "titulo": "FLÁVIO ANDRADDE com O AZAR É MEU?",
    "imagem": require('./imgs/eventos/evento (10).jpg'),
    "alt_imagem": "Banner Show O Azar é Meu:",
    "data": "15 DEZ",
    "local": "Sancta Cervejaria - Santa Bárbara d'Oeste, SP",
  },
  {
    "titulo": "DANILO GENTILI, DIOGO PORTUGAL e OSCAR FILHO",
    "imagem": require('./imgs/eventos/evento (11).jpg'),
    "alt_imagem": "Banner Show Danilo Gentili, Diogo Portugal e Oscar Filho",
    "data": "18 DEZ",
    "local": "Teatro Paulo Autran - Americana, SP",
  },
  {
    "titulo": "BAILE DA LARISSINHA FESTIVAL COM TATI ZAQUI",
    "imagem": require('./imgs/eventos/evento (12).jpg'),
    "alt_imagem": "Banner Baile Da Larissinha",
    "data": "17 DEZ",
    "local": "Caos - Campinas, SP' alt='show rafael portugal",
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: Wrapper(<Home eventos={eventos} />),
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
