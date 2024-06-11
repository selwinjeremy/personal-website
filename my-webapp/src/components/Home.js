import React, { forwardRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import desk from '../images/desk-background.jpeg'

const Home = forwardRef(({ }, ref) => {
    return (
        <div ref={ref}>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(${desk})`, // Specify the URL of your image here
                    backgroundSize: 'cover', // Adjust the background size as needed
                    backgroundPosition: 'center', // Adjust the background position as needed
                }}
            >
                {/* Centered text */}
                <Typography variant="h1" component="h1" sx={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>
                    Welcome to My Portfolio!
                </Typography>
                <Typography variant="h4" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "white" }}>
                    Keep scrolling to learn more about me!!! 🙂
                </Typography>
            </Box>

        </div>
    );
});

export default Home;