import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className="page-container" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <h1>⚡ 404 - Ruta no encontrada</h1>
      <p style={{ margin: '1.5rem 0' }}>Parece que te saliste del mapa de rutas metalero.</p>
      <Link to="/" className="album-btn">Volver al Inicio</Link>
    </div>
  );
}

export default Error404;