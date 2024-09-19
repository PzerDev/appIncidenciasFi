import React, { useState } from 'react';
import './DatosTickets.css'; // Importamos el archivo CSS
import datosTickets from '../../Datos/Datos.js';
import DatosContacto from '../DatosContacto/DatosContacto.js';

function DatosTickets({motivoSeleccionado}) {

  // let [categoria, setCategoria] = useState('');
  // let [subcategoria, setSubcategoria] = useState('');
  // let [estadoTicket, setEstadoTicket] = useState('');
  // let [correoPlantilla, setCorreoPlantilla] = useState('');
  // let [nota, setNota] = useState('');


  let ticketSeleccionado = "";
  for (const ticket of datosTickets) {
    // Comparamos el motivo del ticket con el motivo buscado
    if (ticket.motivo === motivoSeleccionado) {
      // Si hay una coincidencia, retornamos el ticket completo
      ticketSeleccionado = ticket;
      break;
    } 
  }

  console.log(ticketSeleccionado)
  
  // setCategoria(ticketSeleccionado.categoria);
  // setSubcategoria(ticketSeleccionado.subcategoria);
  // setEstadoTicket(ticketSeleccionado.estadoTicket);
  // setCorreoPlantilla(ticketSeleccionado.correoPlantilla);
  // setNota(ticketSeleccionado.nota);


  return (
    <>
    <div id='datosTickets'>
      
      <div>
        <input type="text" value={ticketSeleccionado.categoria || ""} placeholder="Categoría" disabled/>
        <input type="text" value={ticketSeleccionado.subcategoria || ""} placeholder="Subcategoria" disabled/>
        <input type="text" value={ticketSeleccionado.estadoTicket || ""} placeholder="Estado del Ticket" disabled/>
      </div>

      {/* <div>
        <textarea type="text" value={ticketSeleccionado.nota || ""} placeholder="Nota..." />
        <textarea type="text" value={ticketSeleccionado.correoPlantilla || ""} placeholder="Correo..." />
      </div> */}

    </div>

    
    <DatosContacto ticket={ticketSeleccionado} />
    </>
  );
}

export default DatosTickets;
