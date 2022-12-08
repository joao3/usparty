import "./style.css";
import { useState } from "react";
import ItemNoPagamento from "../../components/ItemNoPagamento/indedx";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PixIcon from '@mui/icons-material/Pix';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 767px) {
    padding-top: 60px;
  }

  padding-top: 110px;
`;

const Pagamento = () => {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("carrinho"))
  );

  return (
    <Container>
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

              <div className="content">
                <div className="radioPagamento">
                  <input type="radio" id="pix" name="formaPagamento"></input>
                  <input type="radio" id="boleto" name="formaPagamento"></input>
                  <input type="radio" id="cartao" name="formaPagamento"></input>

                  <label htmlFor="pix" className="box first">
                    <div className="metodoText">
                      <span className="circle"></span>
                      <PixIcon style={{ "marginRight": "8px" }} />
                      <span className="text">Pix</span>
                    </div>
                  </label>
                  <label htmlFor="boleto" className="box second">
                    <div className="metodoText">
                      <span className="circle"></span>
                      <ReceiptLongIcon style={{ "marginRight": "8px" }} />
                      <span className="text">Boleto</span>
                    </div>
                  </label>
                  <label htmlFor="cartao" className="box third">
                    <div className="metodoText">
                      <span className="circle"></span>
                      <CreditCardIcon style={{ "marginRight": "8px" }} />
                      <span className="text">Cartão</span>
                    </div>
                  </label>


                </div>
                <div className="total">
                  Total: R$ {carrinho && carrinho.total.toFixed(2).replace(".", ",")}
                </div>

              </div>

            </div>
            <Link className="link" to="/concluido">
              <div onClick={() => localStorage.setItem("carrinho", JSON.stringify({ total: 0.0, itens: [] }))}
                style={{
                  textAlign: "center",
                  padding: " 20px",
                  borderRadius: "15px",
                  marginTop: " 24px",
                  background:
                    " linear-gradient(90.83deg, #6801AB 6.97%, #B10DC7 52.42%, #BD0ECC 97.88%)",
                  borderColor: " transparent",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "32px",
                  cursor: "pointer",
                  width: "300px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                Finalizar
              </div>
            </Link>
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
    </Container>
  );
};

export default Pagamento;
