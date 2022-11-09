import './App.css';
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Evento from './Evento'

function App() {
  return (
    <div className="App">
      
      <header>
        
        <div id='logo'>USParty</div>

        <div id="searchBar">
          <input placeholder="Proucure um evento"/>
          <SearchIcon className='searchIcon'/>
        </div>

        <div id='actions'>
          <AccessibilityNewRoundedIcon className='accessibilityIcon' style={{ fontSize: 40 }}  />
          <LocalGroceryStoreOutlinedIcon className='carrinho' fontSize='medium' style={{ fontSize: 60 }} />
          <AccountCircleOutlinedIcon className='login' fontSize='large' style={{ fontSize: 60 }} />
        </div>

      </header>

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
