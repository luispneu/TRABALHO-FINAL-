import React, { useEffect, useState } from "react";
import NavBar from "./componentes/NavBar";
import './style.css';

export default function Cadastrar() {
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
      <NavBar />
      <div style={styles.videoContainer}>
        <form onSubmit={salvar} style={styles.videoCard}>
          <h2>Canal</h2>
          <input onChange={(e) => setCanal(e.target.value)} type="text" />
          <h2>Descrição</h2>
          <input onChange={(e) => setDescricao(e.target.value)} type="text" />
          <h2>Nome do vídeo</h2>
          <input onChange={(e) => setVideo(e.target.value)} type="text" />
          <h2>URL</h2>
          <input onChange={(e) => setUrl(e.target.value)} type="url" placeholder="https://example.com" pattern="https://.*" size="30" required />
          <br></br>
          <button>Adicionar</button>
        </form>
      </div>

      <div style={styles.videoContainer}>
        {lista.map((video) => (
          <div key={video.id} style={styles.videoCard}>
            <h1 style={styles.videoTitle}>Canal: {video.canal}</h1>
            <p style={styles.videoDescription}>Descrição: {video.descricao}</p>
            <iframe
              width="600"
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

const styles = {
  videoContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
  },
  videoCard: {
    margin: "20px",
    padding: "20px",
    background: "#333",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#FFF",
    textAlign: "left",
  },
  videoTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  videoDescription: {
    fontSize: "14px",
  },
};
