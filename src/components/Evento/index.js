import { Link } from "react-router-dom";
import "./style.css";

function Evento(props) {
  return (
    <div className="evento">
      <Link to={props.evento.path} className="link" style={{ textDecoration: "none" }}>
        <img src={props.evento.imagem} alt={props.evento.alt}></img>

        <div className="info">
          <span className="data">{props.evento.data}</span>

          <h3 className="titulo">{props.evento.titulo}</h3>

          <span className="local">{props.evento.local}</span>
        </div>
      </Link>
    </div>
  );
}

export default Evento;
