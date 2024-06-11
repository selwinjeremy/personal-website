import React, { forwardRef, useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

import Lifeguarding from '../images/lifeguarding.JPG'
import Magnum from '../images/magnum-fc.JPG'
import RHill from '../images/rhill-cup.jpg'
import RunClub from '../images/run-club.JPG'
import SoccerKick from '../images/soccer-kick.jpg'
import SoccerPrac from '../images/sun-league.JPG'
import Volleyball from '../images/volleyball.jpg'

const Sports = forwardRef(({ }, ref) => {
    const [showSoccer, setShowSoccer] = useState(true);

    const toggleContent = () => {
        setShowSoccer(!showSoccer);
    };
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
                    Sports
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
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            !showSoccer && <IconButton
                                onClick={toggleContent}
                            >
                                <ArrowBackIos />
                            </IconButton>
                        }
                    </Grid>
                    <Grid item xs={12} md={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative' }}>
                        {showSoccer ? (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Soccer ⚽
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    My favourite sport is Soccer, and this has been a huge passion of mine while growing up.
                                    I played competitive soccer with Markham FC for 8 years and have learned many lessons about teamwork, hardwork, perseverance, and positivity.
                                    Growing up, I played many different positions, as I started out playing defence where I learned a lot about leadership and communication, before becoming an attacker
                                    where I learned more about staying motivated and having trust in my teammates to give me the best chance to score.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 35 }}>
                                    After going to university, I haven't had the chance to continue playing competitively, but now I play every semester in intramurals at school, and in the summer I play
                                    in a Sunday league with many past teammates that I had growing up.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)' }}>

                                    <img
                                        src={RHill}
                                        alt="Rhill Cup"
                                        style={{ width: '300px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={SoccerKick}
                                        alt="kicking"
                                        style={{ width: '165px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={SoccerPrac}
                                        alt="dribbling"
                                        style={{ width: '165px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={Magnum}
                                        alt="magnum"
                                        style={{ width: '300px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Other Sports 🏊‍♂️ 🏃🏼 🏐
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    Besides soccer, I enjoy playing many different sports but at a recreational level. I enjoy playing badminton, basketball, volleyball, swimming and running. 
                                    I have taken a lot of interest in running recently and my goal is to complete the Toronto Waterfront Marathon in October 2024. Swimming is also a skill that 
                                    I developed at an early age, and a positive outcome from the sport was that I became a lifeguard when I turned 16 years old!
                                    
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 40 }}>
                                    Besides playing sports, I really enjoy watching them as well. Some of my favourite teams include Arsenal FC for soccer, the Dallas Stars for hockey,
                                    the Sacramento Kings for basketball, the Baltimore Ravens for football, and Mclaren for Formula 1.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)' }}>
                                <img
                                        src={Volleyball}
                                        alt="vball"
                                        style={{ width: '300px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={RunClub}
                                        alt="running"
                                        style={{ width: '165px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                    <img
                                        src={Lifeguarding}
                                        alt="lifeguard"
                                        style={{ width: '300px', height: '200px', borderRadius: '8px', margin: '10px' }}
                                    />
                                </Box>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            showSoccer && <IconButton
                                onClick={toggleContent}
                            >
                                <ArrowForwardIos />
                            </IconButton>
                        }
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
});

export default Sports;