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
    <div class="peblou">
      <h1>Videos</h1>
      <form onSubmit={salvar}>
        <input onChange={(e) => setCanal(e.target.value)} type="text" />
        <input onChange={(e) => setDescricao(e.target.value)} type="text" />
        <input onChange={(e)=> setVideo(e.target.value)} type="text/>"/>
        <input onChange={(e)=> setUrl(e.target.value)} type="text/>"/>
        <button>Incrementar</button>
      </form>
    </div>
  );
}
