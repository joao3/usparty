import './style.css';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const DetalheEvento = (props) => {

  return (
    <div className='DetalheEvento'>
      <div className="up">

        <div id='imgContainer'>
          <img src={props.evento.imagem} alt={props.evento.alt_imagem} ></img>
        </div>



        <div>
          <h1 style={{"maxWidth": "385px",  "fontSize": "26pt", "fontWeight": "normal" }}>{props.evento.titulo}</h1>

          <h2 style={{ "maxWidth": "500px", "marginTop": "16px", "fontSize": "14pt", "fontWeight": "normal" }}><CalendarTodayIcon style={{ "fontSize": "14pt" }} /> {props.evento.data_inteira}</h2>
          <h2 style={{ "maxWidth": "500px", "marginTop": "16px", "fontSize": "14pt", "fontWeight": "normal" }}><LocationOnIcon style={{ "fontSize": "14pt" }} /> {props.evento.local}</h2>

          <h2 style={{ "marginTop": "16px", "fontSize": "28pt" }}>R$ {props.evento.valor.toFixed(2).replace('.', ',')}</h2>


          <div style={{
            "textAlign": "center",
            "padding": " 20px",
            "borderRadius": "15px",
            "marginBottom": " 0",
            "marginTop": " 24px",
            "background": " linear-gradient(90.83deg, #6801AB 6.97%, #B10DC7 52.42%, #BD0ECC 97.88%)",
            "borderColor": " transparent",
            "color": "white",
            "fontWeight": "700",
            "fontSize": "32px",
            "cursor": "pointer",
          }}>
            <LocalGroceryStoreOutlinedIcon /> Adicionar
          </div>
        </div>


      </div>

      <div id='descricao'>
        <h2 style={{ "fontSize": "24pt" }}>Descrição do Evento</h2>
        <p>
          Se você acha que já riu de tudo, vai se surpreender com Rafael Portugal. O ator do Porta dos Fundos apresenta no seu espetáculo inédito ‘Eu comigo mesmo’, a rapidez do stand up aliada à criatividade na composição de um personagem inusitado em um show de humor e comédia no ritmo certo que vai entreter, contagiar e fazer o público se divertir.
        </p>

        <p>
          Rafael conta um pouco das histórias mais engraçadas que aconteceram em sua vida, como por exemplo quando ele se alistou no exército e não tinha nenhuma noção do que iria acontecer lá dentro; de quando era adolescente e passava o dia na casa de praia. E como morador da zona oeste do Rio de Janeiro não podiam faltar as histórias que aconteciam dentro do trem. Essas e outras histórias contadas com muita irreverência e descontração farão o público se identificar e morrer de rir.
        </p>

        <p>
          O ator Rafael Portugal possui uma conceituada carreira no teatro, TV e internet. Eleito pelo Risadaria, um dos maiores festivais de Humor do mundo, como o Melhor Ator de Comédia de 2017. Na TV, Faz parte do time de humoristas que compõe o programa A Culpa é do Cabral, no canal Comedy Central, e recentemente liderou o CAT; quadro humorístico de grande sucesso do Big Brother Brasil na TV Globo. Participou do ‘Aí eu vi vantagem’, com Samantha Schmutz. Na internet, criou o canal IXI, com mais de 1 milhão de inscritos e mais de 30 milhões de visualizações, Foi integrante do canal Parafernalha, no youtube e atualmente é integrante do Porta dos Fundos, o maior canal de humor, e eleito o canal mais influente do mundo em 2016, com mais de 17 milhões de inscritos, contabilizando mais de 6 bilhões de visualizações. Em junho de 2016, estreou no cinema com o filme ‘Contrato Vitalício’, do Porta dos Fundos e dublou o filme Festa da Salsicha, em 2019 esteve presente no filme “Chorar de Rir”, com Leandro Hassum e grande elenco. Além de protagonizar a série do “Porta dos Fundos” chamada “Borges Importadora” e ‘’Homens’’ e em 2022 estreará seu primeiro filme como protagonista juntamente com Cacau Protásio chamado ‘’Juntos e Enrolados’’
        </p>

        <p><strong>* OBRIGATÓRIA A APRESENTAÇÃO DE COMPROVANTE DE VACINAÇÃO CONTRA A COVID-19, COMO MEDIDA DE INTERESSE SANITÁRIO, ESTABELECIDA PELO DECRETO RIO Nº 49894 DE 1º DE DEZEMBRO DE 2021.</strong></p>
      </div>
    </div>
  );
}

export default DetalheEvento;
