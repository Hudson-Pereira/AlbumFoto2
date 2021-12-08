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
    console.log(response); // requiscao do tipo GET para api
    // API retorna um array com dados
    setVagas(response);
    console.log(vagas); // atualizamos o nosso objeto do estado com o array vindo da api backend
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {vagas.map(
        (
          id,
          index // iterar o array de vagas e para cada vaga chamar um componente card
        ) => (
          <Card data={id} key={index} />
        )
      )}
      <div>
        <a href={`${vagas.next_page}`}>Proxima</a>
      </div>
    </div>
  );
};

export default List;
