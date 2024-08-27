import React from "react";
import "./Skills.css";
import SkillBar from "../skills/SkillBar/SkillBar";
import Resume from "../../assets/Resume.png";


function Skill(){
    return(
        <div id="main-Class" className="mainClass">
            <div className="skills">
                <span className="skillTitle">What I Do</span>
                <span className="skillDesc">I am passionate and very productive react developerI am passionate and very productive react developerI am passionate and very productive react developerI am passionate and very productive react developerI am passionate and very productive react developerI am passionate and very productive react developerI am passionate and very productive react developer</span>    
                <div className="skillBars">
                    <SkillBar />
                </div>
            </div> 
            <div className="resumeClass">
                <img className="Resume" src={Resume}></img>
                <a href="https://rb.gy/k9231"> 
                    <button className="resumeLink">Go To Resume</button>
                </a>
            </div>
        </div>
    )
}

export default Skill;