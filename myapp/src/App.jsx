import './App.css'

function App() {
  return (
    <div>
      {/* Navegación Superior */}
      <nav className="navbar">
        <div className="logo">COSMOGUÍA</div>
        <ul className="nav-links">
          <li><a href="#constelaciones">Constelaciones</a></li>
          <li><a href="#planetas">Planetas</a></li>
          <li><a href="#galaxias">Galaxias</a></li>
          <li><a href="#observacion">Observación</a></li>
        </ul>
        <button className="btn-cta">Explorar el Cielo</button>
      </nav>

      {/* Sección Principal */}
      <main className="hero-container">
        <div className="hero-text">
          <p className="tagline">Guía de observación astronómica — Universo</p>
          <h1 className="title">
            El Misterio del <em>Cosmos,</em> de estrella en estrella <span>hasta la galaxia.</span>
          </h1>
          <p className="description">
            Cientomil millones de galaxias se extienden en el espacio observable: 
            un viaje estelar desde tu telescopio al anochecer hasta los confines de la Vía Láctea.
          </p>
        </div>

        {/* Cuadro Visual */}
        <div className="cosmos-card">
          <div className="orbit-line"></div>
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
        </div>
      </main>
    </div>
  )
}

export default App