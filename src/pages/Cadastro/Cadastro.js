import React from "react";
import "./Cadastro.css";
import Api from "../../api/api";

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value;
    const regiao = evento.target.regiao.value;
    const altura = evento.target.altura.value;
    const peso = evento.target.peso.value;
    const imagemUrl = evento.target.imagemUrl.value;

    const vaga = {
      nome,
      altura: parseFloat(altura),
      peso: parseFloat(peso),
      regiao,
      imagemUrl,
    };

    try {
      const response = await Api.fetchPost(vaga);
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
              <h3>Cadastro de Pokemons</h3>
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
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Digite o Nome"
                  />
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="altura"
                    id="floatingaltura"
                    placeholder="Digite a Altura"
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
                    className="form-control"
                    name="peso"
                    id="floatingInput"
                    placeholder="Digite o Peso"
                  />
                  <label htmlFor="floatingInput">Peso</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="regiao"
                    id="floatingregiao"
                    placeholder="Digite a Regiao"
                  />
                  <label htmlFor="floatingregiao">Regiao</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    name="imagemUrl"
                    id="floatingimagem"
                    placeholder="Digite a URL da Imagem"
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

export default Cadastro;
