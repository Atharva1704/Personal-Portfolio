import React from "react";
import "./intro.css";
// import blob from "../../assets/blob.svg";
import bg from "../../assets/ATHARVA_PHOTO_NO_BG.png";
import btnImg from "../../assets/hireme.png";
import {Link} from 'react-scroll';
import insta from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin-in.svg";
import github from "../../assets/github.svg";
import FadeInText from "./FadeText/FadeText";

const social=[
    {Name:"Instagram", Logo:insta, Link: "https://www.linkedin.com/"},
    {Name:"LinkedIn", Logo:linkedin, Link: "https://www.linkedin.com/"},
    {Name:"Instagram", Logo:github, Link: "https://www.linkedin.com/"},
]



function Intro(){
    const socials= social.map(function(s){
        return(
                <p className="footer-link">
                    <div className="footer-box">
                        <a href={s.Link} target="_blank" rel="noopener noreferrer">
                            <img className="footer-link-logo" src={s.Logo} alt="facebook" ></img>
                        </a>
                    </div>
                </p>
        )
    });
    return(
        <section id="intros">
            <div className="introContent" >
                <span className="Hello">Hello,</span>
                <span className="introText">I'm <br/>
                <FadeInText />
                {/* <span className="introName slideinleft">Atharva Chavan</span><br/> */}
                <div class="sliding-text-container">
                    {/* <div class="sliding-text"> */}
                        <span>Developer</span>
                    {/* </div> */}
                </div>
               </span>
                <p className="introPara"> I am a skilled web designer with experience in creating visually <br /> appealing and user-friendly websites.</p>
                <div className="socialss">
                    <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
                    <div className="footerLink">
                        {socials}
                    </div>
                </div>
                
            </div>
            <svg className="bg1" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                        <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <mask id="mask1" mask-type="alpha">
                    <path fill="url(#sw-gradient)"
                        d="M21.8,-37.7C27.8,-34.4,31.8,-27.5,35.3,-20.7C38.9,-13.8,41.9,-6.9,42.4,0.3C43,7.5,41.1,15.1,37.6,22.1C34.2,29.1,29.2,35.6,22.7,39.9C16.2,44.2,8.1,46.4,0.5,45.5C-7.1,44.7,-14.2,40.8,-19.7,35.8C-25.2,30.9,-29.1,25,-33.3,18.8C-37.4,12.7,-41.9,6.3,-42.5,-0.3C-43.1,-7,-39.8,-14.1,-35.9,-20.6C-32,-27.2,-27.4,-33.4,-21.3,-36.7C-15.2,-40,-7.6,-40.4,0.2,-40.7C7.9,-41,15.9,-41.1,21.8,-37.7Z"                                      width="100%" height="100%" transform="translate(50 50)" stroke-width="0" className="class-svg"
                    ></path>
                </mask>
                <g mask="url(#mask1)">
                    <path fill="url(#sw-gradient)"
                        d="M21.8,-37.7C27.8,-34.4,31.8,-27.5,35.3,-20.7C38.9,-13.8,41.9,-6.9,42.4,0.3C43,7.5,41.1,15.1,37.6,22.1C34.2,29.1,29.2,35.6,22.7,39.9C16.2,44.2,8.1,46.4,0.5,45.5C-7.1,44.7,-14.2,40.8,-19.7,35.8C-25.2,30.9,-29.1,25,-33.3,18.8C-37.4,12.7,-41.9,6.3,-42.5,-0.3C-43.1,-7,-39.8,-14.1,-35.9,-20.6C-32,-27.2,-27.4,-33.4,-21.3,-36.7C-15.2,-40,-7.6,-40.4,0.2,-40.7C7.9,-41,15.9,-41.1,21.8,-37.7Z"
                        width="100%" height="100%" transform="translate(50 50)" stroke-width="0" className="class-svg"
                        ></path>
                    <image class="my-image" x='11' y='21' href={bg} />
                </g>
            </svg>

            
            {/* <img src={blob} alt="Profile_Photo" className="bg0"/> */}
            {/* <img src={bg} alt="Profile_Photo" className="bg1"/> */}
        </section>
    )
}

export default Intro;