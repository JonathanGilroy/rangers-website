import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navigation.css';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
    Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ReactImage from 'react-image-wrapper';

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "News",
        href: "/",
    },
    {
        label: "Fixtures",
        href: "/",
    },
    {
        label: "Contact",
        href: "/",
    },
];

function Navigation() {

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;
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
        }
    }, []);

    const displayMobile = () => {

        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));

        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <Typography variant="h5" sx={{
                    color: "#000000",
                    marginLeft: 1,
                }}>
                    Thurston Rangers
                </Typography>
                <Box display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{ flexGrow: 1 }}>
                    <Button onClick={handleDrawerOpen}>
                        <MenuIcon variant="contained" sx={{ color: "black" }} />
                    </Button>
                    <Drawer
                        {...{
                            anchor: "top",
                            open: drawerOpen,
                            onClose: handleDrawerClose,
                            color: "black",
                        }}
                    >
                        <div>{getDrawerChoices()}</div>
                    </Drawer>
                </Box>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                    <Link
                        {...{
                            component: Route,
                            to: href,
                            color: "inherit",
                            style: { textDecoration: "none" },
                            key: label,
                        }}
                    >
                        <MenuItem>{label}</MenuItem>
                    </Link>
            );
        });
    };

    const displayDesktop = () => {
        return (
            <Toolbar sx={{ ml: 15, mr: 15, p: 1 }}>
                <ReactImage className="Logo" src="/favicon.ico" alt="Rangers Logo" height={80}
                    keepAspectRatio={true} />
                <Grid container>
                    <Grid item xs={8} sx={{ display: { xs: 'flex' } }}>
                        <Typography variant="h4" sx={{
                            color: "#000000",
                            marginLeft: 1,
                        }}>
                            Thurston Rangers RUFC
                        </Typography>
                    </Grid>
                    <Grid item xs={4} container justifyContent="flex-end"
                        sx={{ display: { xs: 'flex' } }}>
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
                                }} />
                        </Button>
                    </Grid>
                    <Button variant="text" sx={{ color: 'black' }}>Home</Button>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ color: 'black' }}
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
                        <MenuItem onClick={handleClose}>Fixtures</MenuItem>
                        <MenuItem onClick={handleClose}>Results</MenuItem>
                        <MenuItem onClick={handleClose}>Events</MenuItem>
                    </Menu>
                    <Button variant="text" sx={{ color: 'black' }}>News</Button>
                    <Button variant="text" sx={{ color: 'black' }}>Team</Button>
                    <Button
                        id="basic-button"
                        aria-controls={openAbout ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAbout ? 'true' : undefined}
                        onClick={handleClickAbout}
                        sx={{ color: 'black' }}
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
                    <Button variant="text" sx={{ color: 'black' }}>Contact</Button>
                </Grid>
            </Toolbar>
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="AppBar"
                sx={{
                    backgroundColor: "#FFFFFF",
                }}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </Box>
    );
}

export default Navigation;