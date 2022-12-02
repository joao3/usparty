import './style.css';
//import perfil from "./assets/perfil.png";
import perfil from "./assets/jose.png";


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
      <div className="frame-24">
        <span className="editar-perfil">Editar perfil</span>
        <div className="flex-container-2">
        <span className="nome">Nome:</span>
        <input defaultValue="José Augusto" className="rectangle-36" type="text" />
        </div>
        <div className="flex-container-2">
        <span className="telefone">Telefone:</span>
        <input defaultValue="(16)98888-7777" className="rectangle-36" type="text" />
        </div>
        <div className="flex-container-2">
          <span className="email">Email:</span>
        <input defaultValue="joseaugusto@email.com" className="rectangle-36" type="text" />
        </div>
        <div className="flex-container-2">
          <span className="cpf">CPF:</span>
        <input defaultValue="123.456.789-09" className="rectangle-36" type="text" />
        </div>

        <div className="flex-container-1">
          <input className="checksize" type="checkbox" />
          <span className="desejo-receber-notif">
            Desejo receber notificações das nossas ofertas e novidades
          </span>
        </div>
        <a href='/minhaconta' className="alterar-dados-1">Alterar Dados</a>
      </div>
    </div>
    </div>
  );
}

export default MinhaConta;
