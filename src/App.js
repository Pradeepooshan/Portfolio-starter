import React, { useContext } from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
      <div
        className="App"
        style={{
          background: darkMode ? 'black' : '',
          color: darkMode ? 'white' : ''
        }}
      >

        <Navbar />

        <Intro />

        <Services />

        <Experience />

        <Work />

        <Portfolio />

        <Testimonial />

        <ContactUs />

        <Footer />

      </div>
  );
}

export default App;
