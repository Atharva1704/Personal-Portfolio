import React from "react";
import "./Works.css";
import prtf1 from "../../assets/portfolio-1.png";
import prtf2 from "../../assets/portfolio-1.png";
import prtf3 from "../../assets/portfolio-1.png";
import prtf4 from "../../assets/portfolio-1.png";
import { Tilt } from 'react-tilt'
// import prtf1 from "../../assets/portfolio-1.png";


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const projects=[
    {Title: "Personal Portfolio", GitHub: "https://paypal.eightfold.ai/careerhub/me?action=edit", Img:prtf1, Desc: "This a personal portfolio website built using React. It is visible to you.", sk1: "React", sk2: "CSS", sk3: "Gsap"},
    
    // {Title: "MERN Stack Twitter Clone", GitHub: "https://paypal.eightfold.ai/careerhub/me?action=edit", Img:prtf2, Desc: "This a MERN Stack website built with Encrypted Passwords, React UI, JWT tokens, Express Middlewares and more ", sk1: "MongoDB", sk2: "Express", sk3: "React", sk4: "Nodejs", sk5: "Bcrypt", sk6: "JWT"},
    // {Title: "VIT-Map using GMaps API", GitHub: "https://paypal.eightfold.ai/careerhub/me?action=edit", Img:prtf3, Desc: "This is a backend project built using GMap Api's Javascript API. A Personalized Custom Map created with custom markers.", sk1: "React", sk2: "CSS", sk3: "Gsap"},
    // {Title: "Insect Running Game", GitHub: "https://paypal.eightfold.ai/careerhub/me?action=edit", Img:prtf4, Desc: "This was a Group Project. It's a Html Css Js based game built for GameHacks Hackathon. Its .We won the first prize", sk1: "React", sk2: "CSS", sk3: "Gsap"},
    // {Title: "Portfolio", GitHub: "https://paypal.eightfold.ai/careerhub/me?action=edit", Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTM-Akg1fWcgf6Ud56m8e1TgiJwHAETDNWHdMPmmL_w&s", Desc: "This a personal portfolio website. Its mobile responsive too."},
    // {Title: "Portfolio", GitHub: "https://paypal.eightfold.ai/careerhub/me?action=edit", Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTM-Akg1fWcgf6Ud56m8e1TgiJwHAETDNWHdMPmmL_w&s", Desc: "This a personal portfolio website. Its mobile responsive too."},

]

function Projects(){
    const projectss= projects.map(function(pro){
            return(
                <div className="projectCard">
                    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
                        <img src={pro.Img} alt="" className="projectImage"/>
                    </Tilt>
                    <div className="projectDetails">
                        <h2 className="projectTitle">{pro.Title}</h2>
                        {/* <button className="projectButton"> */}
                        <div className="projectStack">
                            <h3 className="projectStackElement">{pro.sk1}</h3>
                            <h3 className="projectStackElement">{pro.sk2}</h3>
                            <h3 className="projectStackElement">{pro.sk3}</h3>
                            <h3 className="projectStackElement">{pro.sk4}</h3>
                            <h3 className="projectStackElement">{pro.sk5}</h3>
                            <h3 className="projectStackElement">{pro.sk6}</h3>
                        </div>
                            <a href={pro.GitHub} className="projectGit">Visit Project</a>
                        {/* </button> */}
                        
                        <p className="projectDesc">{pro.Desc}</p>
                    </div>        
                </div>

            )
        } 
    )
    return(
        <div id="projects" >
        <h1 className="portfolioTitle">Portfolio</h1>
        <div className="bigProject">
            {/* <h1 className="Project-name">Personal Portfolio</h1> */}
            <img src={prtf1} alt="image" className="mainImg"/>
            <div className="project-desc">
                <p className="projectDescs">This a Personal Portfolio website which uses React, css animations, etc</p>
                <p className="projectDescs">It has a features like:
                </p> 
                <p className="projectDescs">
                    Dark Mode, </p>
                <div className="TechStack">
                    <h3 className="Techs">1. ReactJs</h3>
                    <h3 className="Techs">2. CSS</h3>

                </div>
            </div>

        </div>

        <div className="bigProject">
            {/* <h1 className="Project-name">Personal Portfolio</h1> */}
            <img src={prtf1} alt="image" className="mainImg"/>
            <div className="project-desc">
                <p className="projectDescs">This a Personal Portfolio website which uses React, css animations, etc</p>
                <p className="projectDescs">It has a features like:
                </p> 
                <p className="projectDescs">
                    Dark Mode, </p>
                <div className="TechStack">
                    <h3 className="Techs">1. ReactJs</h3>
                    <h3 className="Techs">2. CSS</h3>

                </div>
            </div>

        </div>
        {/* <div className="projects">
            {projectss}
        </div> */}
        </div>
    )
}

export default Projects;