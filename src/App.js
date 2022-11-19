import './App.css';
import Header from './components/Header';

import Evento from './Evento'

function App() {
  return (
    <div className="App">
      <Header />
      

      <section id='maisVendidos'>
        <h1>Mais Vendidos</h1>

        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento className='meio' imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento className='meio' imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
      </section>
      

      <section id='novidades'>
        <h1>Novidades</h1>

        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento className='meio' imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento className='meio' imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
        <Evento imagem= {require('./imgs/rafael.jpg')} titulo='Rafael Portugal' data ='15 OUT' local='Teatro Multiplan - Rio de Janeiro, RJ' alt='show rafael portugal' />
      </section>

    </div>
  );
}

export default App;
