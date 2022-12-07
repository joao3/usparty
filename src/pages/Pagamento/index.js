import "./style.css";
import { useState } from "react";
import ItemNoPagamento from "../../components/ItemNoPagamento/indedx";

const Pagamento = () => {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho"))
  );

  return (
    <div className="Pagamento">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "32px",
          marginBottom: "32px",
          fontSize: "32pt",
        }}
      >
        Finalizar Compra
      </h1>

      {carrinho && carrinho.itens.length > 0 ? (
        <>
          <div className="itens">
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              Itens
            </h2>
            <hr />
            {carrinho &&
              carrinho.itens.map((item) => (
                <div key={item.evento.path}>
                  <ItemNoPagamento evento={item.evento} />
                  <hr />
                </div>
              ))}
          </div>

          <div className="total">
            Total: R$ {carrinho && carrinho.total.toFixed(2).replace(".", ",")}
          </div>

          <div className="formaPagamento">
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginTop: "64px",
              }}
            >
              Método de Pagamento
            </h2>

            <div className="radioPagamento">
              <input type="radio" id="pix" name="formaPagamento"></input>
              <input type="radio" id="boleto" name="formaPagamento"></input>
              <input type="radio" id="cartao" name="formaPagamento"></input>

              <label htmlFor="pix" className="box first">
                <div className="metodoText">
                  <span className="circle"></span>
                  <img
                    src="https://logospng.org/download/pix/logo-pix-icone-256.png"
                    style={{ maxHeight: "20px", marginRight: "16px" }}
                  ></img>
                  <span className="text">Pix</span>
                </div>
              </label>
              <label htmlFor="boleto" className="box second">
                <div className="metodoText">
                  <span className="circle"></span>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25350.png"
                    style={{ maxHeight: "20px", marginRight: "16px" }}
                  ></img>
                  <span className="text">Boleto</span>
                </div>
              </label>
              <label htmlFor="cartao" className="box third">
                <div className="metodoText">
                  <span className="circle"></span>
                  <img
                    src="https://cdn.icon-icons.com/icons2/510/PNG/512/card_icon-icons.com_50439.png"
                    style={{ maxHeight: "20px", marginRight: "16px" }}
                  ></img>
                  <span className="text">Cartão</span>
                </div>
              </label>
            </div>
          </div>
        </>
      ) : (
        <h2
          style={{
            fontWeight: "normal",
            textAlign: "center",
          }}
        >
          Seu carrinho está vazio
        </h2>
      )}
    </div>
  );
};

export default Pagamento;
