import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{vaga.nome}</h5>
          <span className="badge bg-primary">{vaga.regiao}</span>
          <img src={vaga.imagemUrl} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
