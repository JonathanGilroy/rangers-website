import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { fontSize } from "@mui/system";

// const useStyles = makeStyles((theme) => ({
//     logo: {
//         marginRight: theme.spacing(2),
//         maxHeight: 90,
//         flexGrow: "0",
//         cursor: "auto"
//     }
// }));

function Navigation() {

    return (
        <AppBar position="static" className="AppBar"
            sx={{
                backgroundColor: "#FFFFFF",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src="/favicon.ico" alt="Rangers Logo" style={{
                        marginRight: 2,
                        maxHeight: 140,
                        flexGrow: "0",
                        cursor: "auto"
                    }
                    } />
                    <Grid container>
                        <Grid>
                            <Typography variant="h3" sx={{
                                color: "#000000",
                                marginRight: 2,
                                marginLeft: 2,
                            }}>
                                Thurston Rangers RUFC
                            </Typography>
                            <Button href="https://www.facebook.com/Thurston-RUFC-132633373430087" target="_blank" rel="noopener noreferrer"
                                sx={{
                                    "& :hover": { color: "black" }
                                }}>
                                <FacebookIcon sx={{
                                    color: "blue",
                                    fontSize: "300%",
                                }} />
                            </Button>
                            <Button href="https://www.instagram.com/thurstonrangers/" target="_blank" rel="noopener noreferrer"
                                sx={{
                                    "& :hover": { color: "black" }
                                }}>
                                <InstagramIcon
                                    sx={{
                                        color: "purple",
                                        fontSize: "300%",
                                        "& :hover": { color: "black" }
                                    }} />
                            </Button>
                            <Button href="https://twitter.com/thurstonrangers" target="_blank" rel="noopener noreferrer"
                                sx={{
                                    "& :hover": { color: "black" }
                                }}>
                                <TwitterIcon sx={{
                                    color: "#1E90FF",
                                    fontSize: "300%",
                                    "& :hover": { color: "black" }
                                }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;