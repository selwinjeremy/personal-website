import React, { forwardRef, useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

import Wrapped from '../images/music-wrapped.JPG'
import DonToliver from '../images/music-don.JPG'
import Drumming from '../images/music-drums.jpg'

const Music = forwardRef(({ }, ref) => {

    return (
        <div ref={ref}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    background: '#593a27',
                    marginTop: 2,
                    marginBottom: 2
                }}
            >
                <Typography variant="h3" component="h1" sx={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>
                    Music
                </Typography>
            </Box>
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    background: 'white'
                }}
            >
                <Grid container sx={{ width: '100%', height: '100%', marginTop: 5 }}>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}/>
                    
                    <Grid item xs={12} md={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative' }}>
                        
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Instruments & Artists 🎹 🥁 🎤
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    I played a lot of instruments growing up, but my two main instruments were the Piano and the Drums. I played piano throughout all of elementary school, following
                                    the Royal Conservatory Program, and then started playing the Drums in High School. I'll never forget the day I dropped my drumsticks during a live performance 🙃
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 35 }}>
                                    In terms of listening to music, I'm a huge fan of Hip-Hop and R&B but I am also open to many different genres. I'll listen to music from different languages like
                                    Tamil, Spanish, Japanese, Korean, and Chinese, and I also have started getting more into House and Country music!
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)' }}>

                                    <img
                                        src={Wrapped}
                                        alt="Spotify Wrapped"
                                        style={{ width: '180px', height: '230px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={Drumming}
                                        alt="Drumming"
                                        style={{ width: '320px', height: '230px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={DonToliver}
                                        alt="Don Toliver"
                                        style={{ width: '180px', height: '230px', borderRadius: '8px', margin: '10px' }}
                                    />
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}/>
                </Grid>
            </Box>
        </div>
    )
});

export default Music;