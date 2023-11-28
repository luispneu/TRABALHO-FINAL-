import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <div>
      <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="white">
        <div class="bg-white p-4">
          <h5 className="text-body-emphasis h4">
            <img
              src="/img/botao-home.png"
              style={{ width: '45px ', height: '40px', borderRadius: '50%', marginBottom: '15px' }}
              alt="Botão Home"
            />
          </h5>
          <h2>
            <img
              src="/img/pra-cima.png"
              style={{ width: '45px', height: '40px', marginBottom: '15px' }}
            />
          </h2>
          <h3>
            <Link to="/cadastrar">
              <img
                src="img/adicionar.png"
                style={{ width: '45px', height: '40px' }}
              />
            </Link>
          </h3>
          <span class="text-body-secondary"></span>
        </div>
      </div>
      <nav class="navbar navbar-white bg-white">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <h1>Ben's Videos</h1>
    </div>
  );
}