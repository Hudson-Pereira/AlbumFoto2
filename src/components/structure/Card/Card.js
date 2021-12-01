import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga.id}`} className="col">
      <div className="card">
        <div className="card-body">
          <img src={vaga.src.portrait} alt={vaga.src.portrait} />
          <h5 className="card-title">{vaga.photographer}</h5>
          <span id="span" className="badge bg-primary">
            {vaga.photographer_url}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
