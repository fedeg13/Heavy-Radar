import { useState, useEffect } from 'react';
import AlbumCard from '../components/AlbumCard';

function Home() {
  const [albumes, setAlbumes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = 'TU_API_KEY_AQUI'; // Pegá tu API Key de Last.fm aquí

  useEffect(() => {
    // Pedimos los álbumes más populares con la etiqueta 'metal'
    fetch(`https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=metal&api_key=${API_KEY}&format=json`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con Last.fm');
        return res.json();
      })
      .then((data) => {
        if (data.albums?.album) {
          setAlbumes(data.albums.album);
        } else {
          // Datos de respaldo por si no colocaste tu API Key
          setAlbumes([
            { name: 'Master of Puppets', artist: { name: 'Metallica' }, listeners: '3200000', url: 'https://www.last.fm', image: [{ '#text': '' }, { '#text': '' }, { '#text': 'https://upload.wikimedia.org/wikipedia/en/b/b2/Master_of_Puppets_cover.jpg' }] },
            { name: 'Rust in Peace', artist: { name: 'Megadeth' }, listeners: '1800000', url: 'https://www.last.fm', image: [{ '#text': '' }, { '#text': '' }, { '#text': 'https://upload.wikimedia.org/wikipedia/en/d/dc/Megadeth_-_Rust_in_Peace.jpg' }] },
            { name: 'Far Beyond Driven', artist: { name: 'Pantera' }, listeners: '1200000', url: 'https://www.last.fm', image: [{ '#text': '' }, { '#text': '' }, { '#text': 'https://upload.wikimedia.org/wikipedia/en/a/a3/PanteraFarBeyondDriven.jpg' }] },
            { name: 'From Mars to Sirius', artist: { name: 'Gojira' }, listeners: '950000', url: 'https://www.last.fm', image: [{ '#text': '' }, { '#text': '' }, { '#text': 'https://upload.wikimedia.org/wikipedia/en/2/28/Gojira_From_Mars_to_Sirius.jpg' }] }
          ]);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filtrado de álbumes en tiempo real según lo que escribe el usuario
  const albumesFiltrados = albumes.filter((album) => {
    const titulo = album.name.toLowerCase();
    const artista = (album.artist?.name || album.artist || '').toLowerCase();
    const query = busqueda.toLowerCase();
    return titulo.includes(query) || artista.includes(query);
  });

  return (
    <div className="page-container">
      <h2>🔥 Radar de Álbumes de Metal</h2>
      <p>Explorá los discos más influyentes del género en tiempo real.</p>

      {/* Buscador de Recursos */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Buscar por álbum o banda (ej: Metallica, Megadeth)..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {loading && <p>Cargando catálogo de álbumes...</p>}
      {error && <p style={{ color: '#f44336' }}>⚠️ {error}</p>}

      {!loading && (
        <div className="albums-grid">
          {albumesFiltrados.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;