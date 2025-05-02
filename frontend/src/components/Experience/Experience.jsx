import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--blue)':''}}>200+</div>
        <span  style={{color: darkMode?'white':''}}>DSA Questions </span>
        <span>Solved</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--blue)':''}}>8+</div>
        <span  style={{color: darkMode?'white':''}}>Projects </span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--blue)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>Certifications </span>
        <span>Done</span>
      </div>
    </div>
  );
};

export default Experience;
