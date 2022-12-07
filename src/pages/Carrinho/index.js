import ItemNoCarrinho from '../../components/ItemNoCarrinho';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Carrinho = (props) => {
  const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem("carrinho")));

  const removerEvento = (evento) => {
    let carrinhoCopia = JSON.parse(JSON.stringify(carrinho))
    if (carrinhoCopia) {

      const index = carrinhoCopia.itens.indexOf(carrinhoCopia.itens.find(e => e.evento.path == evento.path));
      if (index > -1) {
        carrinhoCopia.total -= carrinho.itens[index].quantidade * carrinho.itens[index].evento.valor;
        carrinhoCopia.itens.splice(index, 1);
      }
    }

    setCarrinho(carrinhoCopia);

    localStorage.setItem("carrinho", JSON.stringify(carrinhoCopia));

  }

  const aumentarQuantidade = (evento) => {
    let carrinhoCopia = JSON.parse(JSON.stringify(carrinho))

    if (carrinhoCopia) {

      const index = carrinhoCopia.itens.indexOf(carrinhoCopia.itens.find(e => e.evento.path == evento.path));
      if (index > -1) {
        carrinhoCopia.itens[index].quantidade++;
        carrinhoCopia.total += carrinho.itens[index].evento.valor;
      }
    }

    setCarrinho(carrinhoCopia);

    localStorage.setItem("carrinho", JSON.stringify(carrinhoCopia));
  }

  const diminuirQuantidade = (evento) => {
    let carrinhoCopia = JSON.parse(JSON.stringify(carrinho))

    if (carrinhoCopia) {

      const index = carrinhoCopia.itens.indexOf(carrinhoCopia.itens.find(e => e.evento.path == evento.path));
      if (index > -1) {
        carrinhoCopia.itens[index].quantidade--;
        carrinhoCopia.total -= carrinho.itens[index].evento.valor;
      }
    }

    setCarrinho(carrinhoCopia);

    localStorage.setItem("carrinho", JSON.stringify(carrinhoCopia));
  }

  return (
    <div className="Carrinho">
      <h1 style={{
        "textAlign": "center",
        "fontWeight": "bold",
        "marginTop": "32px",
        "marginBottom": "32px",
        "fontSize": "32pt"
      }}>Carrinho</h1>

      {(carrinho && carrinho.itens.length > 0) ? <>

        <div className='itens'>
          <h2 style={{
              "fontSize": "28px",
              "fontWeight": "bold"
              
          }}>
            Itens
          </h2>

          <hr />
          {carrinho && carrinho.itens.map(item =>
            <div key={item.evento.path}>
              <ItemNoCarrinho
                remover={removerEvento}
                aumentar={aumentarQuantidade}
                diminuir={diminuirQuantidade}
                evento={item.evento} />
              <hr />
            </div>)}
        </div>

        <div className='bottom'>
          <div className='total'>
            Total: R$ {carrinho && carrinho.total.toFixed(2).replace('.', ',')}
          </div>


          <Link to='/pagamento' className='link'>
            <div className='botao' style={{
              "width": "250px",
              "height": "80px",
              "textAlign": "center",
              "padding": " 20px",
              "borderRadius": "15px",
              "marginBottom": " 0",
              "marginTop": " 24px",
              "background": " linear-gradient(90.83deg, #6801AB 6.97%, #B10DC7 52.42%, #BD0ECC 97.88%)",
              "borderColor": " transparent",
              "color": "white",
              "fontWeight": "700",
              "fontSize": "32px",
              "cursor": "pointer",
            }}>
              Continuar
            </div>
          </Link>
        </div></> : <h2 style={{
          "fontWeight": "normal",
          "textAlign": "center",

        }}>Seu carrinho está vazio</h2>}
    </div>
  );
}

export default Carrinho;
