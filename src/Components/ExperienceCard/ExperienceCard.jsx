import React from "react";
import "./ExperienceCard.scss";
import employment from "../../assets/data/employment.js";

const ExperienceCard = (props) => {
  const { job } = props;
  return (
    <div className="experience-card">
      <div className="experience-card__table">
        <div className="experience-card__table-content">
          <p className="experience-card__job-info">
            {job.jobTitle} @ {job.employerName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
