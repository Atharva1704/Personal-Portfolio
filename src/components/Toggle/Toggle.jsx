import "./Toggle.css";
import React from "react";
import { ReactComponent as Sun } from "../../assets/Sun.svg";
import { ReactComponent as Moon } from "../../assets/Moon.svg";
import { useState } from "react";

function Toggle({ handleChange, isChecked }){
  const [modes , setMode ] = useState("Dark");

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label className="label" htmlFor="check">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default Toggle;