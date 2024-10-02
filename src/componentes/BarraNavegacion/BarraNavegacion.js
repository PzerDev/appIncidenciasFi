import React, { useState } from 'react';
import './BarraNavegacion.css'; // Assuming you have a CSS file named Sidebar.css

const BarraNavegacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <i className="bx bx-menu menu-icon" onClick={toggleSidebar} />
        <span className="logo-name">CodingLab</span>
      </div>
      <div className="sidebar-content">
        <ul className="lists">
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-home-alt icon"></i>
              <span className="link">Dashboard</span>
            </a>
          </li>
          {/* ... Add more list items here ... */}
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-cog icon"></i>
              <span className="link">Settings</span>
            </a>
          </li>
          <li className="list">
            <a href="#" className="nav-link">
              <i className="bx bx-log-out icon"></i>
              <span className="link">Logout</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="overlay" onClick={toggleSidebar} />
    </nav>
  );
};

export default BarraNavegacion;