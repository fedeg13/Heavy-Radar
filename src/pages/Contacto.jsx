import { useState } from 'react';

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    albumSugerido: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página [10]
    console.log('Formulario enviado con éxito:', form); // Requisito TPF [10]
    setEnviado(true);
    setForm({ nombre: '', email: '', albumSugerido: '' }); // Limpia los inputs [10]
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2>📩 Sugerir un Álbum</h2>
        <p>¿Falta algún clásico en nuestro radar? Envianos tu sugerencia.</p>

        {enviado && (
          <p style={{ color: '#4caf50', margin: '1rem 0' }}>
            ¡Gracias! Tu sugerencia ha sido registrada en la consola.
          </p>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <div className="form-group">
            <label>Tu Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Álbum y Banda Sugerida:</label>
            <textarea
              name="albumSugerido"
              rows="4"
              value={form.albumSugerido}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Sugerencia
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;