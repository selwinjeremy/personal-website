import React, { forwardRef, useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

import MaseLogo from '../images/mase-group.jpeg'
import QULogo from '../images/Queens-Computing.png'
import QHacksOC from '../images/qhacks-oc.jpg'
import QHacksCC from '../images/qhacks-cc.jpg'
import QHacksTeam from '../images/qhacks-teampic.PNG'

const images = [
    { src: QHacksCC, alt: 'Closing Ceremony' },
    { src: QHacksTeam, alt: 'Team Picture' },
    { src: QHacksOC, alt: 'Opening Ceremony' }
];


const University = forwardRef(({ }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showQHacks, setShowQHacks] = useState(true);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
    const toggleContent = () => {
        setShowQHacks(!showQHacks);
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
                    Queen's University
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
                            !showQHacks && <IconButton
                                onClick={toggleContent}
                            >
                                <ArrowBackIos />
                            </IconButton>
                        }
                    </Grid>
                    <Grid item xs={12} md={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative' }}>
                        {showQHacks ? (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    QHacks 🧑🏻‍💻
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    My greatest achievement at Queen's was being the Co-President for QHacks 2024. QHacks is the largest hackathon at Queen's University and one of the largest in Canada, hosting
                                    over 400 attendees from across North America for a weekend long coding competition.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 35 }}>
                                    We achieved our highest amount of funding for QHacks in 5 years, doubled our attendees from 2023, and were recognized as one of the top 50 hackathons in North America.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)' }}>
                                    <a href="https://qhacks.io/" style={{ margin: '0 10px' }}>
                                        <img
                                            src={images[0].src}
                                            alt={images[0].alt}
                                            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
                                        />
                                    </a>
                                    <a href="https://qhacks.io/" style={{ margin: '0 10px' }}>
                                        <img
                                            src={images[1].src}
                                            alt={images[1].alt}
                                            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
                                        />
                                    </a>
                                    <a href="https://qhacks.io/" style={{ margin: '0 10px' }}>
                                        <img
                                            src={images[2].src}
                                            alt={images[2].alt}
                                            style={{ width: '300px', height: '200px', borderRadius: '8px' }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        ) : (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Research & Teaching 🧑🏻‍🏫
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    I recently joined the Modelling and Analysis in Software Engineering (MASE) group at Queen's University, working as a research assistant with Professor Juergen Dingel.
                                    Currently, I research and test the use of Generative AI to correctly generate output files given an input file and a mapping, with few-shot learning examples.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 35 }}>
                                    I also have been a Teaching Assistant for 4 semesters now, and have had the opportunity to mark assignments/quizzes, host office hours and lead tutorials for courses on Object-Oriented Programming, Python, Data Analytics, and Software Specifications.
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: 100, left: '50%', transform: 'translateX(-50%)' }}>
                                    <a href="https://flux.cs.queensu.ca/mase/" style={{ margin: '0 10px' }}>
                                        <img
                                            src={MaseLogo}
                                            alt="MASE group"
                                            style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
                                        />
                                    </a>
                                    <a href="https://www.cs.queensu.ca/" style={{ margin: '0 10px' }}>
                                        <img
                                            src={QULogo}
                                            alt="Queens Computing"
                                            style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
                                        />
                                    </a>
                                </Box>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            showQHacks && <IconButton
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

export default University;