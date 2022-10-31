import React from "react";
import "./Works.css";


const Works = () => {
  return (
    <div className="works">
      <h1 className="works-heading">Our <br /> <span className="works-heading-span">Products</span></h1>

      <div className="works-row">
        <div className="works-container1">
          <h3>A.I. Presales Solutions</h3> <br />
          <h4>Heading</h4>
        </div>
        <div className="works-container2">
          <h3>BenQ Interactive Flat Panels</h3>
          <h4>Heading</h4>
        </div>
      </div>
      <div className="works-row">
        <div className="works-container3">
          <h3>LED Display Solutions</h3>
          <h4>Heading</h4>
        </div>
        <div className="works-container4">
          <h3>Training</h3>
          <h4>Heading</h4>
        </div>
      </div>
      {/* <div className="works-row">
        <div className="works-container5">
          <h3>Follow The Sun</h3>
          <h4>Heading</h4>
        </div>
        <div className="works-container6">
          <h3>Follow The Sun</h3>
          <h4>Heading</h4>
        </div>
      </div> */}
    </div>
  );
};

export default Works;
