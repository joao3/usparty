import "./style.css";
import styled from "styled-components";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

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
  margin-top: 150px;
  font-family: Roboto;
  font-size: 1.5rem;
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
const Cadastrar = () => {
  return (

      <Container>
        <h1 className="criar_conta">Criar conta</h1>
        <Input placeholder="Nome Completo" type="text" fieldId="nome" required/>
        <Input placeholder="Email" type="text" fieldId="email" required/>
        <Input placeholder="Confirme o Email" type="text" fieldId="email" required/>
        <Input placeholder="CPF" type="text" fieldId="cpf" required/>
        <Input placeholder="Telefone" type="text" fieldId="telefone" required/>
        <Input placeholder="Senha" type="text" fieldId="senha" required/>
        <Input placeholder="Confirme a Senha" type="text" fieldId="senha" required/>
        <div className="flex-container-1">
          <input className="checksize" type="checkbox" id="termosCheckbox"/>
          <label htmlFor="termosCheckbox" className="termos">Eu li e concordo com os <Link>termos de uso.</Link></label>
        </div>
        <Link to="/minhaconta">
          <Input type="submit" value="Cadastrar" />
        </Link>
      </Container>

  );  
};

export default Cadastrar;
