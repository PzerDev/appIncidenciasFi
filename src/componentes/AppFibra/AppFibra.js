import React, { useState, useRef, useEffect } from 'react';
import './AppFibra.css'; // Importamos el archivo CSS}
import CopyToClipboardHTML from '../CopiarPortapapeles/CopiarPortapapeles.js';
import { HoraInicioFin, horario, MiMarkDown } from '../DatosContacto/DatosContacto.js';
import datosFibra from '../../Datos/DatosFibra';
import Routers from '../../Datos/Routers.js';
import Procedimientos from '../../Datos/Procedimientos.js';
import '../SidebarDerecho/SidebarDerecho.css'

let motivoAveria = [
  // 'Seleccionar motivo',
  'Sin servicio',
  'ONT Alarmada',
  'Masiva',
  'Cortes',
  'Velocidad',
  'Cobertura',
  'Unir / Separar redes',
  'Router / Cable roto',
  'Error contraseña'
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

let estadoLucesCablesReset = {
  Luces: ``,
  Cables: ``,
  Reset: ``,
  "N/C": ``
}


function mostrarDiaSegunHora() {
  let horario;
  let horaActual = new Date();
  let hora = horaActual.getHours();
  // var mes = horaActual.getMonth() + 1;
  
  // Establecemos el día a mostrar según la hora
  if (hora >= 9 && hora < 13) {
  horario = "Buenos días";
  } else if (hora >= 13 && hora < 20) {
  horario = "Buenas tardes";
  } else {
  horario = "Buenas noches";
  }
  return horario;
}


function AppFibra() {

  // const marcas = ['Xiaomi', 'Samsung', 'iPhone'];
  const [idExternal, setExternalId] = useState('');
  const [velocidad, setVelocidad] = useState('Velocidad contratada');
  const [tecnologiaRouter, setTecnologiaRouter] = useState('');
  const [routerFiltrado, setRouterFiltrado] = useState('Seleccionar router');
  const [routersLista, setRoutersLista] = useState([]);
  const [objetoRouterSeleccionado, setObjetoRouterSeleccionado] = useState({}); 
  const [motivoAveriaFibra, setMotivoAveria] = useState('Seleccionar motivo');
  const [lugarAveriaInternet, setLugarAveriaInternet] = useState('Seleccionar medio');
  const [medioAveria, setMedioAveria] = useState(false);
  const [luces, setLuces] = useState('');
  const [lucesPermitidas, setLucesPermitidas] = useState([]);

  const [isDisabledRouter, setIsDisabledRouter] = useState(true);
  const [isDisabledMotivo, setIsDisabledMotivo] = useState(true);

  // Estado de cambio del select luces cables reset
  const [estadoLucesCablesResetFiltrado, setEstadoLucesCablesResetFiltrado] = useState('Comprobar');

  // Estado de compLuces, compCables, compReset
  const [compLuces, setCompLuces] = useState('');
  const [compCables, setCompCables] = useState('');
  const [compReset, setCompReset] = useState('');

  const [contacto, setContacto] = useState('');
  const sms = 'INFO: Para configurar internet y navegar sin problemas, consulta los pasos a seguir, conectado a wifi, en cliente.fi/apn - Si tienes dudas, llama al 1777.'
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('');


  // descripcionesLuces para luces
  const [descripcionesLuces, setDescripcionesLuces] = useState({});
  const [mostrarContenedor, setMostrarContenedor] = useState(true);


    //Estados y eventos para Horas
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
  
    const handleSelectHoraInicioChange = (event) => {
      setHoraInicio(event.target.value);
    };
    const handleSelectHoraFinChange = (event) => {
      setHoraFin(event.target.value);
    };


     // Manejar el cambio de selección en el dropdown
    const handleEstadoChange = (categoria, luz, estado) => {
      const descripcion = objetoRouterSeleccionado.estadoLuces[categoria][luz][estado];
      setDescripcionesLuces((prev) => ({
        ...prev,
        [`${categoria}-${luz}`]: descripcion || "Sin descripción.",
      }));
   
      // setCompLuces(`${luz}: ${estado}`)
      // let estadoPrevio = document.querySelector('#resultadoEstado').value;
      // document.querySelector('#resultadoEstado').value = estadoPrevio + `${luz}: ${estado}`;
      // setCompLuces(estadoPrevio ? estadoPrevio + ", " + `${luz}: ${estado}`: estadoPrevio)
      
      mostrarDiaSegunHora();
      
      // Actualiza el estado correspondiente
      switch (estadoLucesCablesResetFiltrado) {
        case 'Luces':
          const nuevoEstadoLuces = compLuces ? `${compLuces}, ${luz} ${estado}` : `${luz}: ${estado}`;
          setCompLuces(nuevoEstadoLuces);
          break;
        case 'Cables':
          const nuevoEstadoCables = compCables;
          setCompCables(nuevoEstadoCables);
          break;
        case 'Reset':
          const nuevoEstadoReset = compReset ? `${compReset}, ${luz} ${estado}` : `Tras reset ${luz} ${estado}`;
          setCompReset(nuevoEstadoReset);
          break;
        default:
          console.warn('Estado no reconocido:', estadoLucesCablesResetFiltrado);
      }
    };

  const handleExternalIdChange = (event) => {
    setExternalId(event.target.value);
  };

  const handleSelectAveriaChange = (event) => {
    setMotivoAveria(event.target.value);
    // setMostrarContenedor(event.target.value === 'Seleccionar motivo');

    if (event.target.value === 'Sin servicio' || event.target.value === 'Cortes' ||
        event.target.value === 'Velocidad' || event.target.value === 'Seleccionar motivo' ||
        event.target.value === 'Cobertura') {
      setMedioAveria(true);
      setLugarAveriaInternet('Seleccionar lugar');
      setMostrarContenedor(true);
      if (event.target.value === 'Seleccionar motivo' || 
          event.target.value === 'Cobertura'
      ) {
        setMedioAveria(false);
        setMostrarContenedor(true);
        if (event.target.value === 'Cobertura') {
          setMostrarContenedor(false);
        }
      }

      // if (event.target.value === 'Cortes' ||
      //     event.target.value === 'Velocidad' ||
      //     event.target.value === 'Cobertura') {
      //       setMostrarContenedor(false);
      //     }

    } else {
      setMedioAveria(false);
      setLugarAveriaInternet('')

      let lucesMotivo = {
        'ONT Alarmada': ['Alarm', 'Alarma', 'INTERNET'],
        'Router / Cable roto': ['POWER', 'Power']
      };
  
      const obtenerLucesPermitidas = (lugarAve) => {
        const clave = `${lugarAve}`;
        return lucesMotivo[clave] || [];
      };
  
      const lugarAve = event.target.value;
      const lucesPer = obtenerLucesPermitidas(lugarAve);
      setLucesPermitidas(lucesPer);
      setMostrarContenedor(false);
    }
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
    let nuevaTecnologia = event.target.value;
    setTecnologiaRouter(nuevaTecnologia);
    setRouterFiltrado('Seleccionar router');

      if (event.target.value !== 'Tecnología router') {
        setIsDisabledRouter(false);
      } else {
        setIsDisabledMotivo(true);
        setIsDisabledRouter(true);
        setMotivoAveria('Seleccionar motivo');
        setMedioAveria(false);
      }
    
  
    // Actualizar la lista filtrada
    const listaFiltrada = routersFiltradosFunc('Vodafone / Tesa', nuevaTecnologia === 'NEBA' ? nuevaTecnologia = 'FTTH' : nuevaTecnologia);
    setRoutersLista(listaFiltrada);
  };
  
  //Codigo para filtrar router por acometida y tecnologia
  // routersLista = routersFiltradosFunc('Vodafone / Tesa', tecnologiaRouter)

  const handleSelectRouterChange = (event) => {
    setRouterFiltrado(event.target.value);
    const routerSeleccionado = routersLista.find(objeto => objeto.router === event.target.value);
    setObjetoRouterSeleccionado(routerSeleccionado);
    
    if (event.target.value !== 'Seleccionar router') {
      setIsDisabledMotivo(false);
    } else {

      if (tecnologiaRouter === 'Tecnología Router') {
        setIsDisabledRouter(true);

      }
      setIsDisabledMotivo(true);
    }

    // setMostrarContenedor(event.target.value === 'Seleccionar router'); //Oculta el contenedor de las luces del router
    setDescripcionesLuces({}); // Limpia las descripciones


    const foundRouter = Routers.find(router => router.router === event.target.value);

    if (foundRouter) {
      setLuces(foundRouter.luces);
    } else {
      setLuces("Router model not found.");
    }
  };

  const handleSelectLugarAveriaChange = (event) => {
    setLugarAveriaInternet(event.target.value);

    if (motivoAveriaFibra === 'Sin servicio' && event.target.value !== 'Seleccionar lugar') {
      setMostrarContenedor(false);
    } else {
      setMostrarContenedor(true);
    }

    let lucesSinServicio = {
      'Sin servicio WIFI': ['WIFI', '2G', '5G', 'WiFi'],
      'Sin servicio cable': ['Ethernet', 'ETH', 'Eth', 'LAN'],
      'Sin servicio ambos': ['INTERNET', 'Alarm', 'PON', 'Online', 'Sincronizar', 'S', 'Alarma', '@', 'S']
    };

    const obtenerLucesPermitidas = (lugarAve) => {
      const clave = `Sin servicio ${lugarAve}`;
      return lucesSinServicio[clave] || [];
    };

    const lugarAve = event.target.value;
    const lucesPer = obtenerLucesPermitidas(lugarAve);
    setLucesPermitidas(lucesPer);
  }



  const handleEstadoLucesCablesResetChange = (event) => {
      setEstadoLucesCablesResetFiltrado(event.target.value);
      // console.log(estadoLucesCablesResetFiltrado)

      // Si comprobar está en comprobar
      if (event.target.value === 'N/C') {
        setCompCables('N/C');
        setCompLuces('N/C');
        setCompReset('N/C');
      } else if (event.target.value === 'Comprobar') {
        setCompCables('');
        setCompLuces('');
        setCompReset('');
      }
  }



  let notaHistorica = datosFibra.notaHistorica.replace("{idExternal}", idExternal)
       .replace("{motivoAveriaFibra}", motivoAveriaFibra)
       .replace("{velocidadContratada}", velocidad)
       .replace("{tecnologiaRouter}", tecnologiaRouter)
       .replace("{medioAveria}", lugarAveriaInternet+' ')
    // .replace("{fin}", horaFin)
       .replace("{router}", routerFiltrado)
       .replace("{luces}", compLuces)
       .replace("{cables}", compCables)
       .replace("{reset}", compReset)
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
  .replace("{luces}", compLuces)
  .replace("{cables}", compCables)
  .replace("{reset}", compReset)

  let notaReclamoApi = datosFibra.notaReclamoApi.replace("{idExternal}", idExternal)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{idAveriaApi}", 'idAveriaApi')
  .replace("{inicio}", horaInicio)
  .replace("{fin}", horaFin)

  let notaEscaladoAdjuntoAsunto = datosFibra.notaEscaladoAdjunto.asunto.replace("{idExternal}", idExternal)
  let notaEscaladoAdjunto = datosFibra.notaEscaladoAdjunto.cuerpo.replace("{idExternal}", idExternal)
  .replace("{adjuntoCliente}", 'adjuntoCliente')
  .replace("{idAveriaApi}", 'idAveriaApi')
  .replace("{horario}", mostrarDiaSegunHora)

  let notaReclamoOutlook = datosFibra.notaReclamoOutlook.cuerpo.replace("{idExternal}", idExternal)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{idAveriaApi}", 'idAveriaApi')
  .replace("{inicio}", horaInicio)
  .replace("{fin}", horaFin)
  .replace("{horario}", mostrarDiaSegunHora)

  // let notaReclamoCoord = datosFibra.notaReclamoCoord.replace("{idExternal}", idExternal)
  // .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  // .replace("{idAveriaApi}", 'idAveriaApi')
  // .replace("{inicio}", horaInicio)
  // .replace("{fin}", horaFin)

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
        <label>Nota Escalado Adjunto</label>
        <div className='pre notaEscalado'>
            <MiMarkDown markdownText={notaEscaladoAdjunto} id="markdownNotaEscaladoAdjunto"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaEscaladoAdjunto" />
        {/* <button onClick = {(e) => {
              // const mailto = `mailto:?subject=${encodeURIComponent(notaEscaladoAdjuntoAsunto)}&body=${encodeURIComponent(notaEscaladoAdjunto)}`;
              // Usa una URL específica para Outlook
              const outlookURL = `outlook://compose?subject=${notaEscaladoAdjuntoAsunto}&body=${notaEscaladoAdjunto}`;
              window.location.href = outlookURL;
        }}>Correo</button> */}
      </div>

      <div className='contenedorNotaEscalado'>
        <label>24h - Reclamo API</label>
        <div className='pre notaReclamoApi'>
            <MiMarkDown markdownText={notaReclamoApi} id="markdownNotaReclamoApi"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoApi" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>48h - Reclamo Outlook</label>
        <div className='pre notaReclamoOutlook'>
            <MiMarkDown markdownText={notaReclamoOutlook} id="markdownNotaReclamoOutlook"/>
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
  

  const LugarAveriaInternet = () => {

    return (
      <select className='tecnologia-router' value={lugarAveriaInternet} onChange={handleSelectLugarAveriaChange}>
        <option key='Seleccionar lugar' value='Seleccionar lugar'>  
            Seleccionar lugar
        </option>
        {lugarAveria.map((lugarAver) => (
          <option key={lugarAver} value={lugarAver}>
            {lugarAver}
          </option>
        ))}
      </select>
    );
  }

  

  const BotonesProcedimiento = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
  
    // Función para abrir o cerrar el sidebar
    const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  
    // Comprobar que 'motivoAveriaFibra' y 'lugarAveriaInternet' están definidos
    const motivoAveria = motivoAveriaFibra || "valor predeterminado";
    const lugarAveria = lugarAveriaInternet || "valor predeterminado";
  
    // Asegúrate de que 'Procedimientos' tiene las propiedades necesarias
    let procedimiento = { general: "Información no disponible", Observaciones: "" };

    if (medioAveria) {
      procedimiento = 
        Procedimientos[motivoAveria] && Procedimientos[motivoAveria][lugarAveria]
          ? Procedimientos[motivoAveria][lugarAveria]
          : procedimiento;
    } else {
      procedimiento = 
        Procedimientos[motivoAveria]
          ? Procedimientos[motivoAveria]
          : procedimiento;
    }
    
  
    return (
      <div className="contenedor-botones">
        {/* <button className="boton">Botón 1</button>
        <button className="boton">Botón 2</button> */}
        <button className="boton" onClick={toggleSidebar}>
          Ver Procedimiento
        </button>
  
        {/* Sidebar */}
        <div className={`sidebar-derecho ${isSidebarVisible ? "visible" : ""}`}>
          {(lugarAveria !== 'Seleccionar lugar' &&  medioAveria === true) && <h2>{motivoAveria} {lugarAveria}</h2>}
          {(lugarAveria === 'Seleccionar lugar' || medioAveria === false) && <h2>{motivoAveria}</h2>}
          
          {lugarAveria !== 'Seleccionar lugar' && 
            <MiMarkDown 
              markdownText={
                tecnologiaRouter === 'NEBA' 
                  ? procedimiento.NEBA || "Información no disponible" 
                  : procedimiento.general || "Información no disponible"
              }
              id="markdownProcedimiento"
              markdownText2={procedimiento.Observaciones || ""}
            />
          }

          {lugarAveria === 'Seleccionar lugar' && 
            <MiMarkDown 
              markdownText={
                tecnologiaRouter === 'NEBA' 
                  ? procedimiento.NEBA || "Información no disponible" 
                  : procedimiento.general || "Información no disponible"
              }
              id="markdownProcedimiento"
              markdownText2={procedimiento.Observaciones || ""}
            />
          }
        </div>
  
        {/* Overlay que se muestra cuando el sidebar está abierto */}
        {isSidebarVisible && (
          <div className="overlay-derecho" onClick={toggleSidebar}></div>
        )}
      </div>
    );
  };




  // Determina el estado y setter dinámico
  const estados = {
    Luces: { valor: compLuces, setValor: setCompLuces },
    Cables: { valor: compCables, setValor: setCompCables },
    Reset: { valor: compReset, setValor: setCompReset },
  };

  const { valor, setValor } = estados[estadoLucesCablesResetFiltrado] || {
    valor: "",
    setValor: () => {},
  };


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
            <select className='tecnologia-router' value={routerFiltrado} onChange={handleSelectRouterChange}
            disabled={isDisabledRouter}>
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

            <select
                className="tecnologia-router"
                value={motivoAveriaFibra}
                onChange={handleSelectAveriaChange}
                disabled={isDisabledMotivo}
              >
                <option key="Seleccionar motivo" value="Seleccionar motivo">
                  Seleccionar motivo
                </option>
                {motivoAveria
                  .filter((aver) => {
                    // Condición para saltar el elemento
                    const routersFiltrados = ["Sagemcom F@st3686", "Technicolor TC7230"];
                    if (
                      routersFiltrados.includes(routerFiltrado) &&
                      tecnologiaRouter === "HFC"
                    ) {
                      return aver !== "ONT Alarmada"; // Reemplaza con el valor que deseas omitir
                    }
                    return true; // Mostrar todos los demás
                  })
                  .map((aver) => (
                    <option key={aver} value={aver}>
                      {aver}
                    </option>
                  ))}
            </select>


            {medioAveria === true && <LugarAveriaInternet />}


            {console.log(objetoRouterSeleccionado)}
            
        </div>


        
        <div className={`contenedor-estado-luces-router ${mostrarContenedor ? '' : 'mostrar-contenedor'}`}>

              {objetoRouterSeleccionado?.estadoLuces &&
                Object.keys(objetoRouterSeleccionado.estadoLuces).map((categoria) => {
                  // Filtrar las luces permitidas de la categoría actual
                  const lucesFiltradas = Object.keys(objetoRouterSeleccionado.estadoLuces[categoria]).filter((luz) =>
                    lucesPermitidas.includes(luz)
                  );

                  // Solo continuar si hay luces permitidas en la categoría
                  if (lucesFiltradas.length === 0) return null;

                  return (
                    <div key={categoria} className="categoria">
                      <h2>{categoria.toUpperCase()}</h2>
                      <div className="contenedor-estado-luces">
                        {lucesFiltradas.map((luz) => (
                          <div key={luz} className="luz">
                            <h3>{luz}</h3>
                            <select
                              className="estado-select"
                              onChange={(e) => handleEstadoChange(categoria, luz, e.target.value)}
                            >
                              <option value="">Seleccionar estado</option>
                              {Object.entries(objetoRouterSeleccionado.estadoLuces[categoria][luz]).map(([estado]) => (
                                <option key={estado} value={estado}>
                                  {estado}
                                </option>
                              ))}
                            </select>
                            <p className="descripcion">
                              {descripcionesLuces[`${categoria}-${luz}`] || "Seleccione un estado para ver la descripción."}
                            </p>
                          </div>
                        ))}
                      </div>


                    </div>
                  );
                })}

                        <div className='contenedor-luces-cable-reset'>
                          {/* <input type="text" id='resultadoEstado'
                                  value={compLuces}
                                  onChange={(e) => {
                                      setCompLuces(e.target.value);
                                    }
                          } placeholder="Resultado de estado" /> */}

                          <input
                            type="text"
                            id="resultadoEstado"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)}
                            placeholder={`Resultado de estado (${estadoLucesCablesResetFiltrado})`}
                          />

                          {/* <ResultadoEstado tipo={estadoLucesCablesResetFiltrado} valor={valor} setValor={setValor} /> */}

                          <select className='tecnologia-router' value={estadoLucesCablesResetFiltrado} onChange={handleEstadoLucesCablesResetChange}>
                            <option key='Comprobar' value='Comprobar'>  
                                Comprobar
                            </option>
                            {console.log("routersLista:", estadoLucesCablesReset)}
                            {Object.keys(estadoLucesCablesReset).map((estado, index) => (
                              <option key={index} value={estado}>
                                {estado}
                              </option>
                            ))}
                          </select>
                      </div>
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

        {<BotonesProcedimiento />}
        {notasFibra}

      </div>

    </div>

    
    </>
  );
}

export default AppFibra;
