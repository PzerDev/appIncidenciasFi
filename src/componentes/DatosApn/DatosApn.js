import React, { useState } from 'react';
import './DatosApn.css'; // Importamos el archivo CSS}
import CopyToClipboard from 'react-copy-to-clipboard';
import apn from '../../Datos/apn';

function DatosApn() {

  const marcas = ['Xiaomi', 'Samsung', 'iPhone'];
  const sms = 'INFO: Para configurar internet y navegar sin problemas, consulta los pasos a seguir, conectado a wifi, en cliente.fi/apn - Si tienes dudas, llama al 1777.'
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
  // let [subcategoria, setSubcategoria] = useState('');
  // let [estadoTicket, setEstadoTicket] = useState('');
  // let [correoPlantilla, setCorreoPlantilla] = useState('');
  // let [nota, setNota] = useState('');
  const handleSelectMarcaChange = (even) => {
    setMarcaSeleccionada(even.target.value);
  }

  return (
    <>
    <div id='datosApn'>
      
      <div className='contenedorOpcionesApn'>
        {/* <div className='contenedorMensajeApn'>
          <label for="sms">Mensaje de Texto:</label>
          <input type="text" id="sms" value={sms} placeholder="SMS" disabled/>
        </div> */}
        <div id='contenedorSMS'>
            {/* <label>Mensaje de texto:</label> */}
            <textarea type="text" value={sms} placeholder="Sms para envío..." disabled/>
            <CopyToClipboard text={sms}>
                <button id="copiarBtnSMS"><i className="material-icons">content_copy</i></button>
            </CopyToClipboard>
        </div>

        <div className='contenedor-marca-apn'>
            <select className='marca-seleccionada' value={marcaSeleccionada} onChange={handleSelectMarcaChange}>
                <option key='Marca' value='Marca'>
                    Seleccionar Marca
                </option>
                {marcas.map((marca) => (
                <option key={marca} value={marca}>
                    {marca}
                </option>
                ))}
            </select>

            <div id='contenedorCorreoApn'>
                <textarea type="text" value={apn[`${marcaSeleccionada}`]} placeholder="Configuración APN según marcas..." disabled/>
                <CopyToClipboard text={apn[`${marcaSeleccionada}`]}>
                    <button id="copiarBtnConfigApn"><i className="material-icons">content_copy</i></button>
                </CopyToClipboard>
            </div>
        </div>
      </div>

      {/* <div>
        <textarea type="text" value={ticketSeleccionado.nota || ""} placeholder="Nota..." />
        <textarea type="text" value={ticketSeleccionado.correoPlantilla || ""} placeholder="Correo..." />
      </div> */}

    </div>

    
    </>
  );
}

export default DatosApn;
