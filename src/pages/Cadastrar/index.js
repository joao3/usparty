import './style.css';
import styled from 'styled-components';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

const Container = styled.form`
max-width: 600px;
margin: 0 auto;
text-align: left;
height: 95%;
background-color: var(--light);
border-radius: 15px;
flex-direction: column;
flex-basis: 61%;
justify-content: space-evenly;
align-self: center;
align-items: stretch;
margin-top: 30px;
margin-bottom: 1px;
padding-bottom: 60px;
padding-top: 6px;
padding-left: 46px;
padding-right: 46px;
font-family: Roboto;
font-size: 1.5rem;
line-height: 48px;
display: flex;
box-shadow: 10px 10px 10px -10px rgba(0,0,0,1);

input[type=submit] {
        padding: 20px;
        margin-bottom: 0;
        margin-top: 24px;
        background: linear-gradient(90.83deg, #6801AB 6.97%, #B10DC7 52.42%, #BD0ECC 97.88%);
        border-color: transparent;
        color: white;
        font-weight: 700;
        font-size: 32px;
        cursor: pointer;
    }
`;
const Cadastro = styled.form`

  }`;
const Cadastrar = () => {

  return (
    <div className="Cadastro">
              
        
        <Container>
            <br/>
            <h1>Cadastrar nova conta</h1>
            <br/>
            <Input  placeholder="Nome Completo" type="text" fieldId="nome" />
            <Input  placeholder="Email" type="text" fieldId="email" />
            <Input  placeholder="Confirme o Email" type="text" fieldId="email" />
            <Input  placeholder="CPF" type="text" fieldId="cpf" />
            <Input  placeholder="Telefone" type="text" fieldId="telefone" />
            <Input  placeholder="Senha" type="text" fieldId="senha" />
            <Input  placeholder="Confirme a Senha" type="text" fieldId="senha" />
            <div className="flex-container-1">
            <input className="checksize" type="checkbox" />
            <span className="termos">
            Eu li e concordo com os </span><a href='/'>termos de uso.</a>
            </div>
            <Link to='/minhaconta'><Input type="submit" value="Cadastrar"/></Link>
        </Container>
    </div>
  );
}

export default Cadastrar;
