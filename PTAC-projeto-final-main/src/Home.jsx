import NavBar from "./componentes/NavBar";
import './style.css'

export default function Home(){
  const listalocalstorage = JSON.parse(localStorage.getItem("lista")) || [];
  return (
      <div>
        <NavBar />
        {listalocalstorage.map((video) => (
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
    );
}