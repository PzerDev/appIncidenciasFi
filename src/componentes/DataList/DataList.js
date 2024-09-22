import React, { useState } from 'react';
import './DataList.css'; // Importamos el archivo CSS
import datosTickets from '../../Datos/Datos.js'; // Importamos los datos de tickets
import DatosTickets from '../DatosTickets/DatosTickets.js';
import DatosApn from '../DatosApn/DatosApn.js';

function DataList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showLabels, setShowLabels] = useState(false); // New state
  const [showList, setShowList] = useState(false);
  // const [datosContacto, setDatosContacto] = useState(false);

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter options
    const filtered = datosTickets.filter(ticket =>
      ticket.motivo.toLowerCase().includes(query)
    );
    // setFilteredOptions(filtered); // Not needed if you only use searchResults

    // Update results and show/hide labels
    setSearchResults(filtered);
    setShowLabels(query !== ''); // Hide labels when input is empty

    if (query === '') {
      setShowList(false);
    } else {
      setShowList(true);
    }
  };

  const handleOptionSelect = (event) => {
    // Detener la propagaciÃ³n del evento (opcional)
    if (event && event.stopPropagation) {
      event.stopPropagation();
    }

    // Verificar si event.target es vÃ¡lido antes de acceder a innerText
    if (event.target && event.target.innerText) {
      setSearchQuery(event.target.innerText);
    } else {
      console.error('Error al obtener el texto del elemento seleccionado');
    }
    setShowList(false); // Ocultar la lista al seleccionar una opciÃ³n
    setShowLabels(true); // Show labels on selection
    
  };

  return (
    <>
      <div className="search-container">
        {/* Conditionally show all labels based on showLabels */}
        {showLabels && (
          <>
            <label htmlFor="incidenciaBusqueda">Incidencia seleccionada:</label>
            {/* Other labels if needed */}
          </>
        )}
        <input
          type="text"
          placeholder="Buscar incidencia..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        {showList && ( // Show list based on separate state (optional)
          <ul>
            {searchResults.map((result) => (
              <li key={result.motivo} onClick={handleOptionSelect}>
                {result.motivo}
              </li>
            ))}
          </ul>
        )}
      </div>

      {((searchQuery === 'Móvil - Configuración (APN, Búsqueda manual de redes, etc.), que no se pueda hacer en llamada') ? <DatosApn /> : <DatosTickets motivoSeleccionado={searchQuery} />)}

    </>
  );
}

export default DataList;