import React, { useState } from 'react';
import './BarraNavegacion.css'; // Assuming you have a CSS file named Sidebar.css

const BarraNavegacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <i className="bx bx-menu menu-icon" onClick={toggleSidebar}></i>
          <span className="logo-name">appFi</span>
        </div>
        <div className="sidebar">
          <div className="logo">
            <i className="bx bx-menu menu-icon" onClick={toggleSidebar}></i>
            <span className="logo-name">appFi</span>
          </div>
          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="link">Inicio</span>
                </a>
              </li>
              {/* ... Add remaining list items here ... */}
            </ul>
            <div className="bottom-cotent">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-cog icon"></i>
                  <span className="link">Ajustes</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-log-out icon"></i>
                  <span className="link">Cerrar Sesión</span>
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <section className="overlay" onClick={toggleSidebar}></section>
    </div>
  );
};

export default BarraNavegacion;