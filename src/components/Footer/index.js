import React from "react";
import './style.css';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>

      <Container>
        <Row>
            <Column>
        <h1>
            <div id='logo'>USParty</div>
        </h1>
            </Column>
            <Column>
            <Heading>Sobre nós</Heading>
            <FooterLink href="#">Quem somos</FooterLink>
            <FooterLink href="#">Politica de privacidade</FooterLink>          
            </Column>
        
          <Column>
            <Heading>Suporte</Heading>
            <FooterLink href="#">Fale Conosco</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Social</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "1px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "1px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;