import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import threeD from "../../img/threed.png";
import astube from "../../img/astube.png";
import dashboard from "../../img/dashboard.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

// Project data with titles and links
const projects = [
  {
    id: 1,
    title: "Simple3D Sprint",
    description: "A Three.js-powered web game set in a minimalist 3D environment.",
    image: threeD,
    bgImage: "/img/bg/bg2.png",
    link: "https://v0-sp3d.vercel.app/"
  },
  {
    id: 2,
    title: "ASTube",
    description: "A pure HTML/CSS/JS YouTube UI mockup with interactive hover effects.",
    image: astube,
    bgImage: "/img/bg/bg3.png",
    link: "https://anuransh8.github.io/AsTube_YouTube-Clone/"
  },
  {
    id: 3,
    title: "AccountDash",
    description: "A pure HTML/CSS/JS account dashboard UI mockup with responsive panels & interactive widgets.",
    image: dashboard,
    bgImage: "/img/bg/bg4.png",
    link: "https://anuransh8.github.io/As_Dashboard/"
  },
  {
    id: 4,
    title: "TaskMaster AI",
    description: "A personalized, AI-driven task management app—currently in maintenance.",
    image: MusicApp,
    bgImage: "/img/bg/bg4.png",
    link: "https://v0-maintenance-five.vercel.app/"
  },
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="portfolio-header">
          <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span><br/>
          <span>Portfolio</span>
        </div>

        <div className="portfolio-grid">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-img"
                />

                {hoveredProject === project.id && (
                  <motion.div
                    className="portfolio-overlay"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                  >
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </motion.div>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;