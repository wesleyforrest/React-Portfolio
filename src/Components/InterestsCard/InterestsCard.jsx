import React from "react";
import "./InterestsCard.scss";

const InterestsCard = (props) => {
  const { hobby } = props;
  return (
    <div className="interest-card">
      <p className="interest-card__hobby">{hobby.hobbyName}</p>
    </div>
  );
};

export default InterestsCard;
