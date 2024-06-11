import React, { forwardRef, useState } from 'react';
import { Paper, Grid, Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import Carousel from 'react-material-ui-carousel';

import Almafi from '../images/italy/almafi-view.jpg'
import Colosseo from '../images/italy/colosseo.jpg'
import Fiorentina from '../images/italy/fiorentina.jpg'
import Florence from '../images/italy/florence.jpg'
import Michaelangelo from '../images/italy/michaelangelo.jpg'
import Napoli from '../images/italy/napoli.jpg'
import OstiaCity from '../images/italy/ostia-city.jpg'
import OstiaFood from '../images/italy/ostia-food.jpg'
import NapoliStreet from '../images/italy/napoli-street.jpeg'
import PompeiiCandid from '../images/italy/pompeii-candid.jpg'
import PompeiiView from '../images/italy/pompeii-view.jpg'
import Statue from '../images/italy/statue.jpg'
import Steak from '../images/italy/steak.jpg'
import Trevi from '../images/italy/trevi.JPG'
import Vatican from '../images/italy/vatican.jpg'
import Vesuvius from '../images/italy/vesuvius.jpg'

import Airport from '../images/cruise/cruise-airport.jpeg'
import Basketball from '../images/cruise/cruise-basketball.jpg'
import Beach from '../images/cruise/cruise-beach.jpg'
import NightJer from '../images/cruise/cruise-besso.JPG'
import BoatNight from '../images/cruise/cruise-boat-night.jpeg'
import BoatOutside from '../images/cruise/cruise-boat-outside.jpeg'
import BoatSunset from '../images/cruise/cruise-boat-sunset.jpeg'
import CentralPark from '../images/cruise/cruise-centralpark.jpeg'
import Driving from '../images/cruise/cruise-driving.jpeg'
import Flamingo from '../images/cruise/cruise-flamingo.jpeg'
import Galveston from '../images/cruise/cruise-galveston.jpeg'
import SunsetJer from '../images/cruise/cruise-jer-sunset.jpeg'


const Travel = forwardRef(({ }, ref) => {
    const [showItaly, setShowItaly] = useState(true);

    const CarouselItalyItems = [
        PompeiiCandid, PompeiiView, Vesuvius, Almafi,
        Florence, Colosseo, Trevi, Vatican, 
        Michaelangelo, Statue, OstiaCity, OstiaFood,
        Fiorentina, Napoli, NapoliStreet, Steak
    ]

    const CarouselCruiseItems = [
        SunsetJer,BoatSunset,BoatNight,NightJer,
        Flamingo,CentralPark,Driving,Beach,
        Airport,Basketball,Galveston,BoatOutside
    ]

    const renderItalyItems = () => {
        let groups = [];
        for (let i = 0; i < CarouselItalyItems.length; i += 4) {
            groups.push(CarouselItalyItems.slice(i, i + 4));
        }
        return groups;
    };

    const renderCruiseItems = () => {
        let groups = [];
        for (let i = 0; i < CarouselCruiseItems.length; i += 4) {
            groups.push(CarouselCruiseItems.slice(i, i + 4));
        }
        return groups;
    };

    const toggleContent = () => {
        setShowItaly(!showItaly);
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
                    Travels
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
                            !showItaly && <IconButton
                                onClick={toggleContent}
                            >
                                <ArrowBackIos />
                            </IconButton>
                        }
                    </Grid>
                    <Grid item xs={12} md={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative' }}>
                        {showItaly ? (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Italy 🇮🇹
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    I went to Italy with 5 of my soccer teammates for a week in April 2024, and it was the best trip of my life!
                                    This was my first time leaving North America, and since I have always been eager to learn about European culture, I enjoyed every second of time spent in the country.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 3 }}>
                                    We went to historical sites in Rome, Florence and Pompeii, visited beaches in Ostia and Almafi, went to soccer games in Naples and Florence, and even had the chance to hike
                                    Mount Vesuvius! I definitely plan to travel to Europe much more often now.
                                </Typography>
                                <Carousel
                                    autoPlay={true}
                                    indicators={true}
                                    cycleNavigation={true}
                                    navButtonsAlwaysVisible={true}

                                >
                                    {renderItalyItems().map((group, index) => (
                                        <Grid container key={index} spacing={6} justifyContent="center" alignItems="center">
                                            {group.map((item, idx) => (
                                                <Grid item key={idx}>
                                                    <Box
                                                            component="img"
                                                            src={item}
                                                            alt={`carousel-item-${idx}`}
                                                            sx={{ width: '200px', height: '250px' , borderRadius: '8px'}}
                                                        />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ))}
                                </Carousel>
                            </Box>
                        ) : (
                            <Box sx={{ borderRadius: 5, boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', backgroundColor: "white", width: '100%', padding: 2, position: 'relative' }}>
                                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', color: "black", fontWeight: "bold", marginTop: 2 }}>
                                    Carribean Cruise 🚢 
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1 }}>
                                    My first ever trip with friends was on a cruise in August 2023, where we departed from Texas and went to both Mexico and Honduras. 
                                    I had never been on a cruise before, and I was surprised by how many activities there were in such a confined space. There were pools, waterparks, sport courts, theatres, casinos, restaurants, skating rinks and more.
                                </Typography>
                                <Typography variant="h6" component="p" sx={{ textAlign: 'center', marginTop: 2, color: "black", margin: 1, marginBottom: 3 }}>
                                    We also got the chance to explore some cities in Mexico and Honduras such as Cozumel, Costa Maya, and Roatan. We did activities such as shop, visit the beach, and drive ATVs.
                                </Typography>
                                <Carousel
                                    autoPlay={true}
                                    indicators={true}
                                    cycleNavigation={true}
                                    navButtonsAlwaysVisible={true}

                                >
                                    {renderCruiseItems().map((group, index) => (
                                        <Grid container key={index} spacing={6} justifyContent="center" alignItems="center">
                                            {group.map((item, idx) => (
                                                <Grid item key={idx}>
                                                    <Box
                                                            component="img"
                                                            src={item}
                                                            alt={`carousel-item-${idx}`}
                                                            sx={{ width: '200px', height: '250px' , borderRadius: '8px'}}
                                                        />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ))}
                                </Carousel>
                            </Box>
                        )}
                    </Grid>
                    <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            showItaly && <IconButton
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

export default Travel;