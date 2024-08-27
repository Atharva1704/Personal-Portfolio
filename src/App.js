import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skill from "./components/skills/Skill";
import Projects from "./components/Projects/Works";
import Footer from "./components/Footer/Footer";
import Contact from "./components/ContactMe/Contact";
import Toggle from "./components/Toggle/Toggle";
import useLocalStorage from "use-local-storage";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark");
  return (
    <div className="App" data-theme={ isDark ? "dark" : "light" }>
      {/* <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} /> */}
      <Navbar />
      <Intro />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
