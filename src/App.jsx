import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero";
import "./App.css";
import About from "./component/About";
import Services from "./component/Services";
import Testimonials from "./component/Testimonials";
import Pricing from "./component/Pricing";
import Contact from "./component/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
