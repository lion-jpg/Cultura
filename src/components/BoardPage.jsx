import React from 'react';
import { Link } from 'react-router-dom';
import Board from './Board';
import '../css/Scene.css';  // Añade esta línea

const BoardPage = () => {
  return (
    <div className="board-page">
      <div className="board-page-content">
        <div className="board-page-header">
          <h1>Eventos</h1>
          <Link to="/" className="back-button">Volver a la escena principal</Link>
        </div>
        <Board standalone={true} />
      </div>
    </div>
  );
};

export default BoardPage;
