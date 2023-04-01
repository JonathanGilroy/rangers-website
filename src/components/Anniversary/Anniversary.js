import React, { useState, useEffect } from 'react';
import './Anniversary.css';
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
import tempEventData from './50thEvents.json';

function Anniversary() {

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
                }}>
                    <Typography align='center'>
                        <h1>Thurston Rangers 50th Anniversary</h1>
                    </Typography>
                    <Typography align='justify' variant='body1' sx={{ mb: 4 }}>
                        The club is about to celebrate its 50th anniversary and is putting on some special events to mark the
                        occasion. On top of this, we will also be going through the archives to post some historic club
                        pictures, and will be diving in to the clubs history. So stay tuned to keep up with everything to come!
                        <br /><br />
                        Please see the currently announced events below:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 4 }} alignItems='center'>
                        {getEventCards()}
                    </Box>
                </Box>
            </>
        );
    };

    const getEventCards = () => {
        return tempEventData.AnniversaryEvents.map(({ event, date, description, contact }) => {
            return (
                <Card sx={{ mb: 6, width: mobileView ? '90%' : '80%' }} style={{ backgroundColor: '#F0F0F0' }} elevation={4}>
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

export default Anniversary;