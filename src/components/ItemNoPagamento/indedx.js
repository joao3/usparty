import "./style.css";
import Input from "../Input";

const person = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-person"
    viewBox="0 0 16 16"
  >
    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
  </svg>
);
const idIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-person-vcard"
    viewBox="0 0 16 16"
  >
    <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
  </svg>
);

const ItemNoPagamento = (props) => {
  return (
    <div className="ItemNoPagamento">
      <div className="imagem">
        <img src={props.evento.imagem} alt={props.evento.alt}></img>
      </div>

      <div className="info">
        <h2 style={{ fontSize: "22px", maxWidth: "450px" }}>
          {props.evento.titulo}
        </h2>

        <div className="entradas" style={{ marginTop: "8px" }}>
          <Input
            icon={person}
            placeholder="Nome do Titular *"
            type="text"
            fieldId="titular"
          />
          <Input
            icon={idIcon}
            placeholder="Documento do Titular *"
            type="text"
            fieldId="titular"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemNoPagamento;
