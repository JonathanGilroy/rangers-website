import React, { useState, useEffect } from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Home() {

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
                <img src={'cup-victory.jpg'}
                    alt="Thurston Rangers first team celebrating victory after the Suffolk Cup Final."
                    style={{
                        maxWidth: '100%',
                    }} />
                <Box sx={{
                    mr:
                        mobileView ? 1 : 2,
                    ml:
                        mobileView ? 1 : 2,
                }}>
                    <Typography align='center'>
                        <h1>Blood, sweat and beers!</h1>
                    </Typography>
                    <Typography align='justify' variant='body1' sx={{ mb: 4 }}>
                        We are a friendly community rugby club based in Thurston, Suffolk currently fielding two mens teams. Following
                        COVID-19, the club has just had its most successful season ever, with both our first and second team winning county
                        cups and gaining promotion to higher leagues (Eastern Counties 1 and Eastern Counties Greene King Division One South
                        respectively). <br /><br />
                        The club is also due to celebrate it's 50th birthday in 2023, so keep an eye out for news and events to mark this
                        special event next year! The club has a fanatstic community and hosts multiple social events throughout the year
                        including VP dinners, ladies luncheons, hog roasts and annual dinner. <br /><br />
                        So whether you're a player or supporter, newcomer or vet, come on down!
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

export default Home;