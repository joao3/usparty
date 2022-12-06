import './style.css';

import Evento from '../Evento';

const CatalogoEventos = (props) => {

  return (
    <section className='CatalogoEventos'>
      <h2>{props.label}</h2>

      <div className='cards'>
      
      {props.eventos.map(evento => <Evento evento={evento} key={evento.path}  /> )}
      
      </div>
    </section>
  );
}

export default CatalogoEventos;