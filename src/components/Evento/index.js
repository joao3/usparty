import { Link } from 'react-router-dom';
import './style.css';

function Evento(props) {
  return (
    <div className="Evento">
      <Link to={props.evento.path} id='link' style={{"textDecoration": "none"}}>
        <img src={props.evento.imagem} alt={props.evento.alt}></img>

          <div className='info'>
            <h2 id='data'>{props.evento.data}</h2>
      
            <h1 id='titulo'>{props.evento.titulo}</h1>
      
            <h2 id='local'>{props.evento.local}</h2>
          </div>
      </Link>
        
    </div>
  );
}

export default Evento;