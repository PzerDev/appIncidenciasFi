import React, { useState } from 'react';
import './BarraNavegacion.css'; // Importamos el archivo CSS

function BarraNavegacion() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle isOpen state on click
  };

  const handleClick = (section) => {
    // Handle click on each menu item (optional)
    console.log(`Clicked: ${section}`); // Replace with your desired logic
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}> {/* Class name based on state */}
        <div className="bx logo-details">
          <i className='bx bxs-wallet-alt'></i>
          <span className="logo_name">SendWallet</span>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => handleClick('Añadir')}>
              <i className='bx bx-plus'></i>
              <span className="link_name">Añadir</span>
            </a>
            {/* No need for sub-menu elements here */}
          </li>
          <li>
            <a onClick={() => handleClick('Tasa')}>
              <i className='bx bx-dollar-circle'></i>
              <span className="link_name">Tasa</span>
            </a>
            {/* No need for sub-menu elements here */}
          </li>
          <li>
            <a onClick={() => handleClick('Imagen')}>
              <i className='bx bx-image-alt'></i>
              <span className="link_name">Imagen</span>
            </a>
            {/* No need for sub-menu elements here */}
          </li>
          <li>
            <a onClick={() => handleClick('Swap')}>
              <i className='bx bx-expand-horizontal'></i>
              <span className="link_name">Swap</span>
            </a>
            {/* No need for sub-menu elements here */}
          </li>
          <li>
            <a href="#">
              <i className='bx bx-cog'></i>
              <span className="link_name">Ajustes</span>
            </a>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src="https://i.ibb.co/GcB8mmX/profile.jpg" alt="Perfil" />
              </div>
              <div className="name-job">
                <div className="profile_name">Rodolfo</div>
                <div className="job">Sesión Iniciada</div>
              </div>
              <i className='bx bx-log-out'></i>
            </div>
          </li>
        </ul>
      </div>
      <div className="bx-menu" onClick={toggleSidebar}> {/* Toggle button */}
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i> {/* Change icon based on state */}
      </div>
    </>
  );
}

export default BarraNavegacion;