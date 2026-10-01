function AlbumCard({ album }) {
  // Extraemos la foto de mayor tamaño del arreglo de Last.fm
  const imagenUrl = album.image?.[6]?.['#text'] || 'https://via.placeholder.com/300?text=No+Cover';

  return (
    <div className="album-card">
      <img src={imagenUrl} alt={album.name} className="album-img" />
      <div className="album-info">
        <h3 className="album-title">{album.name}</h3>
        <p className="album-artist">👤 {album.artist?.name || album.artist}</p>
        <p className="album-detail">🎧 Oyentes: {Number(album.listeners || 0).toLocaleString()}</p>
        <p className="album-detail">🏷️ MBID: {album.mbid ? album.mbid.substring(0, 8) + '...' : 'N/A'}</p>
        <a href={album.url} target="_blank" rel="noreferrer" className="album-btn">
          Ver en Last.fm
        </a>
      </div>
    </div>
  );
}

export default AlbumCard;