import React, { useState } from 'react';
import './BarraNavegacion.css'; // Assuming you have a CSS file named Sidebar.css
import { BrowserRouter as Router, Routes, Route, Link }  from 'react-router-dom';
import Inicio from '../Inicio/Inicio';
import Calculadora from '../Calculadora/Calculadora';
import Roaming from '../Roaming/Roaming';
import { useNavigate } from 'react-router-dom';

const BarraNavegacion = ({ onLogout }) => {
  const [items, setItems] = useState([
    { icon: 'bx bx-home-alt icon', text: 'Inicio', pagina: '' },
    { icon: 'bx bx-calculator icon', text: 'Calculadora', pagina: '/calculadora' },
    { icon: 'bx bx-signal-5 icon', text: 'Roaming', pagina: '/roaming' },
    // ... Agrega más elementos aquí si quieres un valor inicial
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Limpiar cualquier dato de sesión (por ejemplo, authToken)
    localStorage.removeItem('authToken'); // Si usas localStorage
    // 2. Ejecutar el callback onLogout si es necesario
    if (onLogout) {
      onLogout();
    }
    // 3. Redirigir a la página de login o inicio
    navigate('/', { replace: true });
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
              {items.map((item, index) => (
                <li className="list" key={index}>
                  <Link to={item.pagina} className="nav-link">
                    <i className={item.icon} />
                    <span className="link">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bottom-cotent">
              {/* <li className="list">
                <a href="#" className="nav-link">
                  <i className="bx bx-cog icon"></i>
                  <span className="link">Ajustes</span>
                </a>
              </li> */}
              <li className="list">
                <button className="nav-link" onClick={handleLogout}>
                  <i className="bx bx-log-out icon"></i>
                  <span className="link">Cerrar sesión</span>
                </button>
              </li>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="" element={<Inicio />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/roaming" element={<Roaming />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
        {/* ... otras rutas ... */}
      </Routes>
      <section className="overlay" onClick={toggleSidebar}></section>
    </div>
  );
};

export default BarraNavegacion;