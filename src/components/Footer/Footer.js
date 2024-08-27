import React from "react";
import "./Footer.css";
import insta from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin-in.svg";


const social=[
    {Name:"Instagram", Logo:insta, Link: "https://www.linkedin.com/"},
    {Name:"LinkedIn", Logo:linkedin, Link: "https://www.linkedin.com/"},
    {Name:"Instagram", Logo:insta, Link: "https://www.linkedin.com/"},
    {Name:"LinkedIn", Logo:linkedin, Link: "https://www.linkedin.com/"},
]

function Footer(){
    const socials= social.map(function(s){
        return(
                // <div className="wrapper">
                //         <img className="footer-link-logo" src={s.Logo} alt="facebook"></img>
                //         <span className="socials-name">{s.Name}</span>
                // </div>
            <div>
                <a href={s.Link} target="_blank" rel="noopener noreferrer">
                    <img className="footer-link-logo" src={s.Logo} alt="facebook" ></img>
                </a>
                
                <span className="socials-name">{s.Name}</span>
            </div>
        )
    })
    return(
        <footer className="footers">
            <div className="footerLinks">
                {socials}
            </div>
            {/* <div className="social-media">
                <p class="footer-name">© Atharva Chavan.</p>
            </div> */}
        </footer>
    )
}

export default Footer;