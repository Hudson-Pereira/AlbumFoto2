import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";

const List = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    getVagas();
  }, []);

  const getVagas = async () => {
    const response = await Api.fetchGetAll();
    console.log(response);
    setVagas(response);
    console.log(vagas);
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {vagas.map((id, index) => (
        <Card data={id} key={index} />
      ))}
    </div>
  );
};

export default List;
