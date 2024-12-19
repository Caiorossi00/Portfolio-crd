import React from "react";
import "../assets/css/Education.scss";

const graduations = [
  {
    name: "Análise e Desenvolvimento de Sistemas",
    by: "Descomplica",
    from: "2024",
    to: "Now",
    link: "",
  },
  {
    name: "CS50x",
    by: "Harvard",
    from: "2023",
    to: "2024",
    link: "",
  },
  {
    name: "CS50x",
    by: "Harvard",
    from: "2023",
    to: "2024",
    link: "",
  },
  {
    name: "CS50x",
    by: "Harvard",
    from: "2023",
    to: "2024",
    link: "",
  },
];

const Education = () => {
  return (
    <div id="container-education">
      <div className="timeline">
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
