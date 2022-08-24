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
    Menu,
    MenuItem,
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
    const [mobileOpen, setMobileOpen] = useState(false);
};

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Navigation() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [anchorElAbout, setAnchorElAbout] = useState(null);
    const openAbout = Boolean(anchorElAbout);

    const handleClickAbout = (event) => {
        setAnchorElAbout(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorElAbout(null);
    };

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
                                {/* sx={{ color: "black", marginLeft: 1 }}> */}
                                <Button variant="text">Home</Button>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Events
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>News</MenuItem>
                                    <MenuItem onClick={handleClose}>Fixtures</MenuItem>
                                    <MenuItem onClick={handleClose}>Results</MenuItem>
                                    <MenuItem onClick={handleClose}>Events</MenuItem>
                                </Menu>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Button variant="text">Team</Button>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Button
                                    id="basic-button"
                                    aria-controls={openAbout ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openAbout ? 'true' : undefined}
                                    onClick={handleClickAbout}
                                >
                                    About
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorElAbout}
                                    open={openAbout}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                                    <MenuItem onClick={handleClose}>History</MenuItem>
                                    <MenuItem onClick={handleClose}>Gallery</MenuItem>
                                </Menu>
                            </Grid>
                            <Grid item xs={1} container justifyContent="flex-start">
                                <Button variant="text">Contact</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navigation;