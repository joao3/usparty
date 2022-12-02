import './style.css';
import perfil from "./assets/jose.png";
import styled from 'styled-components';
import Input from '../../components/Input';

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


const MinhaConta = () => {

  return (
    <div className="MinhaConta">    
      <div className="frame-34">
      <div className="flex-container">
        <span className="ol-jos-augusto">Olá, José Augusto</span>
        <img className="perfil" src={perfil} />
        <div className="frame-25">
          <a href='/minhaconta' className="dados-pessoais">Dados pessoais</a>
        </div>
        <div className="frame-29">
          <a href='/minhaconta' className="meus-cartes">Meus Cartões</a>
        </div>
        <div className="frame-31">
          <a href='/meusingressos' className="meus-ingressos">Meus ingressos</a>
        </div>
        <div className="frame-32">
          <a href='/minhaconta' className="alterar-senha">Alterar Senha</a>
        </div>
      </div>

      <Container >
        <span className="editar-perfil">Editar perfil</span> <br/>
            <Input  defaultValue="José Augusto"  type="text" fieldId="name" label="Nome:" />
            <Input defaultValue="(16)98888-7777" type="text" fieldId="telefone" label="Telefone:"/>
            <Input defaultValue="joseaugusto@email.com" type="text" fieldId="email" label="Email:"/>
            <Input defaultValue="123.456.789-09" type="text" fieldId="cpf" label="CPF:"/>
           
            <div className="flex-container-1">
            <input className="checksize" type="checkbox" />
            <span className="desejo-receber-notif">
            Desejo receber notificações das nossas ofertas e novidades
            </span>
            </div>
            <Input type="submit" value="Atualizar Dados"/>
      </Container>

      </div>
    </div>
  );
}

export default MinhaConta;
