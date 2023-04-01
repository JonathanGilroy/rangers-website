import React, { useState, useEffect } from 'react';
import './Contact.css';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';

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
                <Box sx={{
                    mr:
                        mobileView ? 2 : 6,
                    ml:
                        mobileView ? 2 : 6,
                    mb: 4,
                }}>
                    <Typography align='center'>
                        <h1>Contact Us</h1>
                    </Typography>
                    <Typography align='justify'>
                        We are a very friendly club and warmly welcome all new players and supporters! If you are thinking about joining to play,
                        come down to one of our training sessions on a Tuesday or Thursday night at 7pm and talk to one of the coaches. We can be
                        found at Robinson Field, Ixworth Road, Thurston, Bury St Edmunds, IP31 3QE.
                        <br /><br />
                        {'If you would like to get in contact with a member of the club committee and for general enquiries email us at '}
                        <Link color="inherit" href={'mailto:thurstonrugbyclub@live.co.uk'}>
                            thurstonrugbyclub@live.co.uk
                        </Link>
                        . You can also message us on <Link color="inherit" href="https://www.facebook.com/Thurston-RUFC-132633373430087" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </Link>.
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