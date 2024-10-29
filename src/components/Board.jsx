import React, { useEffect, useState } from 'react';
import '../css/Scene.css'; // Asegúrate de que la ruta sea correcta

const Board = ({ onClose, standalone = false }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://backend-culturas.elalto.gob.bo/api/teatro-eventos?populate=*');
        const data = await response.json();

        const eventsData = data.data.map(event => ({
          id: event.id,
          title: event.attributes.titulo_evento,
          description: event.attributes.descripcion_evento,
          imageUrl: event.attributes.imagen_evento?.data[0]?.attributes?.url
            ? `https://backend-culturas.elalto.gob.bo${event.attributes.imagen_evento.data[0].attributes.url}`
            : null
        })).filter(event => event.imageUrl !== null);

        setEvents(eventsData);
      } catch (error) {
        console.error('Error al cargar los eventos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className={`board-component ${standalone ? 'standalone' : ''}`}>
      <div className="board-event-grid">
        {events.map(event => (
          <div key={event.id} className="board-event-card">
            <img src={event.imageUrl} alt={event.title} className="board-event-image" />
            <div className="board-event-info">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
