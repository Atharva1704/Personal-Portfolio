import React, { useEffect } from "react";
import { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import logo from "../../assets/VIT LOGO SMALL.png";
import contactImg from "../../assets/contact.png";
import {Link} from 'react-scroll';
import useLocalStorage from "use-local-storage";


function Navbar(){
    const [isDark, setIsDark] = useLocalStorage("isDark");
    
    return (
        <nav id="navi" className="mainNav">
            <img src={logo} alt="Logo" className="Logo"/>
            {/* <img src={} alt="Logo" className="Logo"/> */}
            <div className="sections">
                {/* <Link activeClass="active" to="navi" spy={true} smooth={true} duration={500} offset={-50} className="mainNavItem">Home</Link> */}
                <Link activeClass="active" to="intros" spy={true} smooth={true} duration={500}  offset={-130} className="mainNavItem">About</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} offset={-130} className="mainNavItem">Portfolio</Link>
                <Link activeClass="active" to="main-Class" spy={true} smooth={true} duration={500} offset={-5} className="mainNavItem">Skills</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-0} className="mainNavItem">Contact</Link>
                {/* <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-50} className="mainNavItem">ContactMe</Link> */}
            </div>
            <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
            {/* <button className="contactBtn">
                <img src={contactImg} alt="" className="contactImg"/>
                Contact Me
            </button> */}
        </nav>
    )
}

export default Navbar;