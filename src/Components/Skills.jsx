import React from "react";
import "./Skill.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="percent">
        <h1 className="percent-icon">%</h1>
      </div>
      <div className="team">
        <h1 className="text-ourteam   animate__animated animate__fadeInRight animate__slow">Our Team</h1>
        <h1 className="text-skills   animate__animated animate__fadeInUp animate__slow">Skills</h1>
        <div className="stats">
          <div className="photography">
            <div className="filled1"></div>
          </div>
          <div className="stats-div">
            <h4 className="text-photography">Photography</h4>
            <span className="skill-percent">90%</span>
          </div>
          <div className="graphic">
          <div className="filled2"></div>
          </div>
          <div className="stats-div">
            <h4 className="text-grahic">Graphic design</h4>
            <span className="skill-percent">80%</span>
          </div>
          <div className="web">
          <div className="filled3"></div>
          </div>
          <div className="stats-div">
            <h4 className="text-web">Web Design</h4>
            <span className="skill-percent">65%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
