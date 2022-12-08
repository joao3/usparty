import './style.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 767px) {
    padding-top: 60px;
  }

  padding-top: 110px;
`;

const Concluido = () => {
  return (
    <Container>
      <div className="Concluido">
        <h1 style={{ marginTop: "32px" }}>Compra finalizada com sucesso</h1>
  
        <CheckCircleOutlineIcon style={{ color: "#52E026", fontSize: "300px", display: "inline-block" }} />
  
        <Link id='link' to='/'>
          <p style={{ marginTop: "32px" }}>Voltar para a página inicial</p>
        </Link>
      </div>
    </Container>
  );
}

export default Concluido;