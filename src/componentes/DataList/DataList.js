import React, { useState } from 'react';
import './DataList.css'; // Importamos el archivo CSS
import datosTickets from '../../Datos/Datos.js';
import DatosTickets from '../DatosTickets/DatosTickets.js';

function DataList() {
  let [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar incidencia..."
        value={searchQuery}
        onChange={handleInputChange}
        list="suggestions"
      />
      <datalist id="suggestions">

          {datosTickets.map((ticket) => (
            <option key={ticket.motivo} value={ticket.motivo} />
          ))}
        
      </datalist>

    </div>

    <DatosTickets motivoSeleccionado={searchQuery} />
    </>
  );
}

export default DataList;