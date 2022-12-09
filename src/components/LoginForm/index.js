import styled from "styled-components";
import Input from "../Input";
import { useAuth } from "../../context/Auth";

const Container = styled.form`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;

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
    font-size: 32px;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    padding: 0 32px;
    box-sizing: border-box;
  }
`;

const To_create_acount = styled.div`
  font-size: 2rem;
`;

const lock = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
  </svg>
);
const email = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
  </svg>
);

const LoginForm = (props) => {
  let auth = useAuth();

  function handleSubmit(event) {
    auth.Login({ email: "exemplo@email.com" });
    event.preventDefault();
  }

  return (
    <Container onSubmit={(event) => handleSubmit(event)}>
      <Input
        icon={email}
        placeholder="exemplo@email.com"
        type="text"
        fieldId="login-name"
        label="Email"
      />
      <Input
        icon={lock}
        placeholder="•••••"
        type="password"
        fieldId="login-password"
        label="Senha"
      />
      <Input type="submit" value="Enviar" />

      <To_create_acount>
        <span>Não tem conta? </span>
        <a href="/cadastrar">Cadastre-se.</a>
      </To_create_acount>
    
    </Container>
  );
};

export default LoginForm;
