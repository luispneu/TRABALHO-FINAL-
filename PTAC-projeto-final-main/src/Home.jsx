import React from "react";
import NavBar from "./componentes/NavBar";
import './style.css';

export default function Home() {
    const listalocalstorage = JSON.parse(localStorage.getItem("lista")) || [];
    
    return (
        <div>
            <NavBar />
            <div style={styles.videoContainer}>
                {listalocalstorage.map((video) => (
                    <div key={video.id} style={styles.videoCard}>
                        <h1 style={styles.videoTitle}>Canal: {video.canal}</h1>
                        <p style={styles.videoDescription}>Descrição: {video.descricao}</p>
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
