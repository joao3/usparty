import './Evento.css';

function Evento(props) {
  return (
    <div id='parent' className={props.className}>
      <div className="Evento">
        
          <img src={props.imagem} alt={props.alt}></img>

          <h2 id='data'>{props.data}</h2>

          <h1 id='titulo'>{props.titulo}</h1>

          <h2 id='local'>{props.local}</h2>
      </div>
    </div>
  );
}

export default Evento;