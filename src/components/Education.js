import React from "react";
import graduations from "../assets/data/graduations";
import "../assets/css/Education.scss";

const Education = () => {
  return (
    <div id="container-education" data-aos="fade-up">
      <div className="timeline">
        <h1>Education</h1>
        {graduations.map((graduation, index) => (
          <div key={index} className="timeline-item">
            <div className="circle"></div>
            <div className="certificate-card">
              <h2 className="certificate-name">{graduation.name}</h2>
              <div className="details-date">
                <p className="certificate-duration">
                  <p className="certificate-by">{graduation.by}</p>(
                  {graduation.from} - {graduation.to})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
