import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const VagaView = (props) => {
  const _id = props.match.params.id;
  const [vaga, setVaga] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    getVagaById();
  }, []);

  const getVagaById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    console.log(result);
    setVaga(result);
    console.log(vaga);
  };

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const response = await Api.fetchDelete(_id);
    const result = await response.json();
    alert(result.message);
    props.history.push("/");
  };

  return (
    <div className="container_home flex-grow-1">
      <div className="row">
        <div className="col">
          <img src={vaga.photos} />
          <h1 className="text-center mt-4">{vaga.nome}</h1>
          <div className="btn-group mt-3 w-100 d-flex align-items-center justify-content-center">
            <Link to={`/update/${vaga._id}`} className="btn btn-outline-info">
              Editar
            </Link>
            <button className="btn btn-outline-danger" onClick={onOpenModal}>
              Excluir
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Deseja realmente Excluir</h2>
        <button className="btn btn-danger" onClick={onCloseModal}>
          Não
        </button>
        <button className="btn btn-success" onClick={handleDelete}>
          Sim
        </button>
      </Modal>
    </div>
  );
};

export default VagaView;
