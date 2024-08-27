import React from "react";
import "./SkillBar.css";
import webDesignImg from "../../../assets/website-design.png";
import uiDesignImg from "../../../assets/ui-design.png";
import appDesignImg from "../../../assets/app-design.png";


const skills=[
    {Title:"Full Stack Developer", img:webDesignImg, Desc:"I am a good Web Designer"},
    {Title:"UI Designer", img:uiDesignImg, Desc:"I am a good UI Designer"},
    {Title:"App Designer", img:appDesignImg, Desc:"I am a good App Designer"},
];

function SkillBar(){
    const skillItems= skills.map((skill)=>(
        // <li>
            <div className="skillBar">
                <img src={skill.img} className="skillBarImg" alt=""/>
                <div className="skillBarText">
                    <h2>{skill.Title}</h2>
                    <p>{skill.Desc}</p>
                </div>
            </div>
        // </li>
    )
    );

    return(
        <ul>
            {skillItems}
            
        </ul>
    )
}

export default SkillBar;