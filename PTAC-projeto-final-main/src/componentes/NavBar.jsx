import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-white bg-white fixed-top">
        <div className="container-fluid">
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="white">
              <div className="bg-white p-4">
                <h5 className="text-body-emphasis h4">
                  <Link to="/">
                    <img
                      src="/img/botao-home.png"
                      style={{ width: '45px ', height: '40px', borderRadius: '50%', marginBottom: '15px'  }}
                      alt="Botão Home"
                    />
                    </Link>
                </h5>
                <h2>
                  <Link to="/destaque">
                    <img
                      src="/img/pra-cima.png"
                      style={{ width: '45px', height: '40px', marginBottom: '15px' }}
                      alt="Ícone para cima"
                    />
                  </Link>
                </h2>
                <h3>
                  <Link to="/cadastrar">
                    <img
                      src="/img/adicionar.png"
                      style={{ width: '45px', height: '40px' }}
                      alt="Botão Adicionar"
                    />
                  </Link>
                </h3>
                <span className="text-body-secondary"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <h1 style={{ marginTop: '70px', paddingLeft: '20px' }}>Ben's Videos</h1>
    </div>
  );
}
