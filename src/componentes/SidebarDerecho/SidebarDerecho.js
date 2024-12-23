import React, { useState } from 'react';
import './SidebarDerecho.css'; // Agrega estilos para la animación y el diseño
import { MiMarkDown } from '../DatosContacto/DatosContacto';
import AppFibra from '../AppFibra/AppFibra';

const SidebarDerecho = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app-sidebar">
      <button className="toggle-button-sidebar-derecho" onClick={toggleSidebar}>
        Ver Procedimiento
      </button>
      <div className={`sidebar-derecho ${isSidebarVisible ? 'visible' : ''}`}>
                <AppFibra />
      </div>
      {isSidebarVisible && (
        <div className="overlay-derecho" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default SidebarDerecho;
