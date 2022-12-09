import "./style.css";
import { Link } from "react-router-dom";

const Categoria = (props) => {
  return (
    <Link className="Categoria">
      <img src={props.imagem} alt={props.nome}></img>
      {props.nome}
    </Link>
  );
};

export default Categoria;
