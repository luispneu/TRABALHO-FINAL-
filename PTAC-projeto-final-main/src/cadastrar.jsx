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
          <input onChange={(e) => setVideo(e.target.value)} type="text" />
          <h2>url</h2>
          <input onChange={(e) => setUrl(e.target.value)} type="text" />
          <br></br>
          <button>Adicionar</button>
        </form>
      </div>

      <div>
        {lista.map((video) => (
          <div key={video.id}>
            <h1>canal: {video.canal}</h1>
            <h1>descricao: {video.descricao}</h1>
            <h1>Url: {video.url}</h1>
            <h1>video: {video.video}</h1>
            <iframe
              width="700"
              height="400"
              src={"https://www.youtube.com/embed/" + video.url.slice(17)}
              title="Rekoil | Ben 10 em Português Brasil | Cartoon Network"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
