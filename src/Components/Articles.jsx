import React from "react";
import "./Articles.css";
import uyessir from "../images/uyes-sir.jpeg";
import imransir from '../images/imran-sir.jpeg'

const Articles = () => {
  return (
    <div className="cards-arti">
      <div className="container-main-arti arti-1">
        <img src={imransir} alt="" />
        <div className="content">
          In the ERA of Industry 4.0 technology has become crucial part of every
          sector. Future belongs to firms that ace digital. We established Space
          Teck with a vision of digital transformation & to contribute to the
          growth story of the information age, Space Teck entered with solution
          called structure integrated display system, integrating display
          systems into building façade; further evolved into software-hardware
          led IT solution, AI, VR, Data & Analytics. We look forward for the
          exciting future ahead.
        </div>
        <h1>Mr. Imran Zuber Shaikh</h1>
      </div>
      <div className="container-main-arti">
        <img src={uyessir} alt="" />
        <div className="content">
          Uyes Inamdar, a technologist, entrepreneur having vast experience over
          drones, robotics & IOT, awarded as “India’s Youngest CEO”, “Drone Boy
          of India”, “Young Scientist Award”. He established a manufacturing
          company, started at a young age 12. In early years of business, he
          acquired in-depth business understanding, be it Sales, Marketing,
          Finace, HR, and his networking made him power entreprener.
        </div>
        <h1>Mr. Uyes Inamdar</h1>
      </div>
    </div>
  );
};

export default Articles;
