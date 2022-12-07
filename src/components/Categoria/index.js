import "./style.css";

const Categoria = (props) => {
  return (
    <div className="Categoria">
      <img src={props.imagem} alt={props.nome}></img>
      <h1>{props.nome}</h1>
    </div>
  );
};

export default Categoria;
