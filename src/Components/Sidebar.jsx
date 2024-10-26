import React, { useState } from 'react';
import './Styles/Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Función para alternar el sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Cerrar' : 'Abrir'}
      </button>
      {isSidebarOpen && (
        <div className="sidebar-content">
          <h1>Sistema Único de Matrícula</h1>
          <div className="sidebar-buttons">
            <button className="sidebar-button">Inicio</button>
            <button className="sidebar-button">Mi información</button>
            <button className="sidebar-button">Mis asignaturas</button>
            <button className="sidebar-button">Matrícula en línea</button>
            <button className="sidebar-button">Plan de estudio</button>
            <button className="sidebar-button">Salir</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
