import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./Cursor.css"; // Ensure styling is added

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false); // State to track visibility
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
      };
  
      const handleMouseEnter = () => setHidden(true);  // Hide cursor
      const handleMouseLeave = () => setHidden(false); // Show cursor
  
      document.addEventListener("mousemove", handleMouseMove);
  
      // Add event listeners for links and buttons
      const interactiveElements = document.querySelectorAll("a, button");
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
  
      gsap.to(".cs_cursor_lg", { x: position.x, y: position.y, ease: "power2.out" });
      gsap.to(".cs_cursor_sm", { x: position.x, y: position.y, ease: "power2.out", delay: -0.4 });
  
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }, [position]);
  
    return (
      <>
        <span className={`cs_cursor_lg ${hidden ? "opacity-0" : ""}`}></span>
        <span className={`cs_cursor_sm ${hidden ? "opacity-0" : ""}`}></span>
      </>
    );
  };
  
export default Cursor;
