import React, { forwardRef } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import cruisePhoto from '../images/home-cruise.JPG'
import beachPhoto from '../images/home-beach.jpg'
import almafiPhoto from '../images/home-almafi.jpg'
import snowPhoto from '../images/home-snow.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = forwardRef(({ }, ref) => {
    return (
        <div ref={ref}>
            <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                <Grid container sx={{ width: '100%', height: '100%', margin: 2 }}>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h3" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold" }}>
                            Hi, I'm Jeremy Selwin 👋🏻
                        </Typography>
                        <Typography variant="h5" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black" }}>
                            I'm a 5th year student at Queen's University where I specialize in Software Design.
                            I live in Toronto, Ontario but whenever I'm in school I live with my friends in Kingston!
                        </Typography>
                        <br />
                        <Typography variant="h5" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black" }}>
                            In addition to my studies, I have many different hobbies which keep me busy throughout the day! This includes playing
                            sports, playing music, travelling, watching television, and getting involved in extracurricular activities.
                            Feel free to contact me by clicking on any of the icons below!
                        </Typography>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: "40px"}}>
                            <a href="https://github.com/selwinjeremy">
                                <GitHubIcon sx={{ color: '#593a27', fontSize: 100, mx: 1 }} />
                            </a>
                            <a href="https://www.instagram.com/jeremyselwin/">
                                <InstagramIcon sx={{ color: '#593a27', fontSize: 100, mx: 1 }} />
                            </a>
                            <a href="mailto:jeremy.c.selwin@gmail.com">
                                <EmailIcon sx={{ color: '#593a27', fontSize: 100, mx: 1 }} />
                            </a>
                            <a href="https://linkedin.com/in/jeremy-selwin">
                                <LinkedInIcon sx={{ color: '#593a27', fontSize: 100, mx: 1 }} />
                            </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid container spacing={1} sx={{ width: '100%', height: '100%', maxWidth: 400, maxHeight: 500 }}>
                            <Grid item xs={6}>
                                <img src={almafiPhoto} alt="almafi" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={cruisePhoto} alt="cruise" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={beachPhoto} alt="beach" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={snowPhoto} alt="snow" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
});

export default About;