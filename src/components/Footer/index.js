import React from "react";
import "./style.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Logo,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box className="footerbox">
      <Container>
        <Logo
          aria-label="Ir pra home"
          className="bio-rhyme"
        >
          USParty
        </Logo>
        <Row>
          <Column>
            <Heading>Sobre nós</Heading>
            <FooterLink>Quem somos</FooterLink>
            <FooterLink>Politica de privacidade</FooterLink>
          </Column>
          <Column>
            <Heading>Suporte</Heading>
            <FooterLink >Fale Conosco</FooterLink>
            <FooterLink >FAQ</FooterLink>
          </Column>
          <Column>
            <Heading>Social</Heading>
            <FooterLink >
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "1px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "1px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
