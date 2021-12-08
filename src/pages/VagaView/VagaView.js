import React, { useState, useEffect } from "react";
import Api from "../../api/api";
import "react-responsive-modal/styles.css";

const VagaView = (props) => {
  const _id = props.match.params.id;
  const [vaga, setVaga] = useState({});

  useEffect(() => {
    getVagaById();
  }, []);

  const getVagaById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setVaga(result);
    console.log(vaga.src.original);
    //   for (var prop in vaga.photos) {
    //     console.log(vaga.photos[prop].src.original);
    //   }
  };

  return (
    <div className="container_home flex-grow-1">
      <div className="row">
        <div className="col" id="img">
          <img id="gd" src={vaga.src.original} />
        </div>
      </div>
    </div>
  );
};

export default VagaView;
