import React, { forwardRef, useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import AWSLogo from '../images/aws.png'
import NodeJSLogo from '../images/nodejs.png'
import MongoDBLogo from '../images/mongoDB.png'
import TwilioLogo from '../images/twilio.png'
import DialogflowLogo from '../images/dialogflow.png'
import ArduinoLogo from '../images/arduino.png'
import CplusLogo from '../images/c-.png'
import PythonLogo from '../images/python.png'
import SpotifyLogo from '../images/spotify.png'

const Projects = forwardRef(({ }, ref) => {
    const [showCaco, setShowCaco] = useState(true);

    const toggleContent = () => {
        setShowCaco(!showCaco);
    };
    return (
        <div ref={ref}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    background: '#593a27'
                }}
            >
                <Typography variant="h3" component="h1" sx={{ textAlign: 'center', color: "white", fontWeight: "bold" }}>
                    Cool Projects
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
                            !showCaco && <IconButton
                                onClick={toggleContent}
                            >
                                <ArrowBackIos />
                            </IconButton>
                        }
                    </Grid>
                    <Grid item xs={12} md={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative' }}>
                        {showCaco ? (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Campus Companion (CaCo) 📱
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    CaCo is a texting assistant built on nodeJS, Twilio, AWS Lambda, and Google Dialogflow CX to centralize student resources provided by Queen's University.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    We used MongoDB to store Queen's University specific information like course prerequisites, and other common FAQs, and we used APIs from Google to show more possibilities such as Google Maps for campus directions, and Google Calendar for campus bookings.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 5 }}>
                                    We presented the project to a panel of judges during QHacks 2023, and a Queen's University Professor displayed her interest in the texting assistant by heavily promoting it and supporting the initiative to develop the product further for an on-campus launch to students.
                                </Typography>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
                                    <Box>
                                        <iframe
                                            className="contact-pic"
                                            src="https://www.youtube.com/embed/9rOlfyppjJA"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="CaCo Video"
                                            width="350"
                                            height="200"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                                            <img
                                                src={AWSLogo}
                                                alt="Amazon Web Services"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                            <img
                                                src={NodeJSLogo}
                                                alt="Node JS"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                            <img
                                                src={DialogflowLogo}
                                                alt="Google Dialogflow CX"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                                            <img
                                                src={MongoDBLogo}
                                                alt="MongoDB"
                                                style={{ width: '150px', height: '75px', borderRadius: '8px' }}
                                            />
                                            <img
                                                src={TwilioLogo}
                                                alt="Twilio"
                                                style={{ width: '150px', height: '75px', borderRadius: '8px' }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    SpotiLight 🪩
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    SpotiLight is an LED Light based project that detects the user's current listening activity on Spotify and alters the flash speed of LED lights on an Arduino based on the genre of the music being played.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 5 }}>
                                    We utilized Spotify APIs to connect to a user and was able to write a python program that detects when a song is changed and the new metadata that comes along with the song, including the genre. This helped us write a C++ program for the Arudino to modify the speed in which the LED light flashes.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 15 }}>
                                    <Box>
                                        <iframe
                                            className="contact-pic"
                                            src="https://www.youtube.com/embed/E91ISr_zqLM"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="CaCo Video"
                                            width="350"
                                            height="200"
                                            style={{ borderRadius: '8px' }}
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                                            <img
                                                src={PythonLogo}
                                                alt="Python"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                            <img
                                                src={SpotifyLogo}
                                                alt="Spotify"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                                            <img
                                                src={CplusLogo}
                                                alt="C++"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                            <img
                                                src={ArduinoLogo}
                                                alt="Arduino"
                                                style={{ width: '75px', height: '75px', borderRadius: '8px' }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            showCaco && <IconButton
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

export default Projects;