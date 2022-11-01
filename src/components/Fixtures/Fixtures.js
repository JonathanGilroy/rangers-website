import React, { useState, useEffect } from 'react';
import { Link, Typography } from '@mui/material';
import './Fixtures.css';
import Box from '@mui/material/Box';

function Contact() {

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
        }
    }, []);

    const contentToDisplay = () => {
        return (
            <>
                <img src={'jenks-wallpaper-2.jpg'}
                    alt="Thurston Ranger smiling running onto the pitch for kick off."
                    style={{
                        maxWidth: '100%',
                        width: '100%'
                    }} />
                <Box sx={{
                    mr:
                        mobileView ? 2 : 2,
                    ml:
                        mobileView ? 2 : 2,
                }}>
                    <Typography align="center">
                        <h1>Fixtures</h1>
                    </Typography>
                    <Typography>
                        <p>We are currently working to create our own fixtures and results page. In the mean time, please find the club fixtures and results on the RFU website below:</p>
                        <ul>
                            <li>
                                <Link
                                    href='https://www.englandrugby.com/fixtures-and-results/search-results?team=22795&season=2022-2023#fixtures'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    First Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.englandrugby.com/fixtures-and-results/search-results?team=22796&season=2022-2023#fixtures"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Second Team
                                </Link>
                            </li>
                        </ul>
                    </Typography>
                </Box>
            </>
        );
    };

    const displayMobile = () => {

        return (
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                    backgroundColor: 'white',
                }}>
                {contentToDisplay()}
            </Box>
        );
    };

    const displayDesktop = () => {
        return (
            <Box
                display='flex'
                alignItems="center"
                justifyContent="center">
                <Box sx={{
                    width: '105vh',
                    height: '100%',
                    minHeight: '100vh',
                    backgroundColor: 'white',
                }}>
                    {contentToDisplay()}
                </Box>
            </Box>
        );
    };

    const { mobileView } = state;

    return (
        <>
            {mobileView ? displayMobile() : displayDesktop()}
        </>
    );
}

export default Contact;