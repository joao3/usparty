import './App.css';
import Header from './components/Header';
import CatalogoEventos from './components/CatalogoEventos';

const App = () => {
  return (
    <div className="App">
      <Header />
      

      <CatalogoEventos label="Mais Vendidos"/>
      <CatalogoEventos label="Novidades"/>

    </div>
  );
}

export default App;
