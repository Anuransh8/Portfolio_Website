import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import X from "../../img/x.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Anuransh Srivastava</span>
          <span>
            I specialize in building dynamic MERN stack applications and delivering tailored web development
            projects that scale businesses and fulfill client needs.<br /> Currently, I'm living in Jaipur Rajasthan
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Anuransh8"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/anuransh-srivastava-1b72a7265/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/anuransh_._"><img src={Instagram} alt="" /></a>
          <a href="https://x.com/Anuransh8"><img src={X} alt="" /></a>
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        {/* Background with White and Blue Gradient */}
        <div className="i-ground-container">
  <div className="i-oval-platform"></div>

  <motion.div
    className="i-boy-wrapper"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
{/*     <img src={boy} alt="Anuransh" className="i-boy" /> */}
  </motion.div>
</div>

       

        {/* Animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* <motion.div
          initial={{ left: "50%", top: "62%" }}
          whileInView={{ left: "0%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Problem" text2="solver" />
        </motion.div> */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
