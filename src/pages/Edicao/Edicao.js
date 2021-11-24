import React, { useEffect, useState } from "react";
import Api from "../../api/api";
import "./Edicao.css";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // criacao do estado
  const [vaga, setVaga] = useState({});

  // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getVagaById();
  }, []);

  const getVagaById = async () => {
    // faz uma chamada para api para pegar o objeto de acordo com o id.
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    // atualizo o meu estado de acordo com o resultado.
    setVaga(result);
  };

  const handleFieldsChange = (event) => {
    // clono meu objeto do estado
    const campos = { ...vaga };
    // para cada input eu atualizo o seu respectivo valor no obj
    campos[event.target.nome] = event.target.value;

    // atualizo o meu estado com esse novo objeto.
    setVaga(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // faco uma copia do estado com obj atualizado.
    const vagaObj = { ...vaga };

    try {
      const response = await Api.fetchPut(vagaObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edicao da Pokemons</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.nome}
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o Nome"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    value={vaga.altura}
                    className="form-control"
                    name="altura"
                    id="floatingaltura"
                    placeholder="Digite o altura"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingaltura">Altura</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.peso}
                    className="form-control"
                    name="peso"
                    id="floatingInput"
                    placeholder="Digite a peso"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Peso</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    value={vaga.regiao}
                    className="form-control"
                    name="regiao"
                    id="floatingregiao"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingregiao">Regiao</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    value={vaga.imagemUrl}
                    className="form-control"
                    name="imagem"
                    id="floatingimagem"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingimagem">Imagem</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;
