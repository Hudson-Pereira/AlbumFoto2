import React from "react";
import "./Card.css";

const Card = (props) => {
  const vaga = props.data;
  return (
    <div className="card">
      <div className="card-body">
        <img src={vaga.src.portrait} alt={vaga.src.portrait} />
        <h5 className="card-title">{vaga.photographer}</h5>
        <span id="span" className="badge bg-primary">
          {vaga.photographer_url}
        </span>
      </div>
    </div>
  );
};

export default Card;
