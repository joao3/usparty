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

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const eventos = [
  {
    "titulo": "StandUp Rafael Portugal",
    "imagem": require('./imgs/rafael.jpg'),
    "alt_imagem": "Banner Show Rafael Portugal",
    "data": "15 OUT",
    "local": "Teatro Multiplan - VillageMall - AV. DAS AMÉRICAS, 3900 - PISO SS1, Rio de Janeiro - Rio de Janeiro ",
    "path": "/0",
    "data_inteira": "Sábado, 15 de Outubro, às 17h00 e 20h00, Domingo às 19h00",
    "valor": 80.00
  },
  {
    "titulo": "Diego Serafim em Eu to pra explodir | Stand-up Comedy",
    "imagem": require('./imgs/eventos/evento (1).jpg'),
    "alt_imagem": "Banner Show Eu to pra explodir",
    "data": "07 DEZ",
    "local": "Villa Raiz - Rio Claro, SP",
    "path": "/1",
    "data_inteira": "Sexta, 07 de Dezembro, às 19h00",
    "valor": 80.00
  },
  {
    "titulo": "Musa | Open Cooler",
    "imagem": require('./imgs/eventos/evento (2).jpg'),
    "alt_imagem": "Banner Evento Musa",
    "data": "09 DEZ",
    "local": "Local a definir - Americana, SP",
    "path": "/2",
    "data_inteira": "Domingo, 15 de Dezembro, às 14h00",
    "valor": 80.00
  },
  {
    "titulo": "Douglas Zóio no Ribeirão Comedy",
    "imagem": require('./imgs/eventos/evento (3).jpg'),
    "alt_imagem": "Banner Show Douglas Zóio",
    "data": "11 DEZ",
    "local": "Boteco Brazukis - Ribeirão Preto, SP",
    "path": "/3",
    "data_inteira": "Sábado, 11 de Dezembro, às 14h00",
    "valor": 80.00
  },
  {
    "titulo": "REVEILLON 2023",
    "imagem": require('./imgs/eventos/evento (4).jpg'),
    "alt_imagem": "Banner Evento Reveillon 2023",
    "data": "31 DEZ",
    "local": "ROYAL CLUB - Americana, SP",
    "path": "/4",
    "data_inteira": "Sábado, 31 de Dezembro, às 22h00",
    "valor": 80.00
  },
  {
    "titulo": "Especial Natiruts Acústico",
    "imagem": require('./imgs/eventos/evento (5).jpg'),
    "alt_imagem": "Banner Show Natiruts Acústico",
    "data": "13 JAN",
    "local": "A Fábrica de Extintores - Ribeirão Preto, SP",
    "path": "/5",
    "data_inteira": "Domingo, 13 de Janeiro, às 17h00",
    "valor": 80.00
  },
  {
    "titulo": "Especial Barão & Cazuza e Rock Nacional c/ Johnnie Rock",
    "imagem": require('./imgs/eventos/evento (6).jpg'),
    "alt_imagem": "Banner Show Barão & Cazuza",
    "data": "03 DEZ",
    "local": "Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP",
    "path": "/6",
    "data_inteira": "Quinta, 03 de Dezembro, às 18h00",
    "valor": 80.00
  },
  {
    "titulo": "Pearl Jam Cover",
    "imagem": require('./imgs/eventos/evento (7).jpg'),
    "alt_imagem": "Show Pearl Jam Cover",
    "data": "01 DEZ",
    "local": "Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP",
    "path": "/7",
    "data_inteira": "Sábado, 01 de Dezembro, às 17h00",
    "valor": 80.00
  },
  {
    "titulo": "MULTIVERSO DA BRAZILIAN VERSION",
    "imagem": require('./imgs/eventos/evento (8).jpg'),
    "alt_imagem": "Banner Multiverso Da Brazilian Version",
    "data": "03 DEZ",
    "local": "Caos - Campinas, SP",
    "path": "/8",
    "data_inteira": "Sexta, 03 de Dezembro, às 13h00",
    "valor": 80.00
  },
  {
    "titulo": "Cover Jimi Hendrix - Eduardo Ardanuy",
    "imagem": require('./imgs/eventos/evento (9).jpg'),
    "alt_imagem": "Banner Cover Jimi Hendrix - Eduardo Ardanuy",
    "data": "10 DEZ",
    "local": "Gabrielle Cultural Lounge - São Carlos, SP",
    "path": "/9",
    "data_inteira": "Sábado, 10 de Dezembro, às 21h00",
    "valor": 80.00
  },
  {
    "titulo": "FLÁVIO ANDRADDE com O AZAR É MEU?",
    "imagem": require('./imgs/eventos/evento (10).jpg'),
    "alt_imagem": "Banner Show O Azar é Meu:",
    "data": "15 DEZ",
    "local": "Sancta Cervejaria - Santa Bárbara d'Oeste, SP",
    "path": "/10",
    "data_inteira": "Sábado, 15 de Dezembro, às 16h00",
    "valor": 80.00
  },
  {
    "titulo": "DANILO GENTILI, DIOGO PORTUGAL e OSCAR FILHO",
    "imagem": require('./imgs/eventos/evento (11).jpg'),
    "alt_imagem": "Banner Show Danilo Gentili, Diogo Portugal e Oscar Filho",
    "data": "18 DEZ",
    "local": "Teatro Paulo Autran - Americana, SP",
    "path": "/11",
    "data_inteira": "Sábado, 18 de Dezembro, às 20h00",
    "valor": 80.00
  },
]

let routes = [
  {
    path: "/",
    element: Wrapper(<Home eventos={eventos} />),
  }, {
    path: "/minhaconta",
    element: Wrapper(<MinhaConta />),
  }, {
    path: "/pagamento",
    element: Wrapper(<Pagamento />),
  }, {
    path: "/login",
    element: Wrapper(<Login />),
  }, {
    path: "/detalheevento",
    element: Wrapper(<DetalheEvento />),
  }, {
    path: "/carrinho",
    element: Wrapper(<Carrinho eventos={eventos} />),
  }, {
    path: "/cadastrar",
    element: Wrapper(<Cadastrar />),
  }, {
    path: "/meusingressos",
    element: Wrapper(<MeusIngressos />),
  }
];

eventos.forEach(evento => {
  routes.push({
    path: evento.path,
    element: Wrapper(<DetalheEvento evento={evento} />),
  })
})

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
