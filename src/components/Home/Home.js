import React from 'react';
import './Home.css';
import Box from '@mui/material/Box';

function Home() {
    return (
        <Box
            display='flex'
            alignItems="center"
            justifyContent="center">
            <Box sx={{
                width: '60%',
                height: '100%',
                minHeight: '100vh',
                backgroundColor: 'white',
            }}>
                <img src={'cup-victory.jpg'}
                    alt="Thurston Rangers first team celebrating victory after the Suffolk Cup Final."
                    style={{
                        maxWidth: '100%',
                    }} />
                    <h1>About The Club</h1>
                    <p>We are a ...</p>
            </Box>
        </Box>
    );
}

export default Home;