import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Headersection from './Components/Headersection/Headersection';
import { Title } from './Components/Title/Title';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Project from './Components/Projects/Project';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Component = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div >
      <p style={{
      bottom: 0, 
      width: '100%', 
      textAlign: 'center', 
      backgroundColor: 'lightblue', 
      fontStyle: 'italic', 
      padding: '1px 0'  } }>Shreelakshmi Hegde</p>
    </div>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <Headersection />
      <div className="container">
        <About />
        <Title subTitle="MY PROJECTS" />
        <Project />
        <Title subTitle="CONTACT DETAILS" />
        <Contact />
      </div>
      <Component />
    </div>
  );
}

export default App;
