import React, { useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './components/Home';
import About from './components/About';
import Music from './components/Music';
import Projects from './components/Projects';
import Sports from './components/Sports';
import Travel from './components/Travel';
import University from './components/University';



const App = () => {
  const homeRef = useRef(null)
  const aboutRef = useRef(null);
  const schoolRef = useRef(null);
  const projectsRef = useRef(null);
  const sportsRef = useRef(null);
  const travelRef = useRef(null);
  const musicRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <p>hi</p>
      <Navbar 
        scrollToSection={scrollToSection} 
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        schoolRef={schoolRef} 
        projectsRef={projectsRef}
        sportsRef={sportsRef}
        travelRef={travelRef}
        musicRef={musicRef}
      />
      <Home ref={homeRef}/>
      <About ref={aboutRef}/>
      <University ref={schoolRef}/>
      <Projects ref={projectsRef}/>
      <Sports ref={sportsRef}/>
      <Travel ref={travelRef}/>
      <Music ref={musicRef}/>
      
      </div>
  );
};

export default App;
