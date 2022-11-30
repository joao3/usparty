import "./App.css";
import Header from "./components/Header";
import CatalogoEventos from "./components/CatalogoEventos";
import MenuCategorias from "./components/MenuCategorias";
import Carrossel from "./components/Carrossel";
import Footer from "./components/Footer";

const App = () => {
  const banners = [
    {
      imagem: require("./imgs/banner.jpg"),
      nome: "1",
    },
    {
      imagem: require("./imgs/banner2.jpg"),
      nome: "2",
    },
    {
      imagem: require("./imgs/banner3.jpg"),
      nome: "3",
    },
  ];

  return (
    <div className="App">
      <Header />
      <MenuCategorias />
      <div className="carrosselContainer">
        <h2>Destaques</h2>''
        <Carrossel banners={banners} />
      </div>
      <CatalogoEventos label="Mais Vendidos" />
      <CatalogoEventos label="Novidades" />
      {/* gambiarra espaçamento */}
      <br /> <br /> <br /> <br />
      <Footer />
    </div>
  );
};

export default App;
