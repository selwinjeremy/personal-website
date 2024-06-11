import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
const Navbar = ({ scrollToSection, homeRef, aboutRef, schoolRef, projectsRef, sportsRef, travelRef, musicRef }) => {
  return (
    <AppBar position="fixed" sx={{backgroundColor: "#3E362E"}}>
      <Toolbar className='toolbar' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ justifyContent: 'space-around', display: 'flex', flexGrow: 1 }}>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(homeRef)}>
            Home
          </Button>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(aboutRef)}>
            About Me
          </Button>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(schoolRef)}>
            University
          </Button>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(projectsRef)}>
            Side Projects
          </Button>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(sportsRef)}>
            Sports
          </Button>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(travelRef)}>
            Travelling
          </Button>
          <Button sx={{ color: "white", fontWeight: 'bold', textTransform: 'capitalize', letterSpacing: 1, fontSize: '1.4rem' }} onClick={() => scrollToSection(musicRef)}>
            Music
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;