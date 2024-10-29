import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scene from './components/Scene';
import BoardPage from './components/BoardPage';
import ModeloCanvas from './components/ModeloCanvas';
import Pagina from './components/Pagina';
import './css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scene />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/modelo" element={<ModeloCanvas />} />
        <Route path="/pagina" element={<Pagina />} />
      </Routes>
    </Router>
  );
}

export default App;
