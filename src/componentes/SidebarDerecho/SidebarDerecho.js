import React from "react";
import "./SidebarDerecho.css";

function SidebarDerecho({ isOpen, setIsOpen }) {
  return (
    <div className={`sidebar-derecho ${isOpen ? "active" : ""}`}>
      <button className="close-btn" onClick={() => setIsOpen(false)}>
        ×
      </button>
      <h2>Contenido del Sidebar</h2>
      <p>Aquí puedes colocar cualquier contenido adicional.</p>
    </div>
  );
}

export default SidebarDerecho;
