import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ emoji, heading, detail, color, link }) => {
  const navigate = useNavigate();

  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="emoji" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={() => navigate(link)}>
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;


