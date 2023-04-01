import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';

const images = [
    'IMG-20221026-WA0006.jpg',
    'IMG-20221026-WA0008.jpg',
    'IMG-20221026-WA0012.jpg',
    // 'IMG-20221026-WA0015.jpg',
    'IMG-20221026-WA0016.jpg',
    'IMG-20221026-WA0018.jpg'
];

function Banner() {

    const [state, setState] = useState({
        mobileView: false,
    });
    const [imageState, setImageState] = useState(Math.floor(Math.random() * 5));

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
               <Box style={{
                maxWidth: '100%',
                width: '100%',
                height: mobileView ? 125 : 475,
                objectFit: 'cover',}}>     
            <img object-fit src={images[imageState]}
                    alt="Rugby fly half Jack running over the try line."
                    style={{
                        maxWidth: '100%',
                        width: '100%',
                        height: mobileView ? 125 : 475,
                        objectFit: 'cover',
                        objectPosition: '50% 50%',
                    }} />
                  </Box> 
        );
    };

    const displayMobile = () => {

        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: '100%',
                    backgroundColor: '#181818',
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
                    width: '100%',
                    backgroundColor: '#181818',
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

export default Banner;