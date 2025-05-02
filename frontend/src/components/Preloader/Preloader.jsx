import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Reduced time to 1.2s

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Hide preloader when loading is false

  return (
    <div className="cs_preloader">
      <div className="cs_preloader_bg">
        <div className="cs_preloader_in"></div>
      </div>
    </div>
  );
};

export default Preloader;
