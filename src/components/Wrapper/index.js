import Footer from "../Footer";
import Header from "../Header";
import React from "react";
import { AuthProvider } from "./../../context/Auth";
import ScrollToTop from "../ScrollToTop";
import { Link, Route, Router, useLocation } from "react-router-dom";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Container } from "../Container";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function SimpleBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log({ location, pathnames });
  const formatToTitle = (value) => {
    return value.toLocaleLowerCase()[0].toUpperCase() + value.slice(1);
  };
  return (
    <Container sx={{ml: "10px"}}>
      <Box sx={{ml: "20px", mt: "20px", mb: "-100px"}}>
        <Breadcrumbs aria-label="Breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}>
          <Link color="inherit" to="/">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const formatedValue = formatToTitle(value);

            console.log({to});

            return last ? (
              <Typography color="textPrimary" key={to}>
                {formatedValue}
              </Typography>
            ) : (
              <Link color="inherit" to={to === '/evento' ? '/#CatalogoEventos' : to} key={to}>
                {formatedValue}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
    </Container>
  );
}
export function Wrapper(children) {
  return (
    <>
      <AuthProvider>
        <ScrollToTop>
          <Header />
          <SimpleBreadcrumbs />
          {children}
          <Footer />
        </ScrollToTop>
      </AuthProvider>
    </>
  );
}
