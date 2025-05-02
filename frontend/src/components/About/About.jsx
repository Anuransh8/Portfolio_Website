import React, { useContext } from "react";
import "./About.css";
import Card from "../Card/Card";
import EducationEmoji from "../../img/educationemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="about" id="about">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About Me</span>
        <span id="aboutintro1">I build software that<br/> solve user problems</span>
        <span id="aboutintro2">
         I am Anuransh Srivastava, a dedicated MERN Stack Software<br/>
          Developer a passion for creating efficient and scalable web<br/> 
          applications With expertise in MongoDB, Express.js, React,<br/>
          and Node.js, I focus on building seamless and dynamic<br/> user experiences.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Resume📥</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={EducationEmoji}
            heading={"Education"}
            detail={"B.Tech in Computer Science & Engineering"}
             link="/education"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Skills"}
            detail={"Communication, Problem Solving, Web Application, DSA(C++)"}
            link="/skills"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Technologies"}
            detail={
              "HTML, CSS, JS, React, Nodejs, Express, MongoDB"
            }
             link="/technologies"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
