export default function NavBar() {

  return (
    <div>
      <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div class="bg-dark p-4">
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
            style={{width: '45px', height: '40px', marginBottom: '15px'}}
          />
          </h2>
          <h3>
          <img
            src="img/adicionar.png"
            style={{width: '45px', height: '40px'}}
          />
          </h3>
          <span class="text-body-secondary"></span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        Lets Videos
      </nav>
    </div>

  );
}