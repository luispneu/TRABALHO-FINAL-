import { useEffect, useState } from "react";
import './style.css';

export default function cadastrar() {
    const listalocalstorage = JSON.parse(localStorage.getItem("lista")) || [];
    const [lista, setLista] = useState(listalocalstorage);
    const [id, setid] = useState(1);
    const [canal, setCanal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url, setUrl] = useState("");
    const [video, setVideo] = useState("");

  useEffect(() => {
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista]);

  function salvar(e) {
    e.preventDefault();
    setLista([...lista, { canal: canal, id: id, descricao: descricao, url: url, video: video }]);
    setid(id + 1);
  }
  return (
    <div>
    <div className="peblou">
      <h1>Videos</h1>
      <form onSubmit={salvar}>
        <h2>Canal</h2>
        <input onChange={(e) => setCanal(e.target.value)} type="text" />
        <h2>Descrição</h2>        
        <input onChange={(e) => setDescricao(e.target.value)} type="text" />
        <h2>Nome do video</h2>
        <input onChange={(e)=> setVideo(e.target.value)} type="text/>"/>
        <h2>url</h2>
        <input onChange={(e)=> setUrl(e.target.value)} type="text/>"/>
        <br></br>
        <button>Adicionar</button>
      </form>
    </div>
    <div>

    </div>
    </div>
  );
}