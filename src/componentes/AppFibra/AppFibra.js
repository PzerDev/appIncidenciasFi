import React, { useState } from 'react';
import './AppFibra.css'; // Importamos el archivo CSS}
import CopyToClipboardHTML from '../CopiarPortapapeles/CopiarPortapapeles.js';
import { HoraInicioFin, MiMarkDown, horario } from '../DatosContacto/DatosContacto.js';
import datosFibra from '../../Datos/DatosFibra';
import Routers from '../../Datos/Routers.js';

let motivoAveria = [
  // 'Seleccionar motivo',
  'Sin servicio',
  'ONT Alarmada',
  'Cortes',
  'Velocidad',
  'Unir / Separar redes',
  'Router / Cable roto'
]

let lugarAveria = [
  'WIFI',
  'cable',
  'ambos'
]

let velocidadContratada = [
  // 'Velocidad contratada',
  '100Mbps', '300Mbps', '600Mbps', '1000Mbps'
]

let routerTec = [
  // 'Tecnología router',
  'FTTH',
  'HFC',
  'NEBA'
]

function AppFibra() {

  // const marcas = ['Xiaomi', 'Samsung', 'iPhone'];
  const [idExternal, setExternalId] = useState('');
  const [motivoAveriaFibra, setMotivoAveria] = useState('Seleccionar incidencia');
  const [velocidad, setVelocidad] = useState('Velocidad contratada');
  const [tecnologiaRouter, setTecnologiaRouter] = useState('');
  const [routerFiltrado, setRouterFiltrado] = useState('Seleccionar router');
  const [routersLista, setRoutersLista] = useState([]);
  const [luces, setLuces] = useState('');
  const [contacto, setContacto] = useState('');
  const sms = 'INFO: Para configurar internet y navegar sin problemas, consulta los pasos a seguir, conectado a wifi, en cliente.fi/apn - Si tienes dudas, llama al 1777.'
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('');


    //Estados y eventos para Horas
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
  
    const handleSelectHoraInicioChange = (event) => {
      setHoraInicio(event.target.value);
    };
    const handleSelectHoraFinChange = (event) => {
      setHoraFin(event.target.value);
    };





  const handleSelectMarcaChange = (even) => {
    setMarcaSeleccionada(even.target.value);
  }

  const handleExternalIdChange = (event) => {
    setExternalId(event.target.value);
  };

  const handleSelectAveriaChange = (event) => {
    setMotivoAveria(event.target.value);
    // setIncidenciaSeleccionada(ticket.averia[event.target.value][0]);
    // setCorreo(ticket.averia[event.target.value][1]);
    // correoEdit = ticket.averia[event.target.value][1];

  };

  const handleSelectVelocidadChange = (event) => {
    setVelocidad(event.target.value);

  };

  
  function routersFiltradosFunc(valorAcometida, valorTecnologia) {
    const resultado = Routers.filter((dato) => {
      return dato.acometida === valorAcometida && dato.tecnologia === `Router ${valorTecnologia}`;
    });
    return resultado || []; // Asegura que nunca sea undefined o null
  }
  
  // let routersLista = "";
  const handleSelectTecnologiaChange = (event) => {
    const nuevaTecnologia = event.target.value;
    setTecnologiaRouter(nuevaTecnologia);
  
    // Actualizar la lista filtrada
    const listaFiltrada = routersFiltradosFunc('Vodafone / Tesa', nuevaTecnologia);
    setRoutersLista(listaFiltrada);
  };
  
  //Codigo para filtrar router por acometida y tecnologia
  // routersLista = routersFiltradosFunc('Vodafone / Tesa', tecnologiaRouter)

  const handleSelectRouterChange = (event) => {
    setRouterFiltrado(event.target.value);

    const foundRouter = Routers.find(router => router.router === event.target.value);

    if (foundRouter) {
      setLuces(foundRouter.luces);
    } else {
      setLuces("Router model not found.");
    }
  };


  let notaHistorica = datosFibra.notaHistorica.replace("{idExternal}", idExternal)
       .replace("{motivoAveriaFibra}", motivoAveriaFibra)
       .replace("{velocidadContratada}", velocidad)
       .replace("{tecnologiaRouter}", tecnologiaRouter)
    // .replace("{inicio}", horaInicio)
    // .replace("{fin}", horaFin)
       .replace("{router}", routerFiltrado)
    // .replace("{luces}", luces)
    // .replace("{incidenciaSeleccionada}", incidenciaSeleccionada)
    // .replace("{afectado}", afectado)
    // .replace("{incidencia}", incidencia)
    // .replace("{horario}", horario)
    // .replace("{nuevaDireccion}", nuevaDireccion)

  let notaEscaladoApi = datosFibra.notaEscaladoApi.replace("{idExternal}", idExternal)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{contacto}", contacto)
  .replace("{inicio}", horaInicio)
  .replace("{fin}", horaFin)

  const notasFibra = (

    <div id='notasContenedor'>
      <div className='contenedorNotaEscalado'>
        <label>Nota Histórica</label>
        <div className='pre notaHistorica'>
          <MiMarkDown markdownText={notaHistorica} id="markdownNotaHistorica"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaHistorica" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>Nota Escalado API</label>
        <div className='pre notaEscalado'>
            <MiMarkDown markdownText={notaEscaladoApi} id="markdownNotaEscalado"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaEscalado" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>24h - Reclamo API</label>
        <div className='pre notaReclamoApi'>
            <MiMarkDown markdownText={datosFibra.notaReclamoApi} id="markdownNotaReclamoApi"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoApi" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>48h - Reclamo Outlook</label>
        <div className='pre notaReclamoOutlook'>
            <MiMarkDown markdownText={datosFibra.notaReclamoOutlook.cuerpo} id="markdownNotaReclamoOutlook"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoOutlook" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>72h - Reclamo Coordinación</label>
        <div className='pre notaReclamoCoord'>
            <MiMarkDown markdownText={datosFibra.notaReclamoCoord} id="markdownNotaReclamoCoord"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoCoord" />
      </div>
      
    </div>

  )


  return (
    <>
    <div id='datosNotasFibra'>
      
      <div className='contenedorNotasFibra'>

        <div className='contenedorTarifaFibra'>
            <input type="text" value={idExternal} onChange={handleExternalIdChange} placeholder="External ID" />

            <select className='tecnologia-router' value={velocidad} onChange={handleSelectVelocidadChange}>
              <option key='Velocidad contratada' value='Velocidad contratada'>  
                  Velocidad contratada
              </option>
              {velocidadContratada.map((aver) => (
                <option key={aver} value={aver}>
                  {aver}
                </option>
              ))}
            </select>

            <select className='tecnologia-router' value={tecnologiaRouter} onChange={handleSelectTecnologiaChange}>
              <option key='Tecnología router' value='Tecnología router'>  
                  Tecnología router
              </option>
              {routerTec.map((aver) => (
                <option key={aver} value={aver}>
                  {aver}
                </option>
              ))}
            </select>
        </div>

        <div className='contenedorRouterMotivo'>
            <select className='tecnologia-router' value={routerFiltrado} onChange={handleSelectRouterChange}>
              <option key='Seleccionar router' value='Seleccionar router'>  
                  Seleccionar router
              </option>
              {console.log("routersLista:", routersLista)}
              {routersLista.map((aver, index) => (
                <option key={index} value={aver.router}>
                  {aver.router}
                </option>
              ))}
            </select>

            <select className='tecnologia-router' value={motivoAveriaFibra} onChange={handleSelectAveriaChange}>
              <option key='Seleccionar motivo' value='Seleccionar motivo'>  
                  Seleccionar motivo
              </option>
              {motivoAveria.map((aver) => (
                <option key={aver} value={aver}>
                  {aver}
                </option>
              ))}
            </select>
        </div>



        <div className='contenedorContactoHoras'>
            <input type="text" value={contacto} 
                      onChange={(e) => {
                        let valor = e.target.value;
                        // Eliminar espacios
                        valor = valor.replace(/\s/g, '');
                    
                        // Si el número comienza con +34 o 34, eliminarlo
                        if (valor.startsWith('+34')) {
                          valor = valor.slice(3); // Eliminar los primeros 3 caracteres
                        } else if (valor.startsWith('34')) {
                          valor = valor.slice(2); // Eliminar los primeros 2 caracteres
                        }
                    
                        // Permitir solo números y limitar a 9 caracteres
                        if (/^\d*$/.test(valor) && valor.length <= 9) {
                          setContacto(valor); // Actualizar el estado solo con el número nacional
                        }}
                      } placeholder="Número de contacto" />

            <HoraInicioFin horaInicio={horaInicio} horaFin={horaFin} handleSelectHoraInicioChange={handleSelectHoraInicioChange} handleSelectHoraFinChange={handleSelectHoraFinChange} />
        </div>
        {notasFibra}

      </div>

    </div>

    
    </>
  );
}

export default AppFibra;
