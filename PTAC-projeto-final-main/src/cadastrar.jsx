import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ima2 from './ima2.png';
import './style.css';

export default function Todo() {
  const listalocalstorage = JSON.parse(localStorage.getItem("lista")) || [];
  const [lista, setLista] = useState(listalocalstorage);
  const [id, setid] = useState(1);
  const [herois, setHerois] = useState("");
  const [poder, setPoder] = useState("");

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { herois: herois, id: id, poder: poder }]);
    setid(id + 1);
  }

  const remover = (id) => {
    const listaAux = lista.filter((heroi) => heroi.id !== id);
    setLista(listaAux);
  };

  return (
    <div className="peblou">
      <h1>Herois</h1>
      <Link to="/home">
        <img src={ima2} alt="Imagem" width="100" height="50" />
      </Link>
      <form onSubmit={salvar}>
        <input onChange={(e) => setHerois(e.target.value)} type="text" />
        <input onChange={(e) => setPoder(e.target.value)} type="number" />
        <button>Incrementar</button>
      </form>
      {lista.map((heroi) => (
        <Link to={`/detalhe/${heroi.id}`}>
          <div key={heroi.id}>
            <p>ID: { }</p>
            <p>Herói: {heroi.herois}</p>
            <p>Poder: {heroi.poder}</p>
            <button onClick={() => remover(heroi.id)}>Apagar</button>
          </div>
        </Link>
      ))}
    </div>
  );
}
