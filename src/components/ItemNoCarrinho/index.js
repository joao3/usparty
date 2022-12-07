import "./style.css";
import { useState } from "react";

const ItemNoCarrinho = (props) => {
  const [inputNumber, setInputNumber] = useState(1);

  const handleInputNumber = (value) => {
    if (value != 0) {
      if (value > inputNumber) {
        props.aumentar(props.evento);
      } else if (value < inputNumber) {
        props.diminuir(props.evento);
      }

      setInputNumber(value);
    }
  };

  return (
    <div className="ItemNoCarrinho">
      <div className="imagem">
        <img src={props.evento.imagem} alt={props.evento.alt}></img>
      </div>

      <div className="info">
        <h2 style={{ fontSize: "22px", maxWidth: "450px" }}>
          {props.evento.titulo}
        </h2>

        <div className="quantidade">
          <label>Quantidade: </label>
          <input
            onChange={(e) => handleInputNumber(e.target.valueAsNumber)}
            type="number"
            min={1}
            value={inputNumber}
            style={{ width: "55px" }}
          ></input>
        </div>

        <div
          className="removerCarrinho"
          onClick={() => props.remover(props.evento)}
        >
          Remover do carrinho
        </div>
      </div>
      <div className="valor">
        Valor unitário: R$ {props.evento.valor.toFixed(2).replace(".", ",")}
      </div>
    </div>
  );
};

export default ItemNoCarrinho;
