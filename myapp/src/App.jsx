import React, { useState } from 'react'
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  // Función para desplazarse a cada sección al presionar los botones del menú
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Datos detallados con imágenes en alta resolución
  const secciones = [
    {
      id: 'constelaciones',
      title: 'Constelaciones del Zodíaco y Bóveda',
      tagline: 'Mapas Estelares',
      desc: 'Aprende a localizar Orión, la Mayor, Casiopea y las principales constelaciones visibles según la época del año y tu hemisferio.',
      infoExtra: 'Las constelaciones han servido como guía de navegación durante milenios. Para observarlas mejor, se recomienda alejarse de la luz urbana y utilizar un mapa o app de planisferio en tu teléfono.',
      img: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'planetas',
      title: 'Sistema Solar y Planetas',
      tagline: 'Cuerpos Celestes',
      desc: 'Observa en detalle los impresionantes anillos de Saturno, las lunas galileanas de Júpiter, los cráteres de la Luna y las fases de Venus.',
      infoExtra: 'Con un telescopio básico de 70mm a 90mm es posible apreciar los 4 satélites más grandes de Júpiter (Ío, Europa, Gánimedes y Calisto) y la división de Cassini en Saturno.',
      img: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'galaxias',
      title: 'Nebulosas y Cúmulos Estelares',
      tagline: 'Espacio Profundo',
      desc: 'Explora objetos lejanos como la Nebulosa de Orión (M42), la Galaxia de Andrómeda (M31) y el hermoso cúmulo abierto de Las Pléyades.',
      infoExtra: 'Los objetos de cielo profundo requieren cielos oscuros (Escala de Bortle 1-4) y visión periférica en el ocular para notar sus tenues estructuras gaseosas.',
      img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'observacion',
      title: 'Equipamiento y Consejos de Campo',
      tagline: 'Guía de Inicio',
      desc: 'Guía práctica para elegir tus primeros binoculares astronómicos o telescopios (Refractor vs. Reflector), filtros y oculares.',
      infoExtra: 'Recuerda dejar que tu vista se adapte a la oscuridad por al menos 20 minutos antes de observar y evita mirar la pantalla brillante de tu celular.',
      img: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className="app-container">
      {/* Navegación Superior */}
      <nav className="navbar">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          COSMOGUÍA
        </div>
        <ul className="nav-links">
          <li><button type="button" className="nav-btn" onClick={() => scrollToSection('constelaciones')}>Constelaciones</button></li>
          <li><button type="button" className="nav-btn" onClick={() => scrollToSection('planetas')}>Planetas</button></li>
          <li><button type="button" className="nav-btn" onClick={() => scrollToSection('galaxias')}>Galaxias</button></li>
          <li><button type="button" className="nav-btn" onClick={() => scrollToSection('observacion')}>Observación</button></li>
        </ul>
        <button type="button" className="btn-cta" onClick={() => setModalOpen(true)}>
          Explorar el Cielo
        </button>
      </nav>

      {/* Hero Section */}
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
          <div className="hero-buttons">
            <button type="button" className="btn-primary" onClick={() => scrollToSection('constelaciones')}>
              Ver Categorías
            </button>
            <button type="button" className="btn-secondary" onClick={() => setModalOpen(true)}>
              Iniciar Guía
            </button>
          </div>
        </div>

        <div className="cosmos-card">
          <div className="orbit-line"></div>
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
        </div>
      </main>

      {/* Secciones detalladas con imágenes e información adicional */}
      <section className="cards-section">
        <h2 className="section-title">Explora las Categorías Astronómicas</h2>
        <div className="grid-cards">
          {secciones.map((sec) => (
            <article key={sec.id} id={sec.id} className="info-card">
              <div className="image-wrapper">
                <img src={sec.img} alt={sec.title} className="card-image" />
                <span className="card-tag">{sec.tagline}</span>
              </div>
              <div className="card-content">
                <h3>{sec.title}</h3>
                <p className="main-desc">{sec.desc}</p>
                <div className="extra-info">
                  <strong>💡 Tip de observación:</strong>
                  <p>{sec.infoExtra}</p>
                </div>
                <button 
                  type="button" 
                  className="card-btn" 
                  onClick={() => setSelectedCard(sec)}
                >
                  Más Detalles
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal Principal (Explorar el Cielo) */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>🌌 ¡Bienvenido a la Bóveda Celeste!</h2>
            <p>
              Prepárate para tu próxima noche de observación astronómica. 
              Asegúrate de estar en un área con baja contaminación lumínica, verifica la fase lunar y alinea tu telescopio hacia el norte.
            </p>
            <button type="button" className="btn-close" onClick={() => setModalOpen(false)}>
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Modal Secundario (Detalles de la Tarjeta) */}
      {selectedCard && (
        <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCard.title}</h2>
            <img src={selectedCard.img} alt={selectedCard.title} className="modal-img" />
            <p>{selectedCard.desc}</p>
            <p className="modal-extra">{selectedCard.infoExtra}</p>
            <button type="button" className="btn-close" onClick={() => setSelectedCard(null)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App