import NavBar from "./componentes/NavBar";
import './style.css'

export default function Home(){
    const listalocalstorage = JSON.parse(localStorage.getItem("lista")) || [];
    return (
        <div>
          <NavBar />
          {listalocalstorage.map((video) => (
            <div key={video.id}>
              <p>canal: {video.canal}</p>
              <p>descricao: {video.descricao}</p>
              <p>Url: {video.url}</p>
              <p>video: {video.video}</p>
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