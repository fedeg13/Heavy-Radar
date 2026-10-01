import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🤘 Album Radar</div>
      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Sugerir Disco</Link>
      </div>
    </nav>
  );
}

export default Navbar;