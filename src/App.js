import logo from './rangers-logo.jpg';
import './App.css';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>Blood, sweat and beers coming soon!</p>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={1}>
            <Button href="https://www.facebook.com/Thurston-RUFC-132633373430087" target="_blank" rel="noopener noreferrer"
              sx={{
                "& :hover": { color: "black" }
              }}>
              <FacebookIcon sx={{
                color: "black",
                fontSize: "200%",
              }} />
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button href="https://www.instagram.com/thurstonrangers/" target="_blank" rel="noopener noreferrer"
              sx={{
                "& :hover": { color: "black" }
              }}>
              <InstagramIcon
                className="InstagramIcon"
                sx={{
                  color: "black",
                  fontSize: "200%",
                }} />
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button href="https://twitter.com/thurstonrangers" target="_blank" rel="noopener noreferrer"
              sx={{
                "& :hover": { color: "black" }
              }}>
              <TwitterIcon
                className="TwitterIcon"
                sx={{
                  color: "black",
                  fontSize: "200%",
                }} />
            </Button>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
