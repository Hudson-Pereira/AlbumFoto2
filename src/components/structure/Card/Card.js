import React from "react";
import "./Card.css";

const Card = (props) => {
  const photo = props.data;
  return (
    <div className="card">
      <div className="card-body">
        <img src={photo.src.portrait} alt={photo.src.portrait} />
        <h5 className="card-title">{photo.photographer}</h5>
        <span id="span" className="badge bg-primary">
          {photo.photographer_url}
        </span>
      </div>
    </div>
  );
};

export default Card;
