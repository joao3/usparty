import './style.css';

import Evento from '../Evento';

const CatalogoEventos = (props) => {
  return (
    <section className='CatalogoEventos'>
      <h2>{props.label}</h2>

      <div className='cards'>
      <Evento imagem={require('../../imgs/eventos/evento (7).jpg')} titulo='Pearl Jam Cover' data='01 DEZ' local='Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (8).jpg')} titulo='MULTIVERSO DA BRAZILIAN VERSION' data='03 DEZ' local='Caos - Campinas, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (9).jpg')} titulo='Cover Jimi Hendrix - Eduardo Ardanuy' data='10 DEZ' local='Gabrielle Cultural Lounge - São Carlos, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (10).jpg')} titulo='FLÁVIO ANDRADDE com O AZAR É MEU?' data='15 DEZ' local="Sancta Cervejaria - Santa Bárbara d'Oeste, SP" alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (11).jpg')} titulo='DANILO GENTILI, DIOGO PORTUGAL e OSCAR FILHO' data='18 DEZ' local='Teatro Paulo Autran - Americana, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (12).jpg')} titulo='BAILE DA LARISSINHA FESTIVAL COM TATI ZAQUI' data='17 DEZ' local='Caos - Campinas, SP' alt='show rafael portugal' />
      
      </div>
    </section>
  );
}

export default CatalogoEventos;