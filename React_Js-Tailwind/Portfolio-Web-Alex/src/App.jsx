import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;