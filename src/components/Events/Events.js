import React, { useState, useEffect } from 'react';
import './Events.css';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import {
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
    Typography,
    Grid,
} from '@mui/material';

const tempEventData = {
    "socialEvents": [
        { event: "VP Dinner", date: "03.09.2022", description: "VP Lunches are a great opportunity to get together with your fellow Rangers, enjoy a beer or two and support the team! Book a table at £30 a head for a table of 8.", contact: "thurstonrugbyclub@live.co.uk" },
        { event: "Ladies Luncheon", date: "24.09.2022", description: "A lunch out for the ladies! Bottomless brunch with 90 minutes of unlimited pizza, pasta, prosecco and wine. Tickets at £30 a head. Email the club or contact Liam or Chris to get your tickets now.", contact: "thurstonrugbyclub@live.co.uk" },
        { event: "VP Dinner", date: "15.10.2022", description: "VP Lunches are a great opportunity to get together with your fellow Rangers, enjoy a beer or two and support the team! Book a table at £30 a head for a table of 8.", contact: "thurstonrugbyclub@live.co.uk" },
        { event: "VP Dinner", date: "12.11.2022", description: "VP Lunches are a great opportunity to get together with your fellow Rangers, enjoy a beer or two and support the team! Book a table at £30 a head for a table of 8.", contact: "thurstonrugbyclub@live.co.uk" },
        { event: "VP Dinner", date: "21.01.2023", description: "VP Lunches are a great opportunity to get together with your fellow Rangers, enjoy a beer or two and support the team! Book a table at £30 a head for a table of 8.", contact: "thurstonrugbyclub@live.co.uk" },
        { event: "VP Dinner", date: "04.03.2023", description: "VP Lunches are a great opportunity to get together with your fellow Rangers, enjoy a beer or two and support the team! Book a table at £30 a head for a table of 8.", contact: "thurstonrugbyclub@live.co.uk" },
    ]
};

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
                    <Typography>
                        <h1>Events</h1>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4 }} alignItems='center'>
                        {getEventCards()}
                    </Box>
                </Box>
            </>
        );
    };

    const getEventCards = () => {
        return tempEventData.socialEvents.map(({ event, date, description, contact }) => {
            return (
                <Card sx={{ mb: 2, width: mobileView ? '90%' : '80%' }} elevation={4}>
                    <CardContent>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                            {event}
                        </Typography>
                        <Typography sx={{ mb: 2 }}>
                            {description}
                        </Typography>
                        <Grid container>
                            <Grid xs={mobileView ? 12 : 6} justifyContent='flex-start'>
                                <Typography>
                                    {date}
                                </Typography>
                            </Grid>
                            <Grid xs={mobileView ? 12 : 6} container justifyContent={mobileView ? 'flex-start' : 'flex-end'}>
                                <Typography variant={mobileView ? 'body2' : 'body1'}>
                                    <Link color='inherit' href={`mailto:${contact}`}>
                                        {contact}
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            );
        });
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