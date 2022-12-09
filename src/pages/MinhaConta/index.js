import "./style.css";
import perfil from "./assets/jose.png";
import styled from "styled-components";
import Input from "../../components/Input";
import { Link, Navigate } from "react-router-dom";
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
  box-shadow: 10px 10px 10px -10px rgba(0, 0, 0, 1);

  input[type="submit"] {
    padding: 20px;
    margin-bottom: 0;
    margin-top: 24px;
    background: linear-gradient(
      90.83deg,
      #6801ab 6.97%,
      #b10dc7 52.42%,
      #bd0ecc 97.88%
    );
    border-color: transparent;
    color: white;
    font-weight: 700;
    font-size: 2rem;
    cursor: pointer;
  }
`;
const Container2 = styled.form`
  max-width: 350px;
  min-width: 250px;
  justify-content: center;
  input[type="profileoption"] {
    text-align: center;
    padding: 20px;
    margin-bottom: 0;
    margin-top: 24px;
    background: linear-gradient(
      90.83deg,
      #6801ab 6.97%,
      #b10dc7 52.42%,
      #bd0ecc 97.88%
    );
    border-color: transparent;
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0.6;
    pointer-events: none;
  }
`;
const MinhaConta = () => {
  const auth = useAuth();

  if (!auth.signed) return <Navigate to="/login" />;

  return (
    <div className="MinhaConta">
      <div className="frame">
        <div className="botoes_nome_foto">  
          <span className="nome_usuario">Olá, José Augusto</span>
          <img className="perfil" src={perfil} alt="Foto de perfil"/>
          <Container2>
            <Link to="/minhaconta">
              <Input readOnly type="profileoption" value="Dados pessoais" />
            </Link>
            <Link to="/minhaconta">
            <Input readOnly type="profileoption" value="Meus Cartões" />
            </Link>
            <Link to="/minhaconta">
              <Input readOnly type="profileoption" value="Meus ingressos" />
            </Link>
            <Link to="/minhaconta">
            <Input readOnly type="profileoption" value="Alterar Senha" />
            </Link>
          </Container2>
        </div>
        <Container>
          <span className="editar-perfil">Editar Perfil</span> <br />
          <Input
            readOnly
            defaultValue="José Augusto"
            type="text"
            fieldId="name"
            label="Nome:"
          />
          <Input
            readOnly
            defaultValue="(16)98888-7777"
            type="text"
            fieldId="telefone"
            label="Telefone:"
          />
          <Input
            readOnly
            defaultValue="joseaugusto@email.com"
            type="text"
            fieldId="email"
            label="Email:"
          />
          <Input
            readOnly
            defaultValue="123.456.789-09"
            type="text"
            fieldId="cpf"
            label="CPF:"
          />
          <div className="flex-container-1">
            <input className="checksize" type="checkbox" id="notificacoes" checked readOnly/>
            <label className="desejo-receber-notif" htmlFor="notificacoes">
              Desejo receber notificações das nossas ofertas e novidades
            </label>
          </div>
          <Input type="submit" value="Atualizar Dados" disabled/>
        </Container>
      </div>
    </div>
  );
};

export default MinhaConta;
