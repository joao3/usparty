import "./style.css";
import CatalogoEventos from "../../components/CatalogoEventos";
import MenuCategorias from "../../components/MenuCategorias";
import Carrossel from "../../components/Carrossel";
import { Container } from "../../components/Container";
import image from "../../imgs/eventos/evento (2).jpg"

const Home = (props) => {
  const banners = [
    {
      imagem: require("../../imgs/banner.jpg"),
      alt: "Banner NuBeat edição de 1 ano 17 de dezembro",
      path: "/evento/15",
      nome: "NuBeat edição de 1 ano",
    },
    {
      imagem: require("../../imgs/banner2.jpg"),
      alt: "Banner Santa Margarida Zé Neto e Cristiano 17 de dezembro",
      path: "/evento/16",    
      nome: " Santa Margarida Zé Neto e Cristiano",
    },
    {
      imagem: require("../../imgs/banner3.jpg"),
      alt: "Banner Bateu a Nave terceira edição 19 de novembro",
      path: "/evento/17",
      nome: "Bateu a Nave terceira edição",
    },
  ];

  return (
    <Container>
      <MenuCategorias />
      <div className="carrosselContainer">
        <h2>Destaques</h2>
        <Carrossel banners={banners}/>
      </div>
      <CatalogoEventos
        label="Mais Vendidos"
        eventos={props.eventos.slice(0, 6)}
      />
      <CatalogoEventos label="Novidades" eventos={props.eventos.slice(6, 12)} />
    </Container>
  );
};

export default Home;
