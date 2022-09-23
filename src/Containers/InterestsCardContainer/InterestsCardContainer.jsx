import React from "react";
import "./InterestsCardContainer.scss";
import InterestsCard from "../../Components/InterestsCard/InterestsCard";
import hobbies from "../../assets/data/hobbies";

const InterestsCardContainer = (props) => {
  const interestsJSX = hobbies.map((hobby) => {
    return <InterestsCard hobby={hobby} />;
  });
  return (
    <div className="interests-card-container">
      <div className="interests">
        <h2 className="interests-card-container__header interests-card-container__underline">
          Interests
        </h2>
      </div>
      <div className="interests-card">{interestsJSX}</div>
    </div>
  );
};

export default InterestsCardContainer;
