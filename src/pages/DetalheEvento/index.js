import "./style.css";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 767px) {
    padding-top: 60px;
  }

  padding-top: 110px;
`;


const DetalheEvento = (props) => {
  const handleAdicionar = () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));

    if (!carrinho) {
      carrinho = { total: 0.0, itens: [] };
    }

    if (
      carrinho.itens.length == 0 ||
      !carrinho.itens.find((e) => e.evento.path == props.evento.path)
    ) {
      carrinho.itens.push({
        evento: props.evento,
        quantidade: 1,
      });
      carrinho.total += props.evento.valor;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

  return (
    <Container>
      <div className="DetalheEvento">
        <div className="up">
          <div id="imgContainer">
            <img src={props.evento.imagem} alt={props.evento.alt}></img>
          </div>
  
          <div>
            <h1
              style={{
                maxWidth: "385px",
                fontSize: "2rem",
                fontWeight: "normal",
              }}
            >
              {props.evento.titulo}
            </h1>
  
            <h2
              style={{
                maxWidth: "500px",
                marginTop: "16px",
                fontSize: "1.125rem",
                fontWeight: "normal",
              }}
            >
              <CalendarTodayIcon style={{ fontSize: "14pt" }} />{" "}
              {props.evento.data_inteira}
            </h2>
            <h2
              style={{
                maxWidth: "500px",
                marginTop: "16px",
                fontSize: "1.125rem",
                fontWeight: "normal",
              }}
            >
              <LocationOnIcon style={{ fontSize: "14pt" }} /> {props.evento.local}
            </h2>
  
            <h2 style={{ marginTop: "16px", fontSize: "28pt" }}>
              R$ {props.evento.valor.toFixed(2).replace(".", ",")}
            </h2>
  
            <Link className="link" to="/carrinho">
              <div
                onClick={handleAdicionar}
                style={{
                  textAlign: "center",
                  padding: " 20px",
                  borderRadius: "15px",
                  marginBottom: " 0",
                  marginTop: " 24px",
                  background:
                    " linear-gradient(90.83deg, #6801AB 6.97%, #B10DC7 52.42%, #BD0ECC 97.88%)",
                  borderColor: " transparent",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "32px",
                  cursor: "pointer",
                }}
              >
                <LocalGroceryStoreOutlinedIcon /> Adicionar
              </div>
            </Link>
          </div>
        </div>
  
        <div id="descricao">
          <h2>Descri????o do Evento</h2>
          <p>
            Se voc?? acha que j?? riu de tudo, vai se surpreender com Rafael
            Portugal. O ator do Porta dos Fundos apresenta no seu espet??culo
            in??dito ???Eu comigo mesmo???, a rapidez do stand up aliada ?? criatividade
            na composi????o de um personagem inusitado em um show de humor e com??dia
            no ritmo certo que vai entreter, contagiar e fazer o p??blico se
            divertir.
          </p>
  
          <p>
            Rafael conta um pouco das hist??rias mais engra??adas que aconteceram em
            sua vida, como por exemplo quando ele se alistou no ex??rcito e n??o
            tinha nenhuma no????o do que iria acontecer l?? dentro; de quando era
            adolescente e passava o dia na casa de praia. E como morador da zona
            oeste do Rio de Janeiro n??o podiam faltar as hist??rias que aconteciam
            dentro do trem. Essas e outras hist??rias contadas com muita
            irrever??ncia e descontra????o far??o o p??blico se identificar e morrer de
            rir.
          </p>
  
          <p>
            O ator Rafael Portugal possui uma conceituada carreira no teatro, TV e
            internet. Eleito pelo Risadaria, um dos maiores festivais de Humor do
            mundo, como o Melhor Ator de Com??dia de 2017. Na TV, Faz parte do time
            de humoristas que comp??e o programa A Culpa ?? do Cabral, no canal
            Comedy Central, e recentemente liderou o CAT; quadro humor??stico de
            grande sucesso do Big Brother Brasil na TV Globo. Participou do ???A?? eu
            vi vantagem???, com Samantha Schmutz. Na internet, criou o canal IXI,
            com mais de 1 milh??o de inscritos e mais de 30 milh??es de
            visualiza????es, Foi integrante do canal Parafernalha, no youtube e
            atualmente ?? integrante do Porta dos Fundos, o maior canal de humor, e
            eleito o canal mais influente do mundo em 2016, com mais de 17 milh??es
            de inscritos, contabilizando mais de 6 bilh??es de visualiza????es. Em
            junho de 2016, estreou no cinema com o filme ???Contrato Vital??cio???, do
            Porta dos Fundos e dublou o filme Festa da Salsicha, em 2019 esteve
            presente no filme ???Chorar de Rir???, com Leandro Hassum e grande elenco.
            Al??m de protagonizar a s??rie do ???Porta dos Fundos??? chamada ???Borges
            Importadora??? e ??????Homens?????? e em 2022 estrear?? seu primeiro filme como
            protagonista juntamente com Cacau Prot??sio chamado ??????Juntos e
            Enrolados??????
          </p>
  
          <p>
            <strong>
              * obrigat??ria a apresenta????o de comprovante de vacina????o contra a
              covid-19, como medida de interesse sanit??rio, estabelecida pelo
              decreto rio n?? 49894 de 1?? de dezembro de 2021.
            </strong>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DetalheEvento;
