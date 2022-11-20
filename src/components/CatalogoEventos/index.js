import './style.css';

import Evento from '../Evento';

const CatalogoEventos = (props) => {
  return (
    <section className='CatalogoEventos'>
      <h2>{props.label}</h2>

      <div className='cards'>
        <Evento imagem={require('../../imgs/rafael.jpg')} titulo='Rafael Portugal' data='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem={require('../../imgs/rafael.jpg')} titulo='Rafael Portugal' data='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem={require('../../imgs/rafael.jpg')} titulo='Rafael Portugal' data='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem={require('../../imgs/rafael.jpg')} titulo='Rafael Portugal' data='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem={require('../../imgs/rafael.jpg')} titulo='Rafael Portugal' data='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem={require('../../imgs/rafael.jpg')} titulo='Rafael Portugal' data='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
      </div>
    </section>
  );
}

export default CatalogoEventos;