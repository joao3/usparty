import './App.css';
import Header from './components/Header';
import CatalogoEventos from './components/CatalogoEventos';
import MenuCategorias from './components/MenuCategorias';

const App = () => {
  return (
    <div className="App">
      <Header />
      
      <MenuCategorias />

      <CatalogoEventos label="Mais Vendidos"/>
      <CatalogoEventos label="Novidades"/>

    </div>
  );
}

export default App;
