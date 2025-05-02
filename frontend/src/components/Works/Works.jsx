import React, { useContext } from "react";
import "./Works.css";
import Dsa from "../../img/dsa.png";
import Frontend from "../../img/frontend.png";
import Anuranshweb from "../../img/anuranshweb.png";
import Backend from "../../img/backend.png";
import Database from "../../img/database.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            What I Do To Enhance
          </span>
          <span>My Coding Skills</span>
          <span>
          As a Software Engineer with expertise in the MERN stack and Data Structures<br/>
          & Algorithms using C++, I focus on continuous learning to enhance my coding<br/>
           skills. I solve complex coding challenges daily to sharpen my problem-solving<br/>
             abilities and deepen my understanding of algorithms. I actively work on personal<br/>
              projects using the MERN stack, applying real-world scenarios to strengthen my<br/> 
              practical knowledge. Exploring AI and Prompt Engineering allows me to expand<br/>
              my expertise into emerging fields and stay future-ready. I also review advanced<br/>
               concepts  and learn from open-source projects to refine my coding practices.<br/>
                Seeking feedback from peers and mentors helps me identify areas for improvement<br/> 
                and achieve steady growth.<br/>
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Dsa} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Frontend} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Anuranshweb} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Backend} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Database} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
