import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Typography, Grid, Container, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

function Footer() {
  const [state, setState] = useState({
    mobileView: false,
  });

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 960
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const contentToDisplay = () => {
    return (
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography color="white" align="center" variant="body2">
          Robinson Field <br />
          Ixworth Rd <br />
          Thurston <br />
          Bury St Edmunds <br />
          IP31 3QE <br />
          <br />
          01359 231772
          <br />
          <Link
            color="inherit"
            href={"mailto:thurstonrugbyclub@live.co.uk"}
            underline="hover"
          >
            thurstonrugbyclub@live.co.uk
          </Link>
        </Typography>
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            href="https://www.facebook.com/Thurston-RUFC-132633373430087"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon
              sx={{
                color: "white",
                fontSize: "200%",
              }}
            />
          </Button>
          <Button
            href="https://www.instagram.com/thurstonrangers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              className="InstagramIcon"
              sx={{
                color: "white",
                fontSize: "200%",
              }}
            />
          </Button>
          <Button
            href="https://twitter.com/thurstonrangers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              className="TwitterIcon"
              sx={{
                color: "white",
                fontSize: "200%",
              }}
            />
          </Button>
        </Box>
        <br />
      </Box>
    );
  };

  const displayMobile = () => {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          backgroundColor: "#181818",
        }}
      >
        {contentToDisplay()}
      </Box>
    );
  };

  const displayDesktop = () => {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#181818",
          }}
        >
          {contentToDisplay()}
        </Box>
      </Box>
    );
  };

  const { mobileView } = state;

  return <>{mobileView ? displayMobile() : displayDesktop()}</>;
}

export default Footer;
