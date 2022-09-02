import React, { useState, useEffect } from 'react';
import './Events.css';
import Box from '@mui/material/Box';
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
        { event: "Ladies Luncheon", date: "24.09.2022", description: "A lunch out for the ladies! Details to follow", contact: "thurstonrugbyclub@live.co.uk" },
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
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} alignItems='center'>
                        {getEventCards()}
                    </Box>
                </Box>
            </>
        );
    };

    const getEventCards = () => {
        return tempEventData.socialEvents.map(({ event, date, description, contact }) => {
            return (
                <Card sx={{ mb: 2, width: '80%' }} elevation={3}>
                    <CardContent>
                        <Typography variant='h5'>
                            {event}
                        </Typography>
                        <Typography>
                            {date}
                        </Typography>
                        <Typography>
                            {description}
                        </Typography>
                        <Typography>
                            {contact}
                        </Typography>
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