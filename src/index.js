import "./global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import MinhaConta from "./pages/MinhaConta";
import DetalheEvento from "./pages/DetalheEvento";
import Pagamento from "./pages/Pagamento";
import Login from "./pages/Login";
import Carrinho from "./pages/Carrinho";
import Cadastrar from "./pages/Cadastrar";
import MeusIngressos from "./pages/MeusIngressos";
import { Wrapper } from "./components/Wrapper";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Concluido from "./pages/Concluido";

const eventos = [
  {
    titulo: "StandUp Rafael Portugal",
    imagem: require("./imgs/rafael.jpg"),
    alt: "Banner Show Rafael Portugal",
    data: "15 out",
    local:
      "Teatro Multiplan - VillageMall - AV. DAS AMÉRICAS, 3900 - PISO SS1, Rio de Janeiro - Rio de Janeiro ",
    path: "/evento-0",
    data_inteira: "Sábado, 15 de Outubro, às 17h00 e 20h00, Domingo às 19h00",
    valor: 80.0,
  },
  {
    titulo: "Diego Serafim em Eu to pra explodir | Stand-up Comedy",
    imagem: require("./imgs/eventos/evento (1).jpg"),
    alt: "Banner Show Eu to pra explodir",
    data: "07 dez",
    local: "Villa Raiz - Rio Claro, SP",
    path: "/evento-1",
    data_inteira: "Sexta, 07 de Dezembro, às 19h00",
    valor: 80.0,
  },
  {
    titulo: "Musa | Open Cooler",
    imagem: require("./imgs/eventos/evento (2).jpg"),
    alt: "Banner Evento Musa",
    data: "09 dez",
    local: "Local a definir - Americana, SP",
    path: "/evento-2",
    data_inteira: "Domingo, 15 de Dezembro, às 14h00",
    valor: 80.0,
  },
  {
    titulo: "Douglas Zóio no Ribeirão Comedy",
    imagem: require("./imgs/eventos/evento (3).jpg"),
    alt: "Banner Show Douglas Zóio",
    data: "11 dez",
    local: "Boteco Brazukis - Ribeirão Preto, SP",
    path: "/evento-3",
    data_inteira: "Sábado, 11 de Dezembro, às 14h00",
    valor: 80.0,
  },
  {
    titulo: "Reveillon 2023",
    imagem: require("./imgs/eventos/evento (4).jpg"),
    alt: "Banner Evento Reveillon 2023",
    data: "31 dez",
    local: "ROYAL CLUB - Americana, SP",
    path: "/evento-4",
    data_inteira: "Sábado, 31 de Dezembro, às 22h00",
    valor: 80.0,
  },
  {
    titulo: "Especial Natiruts Acústico",
    imagem: require("./imgs/eventos/evento (5).jpg"),
    alt: "Banner Show Natiruts Acústico",
    data: "13 jan",
    local: "A Fábrica de Extintores - Ribeirão Preto, SP",
    path: "/evento-5",
    data_inteira: "Domingo, 13 de Janeiro, às 17h00",
    valor: 80.0,
  },
  {
    titulo: "Especial Barão & Cazuza e Rock Nacional c/ Johnnie Rock",
    imagem: require("./imgs/eventos/evento (6).jpg"),
    alt: "Banner Show Barão & Cazuza",
    data: "03 dez",
    local: "Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP",
    path: "/evento-6",
    data_inteira: "Quinta, 03 de Dezembro, às 18h00",
    valor: 80.0,
  },
  {
    titulo: "Pearl Jam Cover",
    imagem: require("./imgs/eventos/evento (7).jpg"),
    alt: "Show Pearl Jam Cover",
    data: "01 dez",
    local: "Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP",
    path: "/evento-7",
    data_inteira: "Sábado, 01 de Dezembro, às 17h00",
    valor: 80.0,
  },
  {
    titulo: "Multiverso Da Brazilian Version",
    imagem: require("./imgs/eventos/evento (8).jpg"),
    alt: "Banner Multiverso Da Brazilian Version",
    data: "03 dez",
    local: "Caos - Campinas, SP",
    path: "/evento-8",
    data_inteira: "Sexta, 03 de Dezembro, às 13h00",
    valor: 80.0,
  },
  {
    titulo: "Cover Jimi Hendrix - Eduardo Ardanuy",
    imagem: require("./imgs/eventos/evento (9).jpg"),
    alt: "Banner Cover Jimi Hendrix - Eduardo Ardanuy",
    data: "10 dez",
    local: "Gabrielle Cultural Lounge - São Carlos, SP",
    path: "/evento-9",
    data_inteira: "Sábado, 10 de Dezembro, às 21h00",
    valor: 80.0,
  },
  {
    titulo: "Flávio Andradde Com O Azar É Meu?",
    imagem: require("./imgs/eventos/evento (10).jpg"),
    alt: "Banner Show O Azar é Meu:",
    data: "15 dez",
    local: "Sancta Cervejaria - Santa Bárbara d'Oeste, SP",
    path: "/evento-10",
    data_inteira: "Sábado, 15 de Dezembro, às 16h00",
    valor: 80.0,
  },
  {
    titulo: "Danilo Gentili, Diogo Portugal E Oscar Filho",
    imagem: require("./imgs/eventos/evento (11).jpg"),
    alt: "Banner Show Danilo Gentili, Diogo Portugal e Oscar Filho",
    data: "18 dez",
    local: "Teatro Paulo Autran - Americana, SP",
    path: "/evento-11",
    data_inteira: "Sábado, 18 de Dezembro, às 20h00",
    valor: 80.0,
  },
];

let routes = [
  {
    path: "/",
    element: Wrapper(<Home eventos={eventos} />),
  },
  {
    path: "/minhaconta",
    element: Wrapper(<MinhaConta />),
  },
  {
    path: "/pagamento",
    element: Wrapper(<Pagamento />),
  },
  {
    path: "/login",
    element: Wrapper(<Login />),
  },
  {
    path: "/carrinho",
    element: Wrapper(<Carrinho eventos={eventos} />),
  },
  {
    path: "/cadastrar",
    element: Wrapper(<Cadastrar />),
  },
  {
    path: "/meusingressos",
    element: Wrapper(<MeusIngressos />),
  },
  {
    path: "/concluido",
    element: Wrapper(<Concluido />)
  }
];

eventos.forEach((evento) => {
  routes.push({
    path: evento.path,
    element: Wrapper(<DetalheEvento evento={evento} />),
  });
});

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//-------------Vlibras--------------------
let CreateDOMObjects = () => {
    const DOM = `
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', DOM);
}

let ImportScriptFile = () => {
    let script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(script)
}

(() => {
    window.addEventListener('DOMContentLoaded', e => {
        CreateDOMObjects();
        ImportScriptFile();
    });
})();
//-----------------------------------------------