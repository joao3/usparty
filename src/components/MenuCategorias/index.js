import "./style.css";
import Categoria from "../Categoria";
import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MenuCategorias = () => {
  const categorias = [
    {
      nome: "Copa",
      imagem: require("../../imgs/categorias/copa.jpg"),
    },
    {
      nome: "Esportes",
      imagem: require("../../imgs/categorias/esportes.jpg"),
    },
    {
      nome: "Festas",
      imagem: require("../../imgs/categorias/festas.jpg"),
    },
    {
      nome: "Infantil",
      imagem: require("../../imgs/categorias/infantil.jpg"),
    },
    {
      nome: "Online",
      imagem: require("../../imgs/categorias/online.jpg"),
    },
    {
      nome: "Palestras",
      imagem: require("../../imgs/categorias/palestras.jpg"),
    },
    {
      nome: "Revéillon",
      imagem: require("../../imgs/categorias/reveillon.jpg"),
    },
    {
      nome: "Stand Up",
      imagem: require("../../imgs/categorias/standup.jpg"),
    },
    {
      nome: "Teatro",
      imagem: require("../../imgs/categorias/teatro.jpg"),
    },
    {
      nome: "Viagens",
      imagem: require("../../imgs/categorias/viagens.jpg"),
    },
  ];

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    console.log("oi")
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let listAreaWidth = window.innerWidth * 0.805;
    listAreaWidth = listAreaWidth > 900 ? 900 : listAreaWidth;

    let x = scrollX - Math.round(listAreaWidth / 2);
    let listW = categorias.length * 182;
    if (listAreaWidth - listW > x) {
      x = listAreaWidth - listW;
    }
    setScrollX(x);
  };

  console.log(scrollX)

  return (
    <div className="MenuCategorias">
      <h2 id="titleCategory">Categorias</h2>
      <div className={scrollX === 0? "left disabled" : "left"} onClick={scrollX !== 0 ? handleLeftArrow : undefined}>
        <NavigateBeforeIcon className="arrow" style={{ fontSize: 50 }} />
      </div>

      <div className={scrollX === 0? "right disabled" : "right  "} onClick={handleRightArrow}>
        <NavigateNextIcon className="arrow" style={{ fontSize: 50 }} />
      </div>

      <div className="listArea">
        <div
          className="list"
          style={{
            marginLeft: scrollX,
          }}
        >
          {categorias.map((categoria) => (
            <Categoria
              nome={categoria.nome}
              imagem={categoria.imagem}
              key={categoria.nome}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategorias;
