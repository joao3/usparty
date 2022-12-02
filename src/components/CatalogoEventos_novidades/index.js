import './style.css';

import Evento from '../Evento';

const CatalogoEventos_novidades = (props) => {
  return (
    <section className='CatalogoEventos_novidades'>
      <h2>{props.label}</h2>

      <div className='cards'>
      <Evento imagem={require('../../imgs/eventos/evento (1).jpg')} titulo='Diego Serafim em Eu to pra explodir | Stand-up Comedy' data='07 DEZ' local='Villa Raiz - Rio Claro, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (2).jpg')} titulo='Musa | Open Cooler' data='09 DEZ' local='Local a definir - Americana, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (3).jpg')} titulo='Douglas Zóio no Ribeirão Comedy' data='11 DEZ' local='Boteco Brazukis - Ribeirão Preto, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (4).jpg')} titulo='REVEILLON 2023' data='31 DEZ' local='ROYAL CLUB - Americana, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (5).jpg')} titulo='Especial Natiruts Acústico' data='13 JAN' local='A Fábrica de Extintores - Ribeirão Preto, SP' alt='show rafael portugal' />
      <Evento imagem={require('../../imgs/eventos/evento (6).jpg')} titulo='Especial Barão & Cazuza e Rock Nacional c/ Johnnie Rock' data='03 DEZ' local='Vila Dionísio - Ribeirão Preto - Ribeirão Preto, SP' alt='show rafael portugal' />
      </div>
    </section>
  );
}

export default CatalogoEventos_novidades;