import "./style.css";
import CatalogoEventos from "../../components/CatalogoEventos";
import MenuCategorias from "../../components/MenuCategorias";
import Carrossel from "../../components/Carrossel";
import { Container } from "../../components/Container";

const Home = (props) => {
  const banners = [
    {
      imagem: require("../../imgs/banner.jpg"),
      alt: "Banner NuBeat edição de 1 ano 17 de dezembro",
      link: "/detalheevento",
      nome: "1",
    },
    {
      imagem: require("../../imgs/banner2.jpg"),
      alt: "Banner Santa Margarida Zé Neto e Cristiano 17 de dezembro",
      link: "/detalheevento",
      nome: "2",
    },
    {
      imagem: require("../../imgs/banner3.jpg"),
      alt: "Banner Bateu a Nave terceira edição 19 de novembro",
      link: "/detalheevento",
      nome: "3",
    },
  ];

  return (
    <Container>
      <MenuCategorias />
      <div className="carrosselContainer">
        <h2>Destaques</h2>
        <Carrossel banners={banners} />
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
