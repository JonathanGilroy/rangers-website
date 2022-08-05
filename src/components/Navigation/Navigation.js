import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navigation.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    useScrollTrigger,
    InputBase,
    Grid,
    Container,
    Button,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { fontSize } from "@mui/system";
import ReactImage from 'react-image-wrapper';

const drawerWidth = 240;

function TemporaryDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
};

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Navigation() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="AppBar"
                sx={{
                    backgroundColor: "#FFFFFF",
                }}>
                <Container>
                    <Toolbar>
                        <ReactImage className="Logo" src="/favicon.ico" alt="Rangers Logo" height={80}
                            keepAspectRatio={true} />
                        {/* <img className="Logo" src="/favicon.ico" alt="Rangers Logo" style={{
                            marginRight: 2,
                            maxHeight: 70,
                            flexGrow: "0",
                            cursor: "auto"
                        }} /> */}
                        <Grid container>
                            <Grid item xs={11} md={8} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                <Typography variant="h4" sx={{
                                    color: "#000000",
                                    marginLeft: 1,
                                }}>
                                    Thurston Rangers RUFC
                                </Typography>
                            </Grid>
                            <Grid item xs={11} md={8} sx={{ display: { xs: 'flex', sm: 'none' } }}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h4" sx={{
                                        color: "#000000",
                                        marginLeft: 1,
                                    }}>
                                        Thurston Rangers
                                    </Typography>
                                </ThemeProvider>
                            </Grid>
                            <Grid item xs={1} container
                                sx={{ display: { xs: 'flex', md: 'none' } }}
                                style={{
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                <MenuIcon sx={{ color: "black" }} />
                            </Grid>
                            <Grid item md={4} container justifyContent="flex-end"
                                sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Button href="https://www.facebook.com/Thurston-RUFC-132633373430087" target="_blank" rel="noopener noreferrer"
                                    sx={{
                                        "& :hover": { color: "black" }
                                    }}>
                                    <FacebookIcon sx={{
                                        color: "black",
                                        fontSize: "200%",
                                    }} />
                                </Button>
                                <Button href="https://www.instagram.com/thurstonrangers/" target="_blank" rel="noopener noreferrer"
                                    sx={{
                                        "& :hover": { color: "black" }
                                    }}>
                                    <InstagramIcon
                                        className="InstagramIcon"
                                        sx={{
                                            color: "black",
                                            fontSize: "200%",
                                            // "& :hover": { color: "black" }
                                        }} />
                                </Button>
                                <Button href="https://twitter.com/thurstonrangers" target="_blank" rel="noopener noreferrer"
                                    sx={{
                                        "& :hover": { color: "black" }
                                    }}>
                                    <TwitterIcon
                                        className="TwitterIcon"
                                        sx={{
                                            color: "black",
                                            fontSize: "200%",
                                            // "& :hover": { color: "black" }
                                        }} />
                                </Button>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Typography sx={{ color: "black", marginLeft: 1 }}>
                                    Home
                                </Typography>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Typography sx={{ color: "black" }}>
                                    Fixtures
                                </Typography>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Typography sx={{ color: "black" }}>
                                    News
                                </Typography>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Typography sx={{ color: "black" }}>
                                    Team
                                </Typography>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Typography sx={{ color: "black" }}>
                                    Contact
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navigation;