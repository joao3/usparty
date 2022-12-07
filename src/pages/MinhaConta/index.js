import "./style.css";
import perfil from "./assets/jose.png";
import styled from "styled-components";
import Input from "../../components/Input";
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from "../../context/Auth";

const Container = styled.form`
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
    height: 95%;
    background-color: var(--light);
    border-radius: 15px;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    align-items: stretch;
    margin-top: 6px;
    margin-bottom: 1px;
    padding-bottom: 60px;
    padding-top: 6px;
    padding-left: 46px;
    padding-right: 46px;
    font-family: Roboto;
    font-size: 2.5rem;
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
const Container2 = styled.form`
    max-width: 400px;
    margin: 0 auto;

  
    input[type=profileoption] {
      text-align: center;
      padding: 20px;
      margin-bottom: 0;
      margin-top: 24px;
      background: linear-gradient(90.83deg, #6801AB 6.97%, #B10DC7 52.42%, #BD0ECC 97.88%);
      border-color: transparent;
      color: white;
      font-weight: 700;
      font-size: 32px;
      cursor: pointer;
      opacity: 0.6;
      pointer-events: none;
  }
`;
const MinhaConta = () => {
  const auth = useAuth()

  if(!auth.signed) return <Navigate to="/login"/>

  return (
    <div className="MinhaConta">
      <div className="frame">
        <div className="botoes_nome_foto">
          <span className="nome_usuario">Olá, José Augusto</span>
          <img className="perfil" src={perfil} />
          <Container2>
          <Link to='/minhaconta'><Input type="profileoption" value="Dados pessoais" /></Link>
            <Input type="profileoption" value="Meus Cartões" />
            <Link to='/meusingressos'><Input type="profileoption" value="Meus ingressos" /></Link>
            <Input type="profileoption" value="Alterar Senha" />
          </Container2>
        </div>
        <Container>
          <span className="editar-perfil">Editar Perfil</span> <br />
          <Input
            defaultValue="José Augusto"
            type="text"
            fieldId="name"
            label="Nome:"
          />
          <Input
            defaultValue="(16)98888-7777"
            type="text"
            fieldId="telefone"
            label="Telefone:"
          />
          <Input
            defaultValue="joseaugusto@email.com"
            type="text"
            fieldId="email"
            label="Email:"
          />
          <Input
            defaultValue="123.456.789-09"
            type="text"
            fieldId="cpf"
            label="CPF:"
          />
          <div className="flex-container-1">
            <input className="checksize" type="checkbox" />
            <span className="desejo-receber-notif">
              Desejo receber notificações das nossas ofertas e novidades
            </span>
          </div>
          <Input type="submit" value="Atualizar Dados" />
        </Container>
      </div>
    </div>
  );
};

export default MinhaConta;
