import './style.css';

import Evento from '../Evento';

const CatalogoEventos = (props) => {

  return (
    <section className='CatalogoEventos'>
      <h2>{props.label}</h2>

      <div className='cards'>
      
      {props.eventos.map(evento => <Evento titulo={evento.titulo} imagem={evento.imagem} data={evento.data} local={evento.local} alt={evento.alt_imagem}  /> )}
      
      </div>
    </section>
  );
}

export default CatalogoEventos;