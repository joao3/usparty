import React from "react";
import "./style.css";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footerbox">
      <Container>
        <Row>
          <Column style={{ marginBottom: "16px" }}>
            <Link
              aria-label="Ir pra home"
              className="bio-rhyme"
              style={{
                color: "white",
                fontSize: "30pt",
                textDecoration: "none",
              }}
            >
              USParty
            </Link>
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
                <span style={{ marginLeft: "1px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
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
