import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.div`
  padding: 80px 60px;
  background: var(--dark-purple);
  position: absolute;
  bottom: 1;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  padding: 0 64px;
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Column = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
`;

export const Row = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 1.125rem;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`;

export const Logo = styled(Link)`
  font-size: 2.5rem;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 16px;
`;

export const Heading = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
