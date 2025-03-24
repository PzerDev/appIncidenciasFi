import React, { useState, useRef, useEffect } from 'react';
import './AppFibra.css'; // Importamos el archivo CSS}
import CopyToClipboardHTML from '../CopiarPortapapeles/CopiarPortapapeles.js';
import { HoraInicioFin, horario, MiMarkDown } from '../DatosContacto/DatosContacto.js';
import datosFibra from '../../Datos/DatosFibra';
import Routers from '../../Datos/Routers.js';
import Procedimientos from '../../Datos/Procedimientos.js';
import '../SidebarDerecho/SidebarDerecho.css';
import Loader from '../Login/Loader.js';

let motivoAveria = [
  // 'Seleccionar motivo',
  'ONT Alarmada',
  'Sin servicio',
  'Cortes',
  'Velocidad',
  'Cobertura',
  'Router roto',
  'Cable roto',
  'Error contraseña',
  'Cambiar contraseña',
  'Masiva',
  // 'Unir / Separar redes',
  'Habilitar/Deshabilitar redes WiFi',
  'Desperfecto',
  'Reubicación'
]

let lugarAveria = {
  general: ['WiFi', 'cable', 'ambos'],
  errorContrasena: ['router', 'WiFi'],
  cambiarContrasena: ['acceso router', 'redes WiFi'],
  desperfecto: ['general', 'TESA', 'no cliente'],
  reubicacion: ['general', 'TESA']
}

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
  
  const [loaderCargando, setLoaderCargando] = useState(false); // Loader
  const [estadoLuces, setEstadoLuces] = useState([]); // Lista de estados
  const [resultado, setResultado] = useState(""); // Resultado concatenado
  // const marcas = ['Xiaomi', 'Samsung', 'iPhone']
  const [enlaceAveriaApi, setEnlaceAveriaApi] = useState('');
  const [idAveria, setIdAveria] = useState('');
  const [idFibra, setIdFibra] = useState('');
  const [idExternal, setExternalId] = useState('');
  const [velocidad, setVelocidad] = useState('');
  const [adjuntoCliente, setAdjuntoCliente] = useState('');
  const [tecnologiaRouter, setTecnologiaRouter] = useState('');
  const [refreshParams, setRefreshParams] = useState('');
  const [refreshOk, setRefreshOk] = useState('');
  const [routerFiltrado, setRouterFiltrado] = useState('Especificar router');
  const [routersLista, setRoutersLista] = useState([]);
  const [objetoRouterSeleccionado, setObjetoRouterSeleccionado] = useState({}); 
  const [motivoAveriaFibra, setMotivoAveria] = useState('');
  const [lugarAveriaInternet, setLugarAveriaInternet] = useState('');
  const [medioAveria, setMedioAveria] = useState(false);
  const [luces, setLuces] = useState('');
  const [lucesPermitidas, setLucesPermitidas] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

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
  // const [mostrarContenedor, setMostrarContenedor] = useState(true);
  const [ocultarLucesRouter, setOcultarLucesRouter] = useState(true);
  const [mostrarTodasLuces, setMostrarTodasLuces] = useState(true);


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
      actualizarEstado(luz, estado)
      mostrarDiaSegunHora();

      if (estado === '') {
        
      } else {

      }
      
    };

  const handleIdAveriaChange = (event) => {
    setIdAveria(event.target.value);
  };
  const handleEnlaceAveriaApiChange = (event) => {
    setEnlaceAveriaApi(event.target.value);
  };
  const handleIdFibraChange = (event) => {
    let valor = event.target.value;
  
    // Eliminar espacios
    valor = valor.replace(/\s/g, '');
  
    // Permitir solo números
    valor = valor.replace(/\D/g, '');

    // Limitar a 9 caracteres
    if (valor.length > 8) {
      valor = valor.slice(0, 8);
    }

    setIdFibra(valor);
  };
  const handleExternalIdChange = (event) => {
    let valor = event.target.value;
  
    // Eliminar espacios
    valor = valor.replace(/\s/g, '');
  
    // Permitir solo números
    valor = valor.replace(/\D/g, '');
  
    // Si el valor no está vacío y no comienza con '1', no permitir ingresarlo
    if (valor && !valor.startsWith('1')) {
      return;
    }
  
    // Limitar a 9 caracteres
    if (valor.length > 9) {
      valor = valor.slice(0, 9);
    }
    
      setExternalId(valor); // Actualizar el estado
    
    
    // setExternalId(event.target.value);
  };

  const handleSelectAveriaChange = (event) => {
    setMotivoAveria(event.target.value);
    // setMostrarContenedor(event.target.value === 'Seleccionar motivo');

    (event.target.value === 'Error contraseña' || event.target.value === 'Cambiar contraseña') ?
    setAdjuntoCliente('fotografía de etiqueta del router realizada') :
    setAdjuntoCliente('')
      

    if (event.target.value === 'Sin servicio' || event.target.value === 'Cortes' ||
        event.target.value === 'Velocidad' || event.target.value === 'Seleccionar motivo' ||
        event.target.value === 'Cobertura' || event.target.value === 'Error contraseña' ||
        event.target.value === 'Cambiar contraseña' || event.target.value === 'Desperfecto' || 
        event.target.value === 'Reubicación') {
      setMedioAveria(true);
      setLugarAveriaInternet('Seleccionar lugar');
      // setMostrarContenedor(true);
      if (event.target.value === 'Seleccionar motivo' 
        || event.target.value === 'Cobertura'
      ) {
        setMedioAveria(false);
        setLugarAveriaInternet('WiFi');
        // setMostrarContenedor(true);
        // if (event.target.value === 'Cobertura') {
        //   setMostrarContenedor(false);
        // }
      }

      // if (event.target.value === 'Cortes' ||
      //     event.target.value === 'Velocidad') {
      //       setMostrarContenedor(true);
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
      // setMostrarContenedor(false);
    }

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

    setRouterFiltrado('Especificar router');

      if (event.target.value !== 'Tecnología') {
        setIsDisabledRouter(false);
        setIsDisabledMotivo(false);
      } else {
        setIsDisabledRouter(true);
        setMotivoAveria('Seleccionar motivo');
        setMedioAveria(false);
      }
    
    nuevaTecnologia === 'NEBA' ? setRefreshParams(`- Refresh Params:  `) : setRefreshParams('');
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
    
    if (event.target.value !== 'Especificar router') {
      setIsDisabledMotivo(false);
    } else {

      if (tecnologiaRouter === 'Tecnología') {
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

    if (motivoAveriaFibra === 'Velocidad') {

      event.target.value === 'WiFi' || event.target.value === 'cable' || event.target.value === 'ambos' ?
          setAdjuntoCliente('test de velocidad realizado') :
          setAdjuntoCliente(''); 
    } 
    // else if (motivoAveriaFibra === 'Error contraseña' && event.target.value === 'router') {
    //     setAdjuntoCliente('fotografía de etiqueta del router realizada');
    // } 
    // else {
    //     setAdjuntoCliente('');
    // }


    let lucesSinServicio = {
      'Sin servicio WiFi': ['WIFI', '2G', '5G', 'WiFi'],
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

      // Si comprobar está en comprobar o está en N/C
      if (event.target.value === 'N/C') {
        setCompCables('N/C');
        setCompLuces('N/C');
        setCompReset('N/C');
        // setRefreshOk('N/C');
        if (tecnologiaRouter === 'NEBA') {
          setRefreshParams(`- Refresh Params: N/C  `)
        };
      } else if (event.target.value === 'Comprobar') {
        setCompCables('');
        setCompLuces('');
        setCompReset('');
        // setRefreshOk('');
        if (tecnologiaRouter === 'NEBA') {
          setRefreshParams(`- Refresh Params:  `);
        }
      } else if (event.target.value === 'Reset' && tecnologiaRouter === 'NEBA') {
        setRefreshParams(`- Refresh Params: Ok  `)
      }
  }

  const idEnlaceFibra = idFibra
  ? `[${idExternal}](https://dashboard.finetwork.com/services/fiber/${idFibra})`
  : idExternal;

  const enlaceApi = enlaceAveriaApi
  ? `[${idExternal}](${enlaceAveriaApi})`
  : idExternal;

  let notaHistorica = datosFibra.notaHistorica.replace("{idExternal}", idEnlaceFibra)
       .replace("{motivoAveriaFibra}", motivoAveriaFibra)
       .replace("{velocidadContratada}", velocidad)
       .replace("{tecnologiaRouter}", tecnologiaRouter)
       .replace("{medioAveria}", lugarAveriaInternet+' ')
       .replace("{router}", routerFiltrado)
       .replace("{luces}", compLuces)
       .replace("{cables}", compCables)
       .replace("{refresh}", refreshParams)
       .replace("{reset}", compReset)
    
  let notaEscaladoApi = datosFibra.notaEscaladoApi.replace("{idExternal}", enlaceApi)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{medioAveria}", lugarAveriaInternet)
  .replace("{contacto}", contacto)
  .replace("{inicio}", horaInicio)
  .replace("{fin}", horaFin)
  .replace("{luces}", compLuces)
  .replace("{cables}", compCables)
  .replace("{refresh}", refreshParams)
  .replace("{reset}", compReset)

  // let notaReclamoApiNuevo = datosFibra.notaReclamoApiNuevo.replace("{idExternal}", enlaceApi)
  // .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  // .replace("{medioAveria}", lugarAveriaInternet)
  // .replace("{idAveriaApi}", idAveria)
  // .replace("{inicio}", horaInicio)
  // .replace("{fin}", horaFin)
  // .replace("{contacto}", contacto)

  let notaReclamoApi = datosFibra.notaReclamoApi.replace("{idExternal}", enlaceApi)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{medioAveria}", lugarAveriaInternet)
  .replace("{idAveriaApi}", idAveria)
  .replace("{inicio}", horaInicio)
  .replace("{fin}", horaFin)

  let notaEscaladoAdjuntoAsunto = datosFibra.notaEscaladoAdjunto.asunto.replace("{idExternal}", idExternal)
  let notaEscaladoAdjunto = datosFibra.notaEscaladoAdjunto.cuerpo.replace("{idExternal}", idExternal)
  .replace("{adjuntoCliente}", adjuntoCliente)
  .replace("{idAveriaApi}", idAveria)
  .replace("{horario}", mostrarDiaSegunHora)

  let notaReclamoOutlookAsunto = datosFibra.notaReclamoOutlook.asunto.replace("{idExternal}", idExternal)
  let notaReclamoOutlook = datosFibra.notaReclamoOutlook.cuerpo.replace("{idExternal}", idExternal)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{medioAveria}", lugarAveriaInternet)
  .replace("{idAveriaApi}", idAveria)
  .replace("{inicio}", horaInicio)
  .replace("{fin}", horaFin)
  .replace("{horario}", mostrarDiaSegunHora)

  let notaEscaladoCoord = datosFibra.notaReclamoCoord.replace("{idExternal}", enlaceApi)
  .replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{medioAveria}", lugarAveriaInternet)

  let notaBoFact = datosFibra.notaBoFacturacion.replace("{motivoAveriaFibra}", motivoAveriaFibra)
  .replace("{medioAveria}", lugarAveriaInternet)


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

      {adjuntoCliente &&      
            <div className='contenedorNotaEscalado'>
              <label>Nota Escalado Adjunto</label>
              <div className='pre notaEscalado'>
                  <MiMarkDown markdownText={notaEscaladoAdjunto} id="markdownNotaEscaladoAdjunto"/>
              </div>
                <button
                  id={`copiarBtn_NotaEscaladoAdjunto`}
                    onClick = {(e) => {
                    const mailto = `mailto:?subject=${encodeURIComponent(notaEscaladoAdjuntoAsunto)}&body=${encodeURIComponent(notaEscaladoAdjunto)}`;
                    window.location.href = mailto;
              }}
                  onMouseDown={(e) => e.preventDefault()} // Evita comportamiento inesperado en botones
                >
                  <i className='bx bx-mail-send'></i>
                </button>
            </div>
      }

      {/* <div className='contenedorNotaEscalado'>
        <label>Reclamo API</label>
        <div className='pre notaReclamoApi'>
            <MiMarkDown markdownText={notaReclamoApiNuevo} id="markdownNotaReclamoApiNuevo"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoApiNuevo" />
      </div> */}

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
           <button onClick = {(e) => {
              // Usa una URL específica para Outlook
              const mailto = `mailto:?subject=${encodeURIComponent(notaReclamoOutlookAsunto)}&body=${encodeURIComponent(notaReclamoOutlook)}`;
              window.location.href = mailto;
            }}><i className='bx bx-mail-send'></i>
           </button>
      </div>

      <div className='contenedorNotaEscalado'>
        <label>72h - Reclamo Coordinación</label>
        <div className='pre notaReclamoCoord'>
            <MiMarkDown markdownText={notaEscaladoCoord} id="markdownNotaReclamoCoord"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoCoord" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>BO Facturación</label>
        <div className='pre notaBoFact'>
            <MiMarkDown markdownText={notaBoFact} id="markdownNotaBoFact"/>
        </div>
        <CopyToClipboardHTML targetId="markdownNotaBoFact" />
      </div>
      
    </div>

  )
  

  const LugarAveriaInternet = () => {

    return (
      <select className='tecnologia-router' value={lugarAveriaInternet} onChange={handleSelectLugarAveriaChange}>
        <option key='Seleccionar lugar' value='Seleccionar lugar'>  
            Seleccionar lugar
        </option>
          {motivoAveriaFibra === 'Error contraseña' && lugarAveria.errorContrasena.map((lugarAver) => (
            <option key={lugarAver} value={lugarAver}>
              {lugarAver}
            </option>
          ))}
          
          {motivoAveriaFibra === 'Cambiar contraseña' && lugarAveria.cambiarContrasena.map((lugarAver) => (
            <option key={lugarAver} value={lugarAver}>
              {lugarAver}
            </option>
          ))}

          {motivoAveriaFibra === 'Desperfecto' && lugarAveria.desperfecto.map((lugarAver) => (
            <option key={lugarAver} value={lugarAver}>
              {lugarAver}
            </option>
          ))}
          
          {motivoAveriaFibra === 'Reubicación' && lugarAveria.reubicacion.map((lugarAver) => (
            <option key={lugarAver} value={lugarAver}>
              {lugarAver}
            </option>
          ))}
        {(motivoAveriaFibra === 'Sin servicio' ||
          motivoAveriaFibra === 'Velocidad' ||
          motivoAveriaFibra === 'Cortes'
        ) 
          
          && lugarAveria.general.map((lugarAver) => (
          <option key={lugarAver} value={lugarAver}>
            {lugarAver}
          </option>
        ))}
      </select>
    );
  }

  // Comprobar que 'motivoAveriaFibra' y 'lugarAveriaInternet' están definidos
  const motivoAveriaS = motivoAveriaFibra || "Seleccionar motivo";
  const lugarAveriaS = lugarAveriaInternet || "valor predeterminado";
  // Asegúrate de que 'Procedimientos' tiene las propiedades necesarias
  let procedimiento = { general: "Información no disponible", Observaciones: "" };  
  if (medioAveria) {
    procedimiento = 
      Procedimientos[motivoAveriaS] && Procedimientos[motivoAveriaS][lugarAveriaS]
        ? Procedimientos[motivoAveriaS][lugarAveriaS]
        : procedimiento;
    console.log(procedimiento)
  } else {
    procedimiento = 
      Procedimientos[motivoAveriaS]
        ? Procedimientos[motivoAveriaS]
        : procedimiento;
  }

  // if (motivoAveriaFibra === 'Habilitar/Deshabilitar redes WiFi') {
  //   procedimiento = 
  //   (routerFiltrado === 'Sercomm Vox 3.0 fiber' || 'Sercomm ONT L3 FG824CD')
  //     ? Procedimientos['Habilitar/Deshabilitar redes WiFi'].bandSteering
  //     : Procedimientos['Habilitar/Deshabilitar redes WiFi'].general;
  // }

  const getMarkdownText = () => {
    if ((motivoAveriaS === 'Error contraseña' || motivoAveriaS === 'Cambiar contraseña' || motivoAveriaS === 'Desperfecto' || motivoAveriaS === 'Reubicación') && lugarAveriaS !== 'Seleccionar lugar') {
      return procedimiento;
    }
    if ((lugarAveriaS !== 'Seleccionar lugar' || lugarAveriaS === 'Seleccionar lugar') && (motivoAveriaS !== 'Habilitar/Deshabilitar redes WiFi')) {
      return tecnologiaRouter === 'NEBA'
        ? procedimiento.NEBA || "Información no disponible"
        : procedimiento.general || "Información no disponible";
    }
    if (motivoAveriaS === 'Habilitar/Deshabilitar redes WiFi') {
      return (routerFiltrado === 'Sercomm Vox 3.0 fiber' || routerFiltrado === 'Sercomm ONT L3 FG824CD')
        ? procedimiento.bandSteering || "Información no disponible"
        : procedimiento.general || "Información no disponible";
    }


    // if (motivoAveriaS === 'Habilitar/Deshabilitar redes WiFi') {
    //   if (routerFiltrado === 'Sercomm Vox 3.0 fiber' || routerFiltrado === 'Sercomm ONT L3 FG824CD') {
    //     motivoAveriaS = 'Deshabilitar band steering'
    //     let indice = motivoAveria.indexOf('Habilitar/Deshabilitar redes WiFi');
    //     motivoAveria[indice] = 'Deshabilitar band steering'
    //   }
    //   return (motivoAveriaS === 'Deshabilitar band steering')
    //     ? procedimiento.bandSteering || "Información no disponible"
    //     : procedimiento.general || "Información no disponible";
    // } else if (motivoAveriaS === 'Deshabilitar band steering') {
    //   if (routerFiltrado !== 'Sercomm Vox 3.0 fiber' && routerFiltrado !== 'Sercomm ONT L3 FG824CD') {
    //     motivoAveriaS = 'Habilitar/Deshabilitar redes WiFi'
    //     let indice = motivoAveria.indexOf('Deshabilitar band steering');
    //     motivoAveria[indice] = 'Habilitar/Deshabilitar redes WiFi'
    //   }
    //   return (motivoAveriaS === 'Habilitar/Deshabilitar redes WiFi')
    //     ? procedimiento.general || "Información no disponible"
    //     : procedimiento.bandSteering || "Información no disponible";
    // }



    // if (motivoAveriaS === 'Desperfecto' || motivoAveriaS === 'Reubicación') {
    //   console.log(procedimiento)
    //   return procedimiento
    // }
    return "Información no disponible";
  };


  const BotonesProcedimientos = () => {


    const limpiarCampos = () => {
      document.querySelector('a[href="/appIncidenciasFi/build"]').click();
      setTimeout(() => {
        document.querySelector('a[href="/appIncidenciasFi/build/pruebasFi"]').click();
        // setLoaderCargando(false);
      }, 1);
    };
    
  
    return (
      <div className="contenedor-botones-procedimientos">
        <button className="boton" onClick={limpiarCampos}>
          <i class='bx bx-trash' ></i>
        </button>
        <button className="boton" onClick={() => setOcultarLucesRouter(!ocultarLucesRouter)}>
            {/* {mostrarTodasLuces ? "Aplicar filtro" : "Mostrar todas las Luces"} */}
            <i class='bx bx-sun'></i>
        </button>
        <a href="https://dashboard.finetwork.com/tickets/add" class="boton" target="_blank">
          <i class='bx bx-edit'></i>
        </a>
        <button className="boton" onClick={() => setSidebarVisible(!isSidebarVisible)}>
          <i class='bx bx-detail'></i>
        </button>
  

  
    {/* HASTA AQUI */}

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




    // Código necesario para el input de las luces
      // Actualiza dinámicamente el valor seleccionado
      const actualizarEstado = (nombreLuz, nuevoEstado) => {
        const estadosPrevios = valor ? valor.split(", ") : [];
        const index = estadosPrevios.findIndex((item) => item.startsWith(`${nombreLuz} -`));

        if (index !== -1) {
          // Reemplaza el estado existente
          nuevoEstado === '' ? 
          estadosPrevios[index] = '' :
          estadosPrevios[index] = `${nombreLuz} - ${nuevoEstado}`;
        } else {
          // Agrega un nuevo estado
          estadosPrevios.push(`${nombreLuz} - ${nuevoEstado}`);
        }

        // Actualiza el estado dinámico
        const cadenaLimpia = estadosPrevios.filter(estado => estado).join(", ");
        setValor(cadenaLimpia);
      };

      // Maneja cambios manuales en el input
      const manejarCambioInput = (texto) => {
        // 1. Reemplazar múltiples espacios con un solo espacio
        const textoSinMultiplesEspacios = texto.replace(/\s+/g, ' ');
      
        // 2. Poner la primera letra en mayúscula
        const textoEnMayuscula = textoSinMultiplesEspacios.charAt(0).toUpperCase() + textoSinMultiplesEspacios.slice(1);
      
        setValor(textoEnMayuscula);
      };



  return (
    <>

    <div className={`app-container ${isSidebarVisible ? "sidebar-visible" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar-derecho">
        <div className='sidebar-titulo'>
            <button className="close-button" onClick={() => setSidebarVisible(false)}>
              <i class='bx bx-x'></i>
            </button>
            {(lugarAveriaS !== 'Seleccionar lugar' && medioAveria === true) && (
              <h2>{motivoAveriaS} {lugarAveriaS}</h2>
            )}
            {(lugarAveriaS === 'Seleccionar lugar' || medioAveria === false) && (
              <h2>{motivoAveriaS}</h2>
            )}
        </div>
        <MiMarkDown
          markdownText={getMarkdownText()}
          id="markdownProcedimiento"
          markdownText2={procedimiento.Observaciones || ""}
        />
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Todo el contenido principal aquí */}
    <div id='datosNotasFibra'>

      {loaderCargando && <Loader text={"Cargando..."}/>} 
      
      <div className='contenedorNotasFibra'>
        
        <div>
        <div className='contenedorTarifaFibra'>
          <input type="text" value={enlaceAveriaApi} onChange={handleEnlaceAveriaApiChange} placeholder="Enlace avería API" />
          <input type="text" value={idAveria} onChange={handleIdAveriaChange} placeholder="idAvería / externalServiceProblemId" />
          <input type="text" value={idFibra} onChange={handleIdFibraChange} placeholder="ID Fibra" />
          <input type="text" value={idExternal} onChange={handleExternalIdChange} placeholder="External ID" />

        </div>

        <div className='contenedorRouterMotivo'>
            <select className='tecnologia-router menor-ancho' value={velocidad} onChange={handleSelectVelocidadChange}>
              <option key='Velocidad' value='Velocidad'>  
                  Velocidad
              </option>
              {velocidadContratada.map((aver) => (
                <option key={aver} value={aver}>
                  {aver}
                </option>
              ))}
            </select>

            <select className='tecnologia-router menor-ancho' value={tecnologiaRouter} onChange={handleSelectTecnologiaChange}>
              <option key='Tecnología' value='Tecnología'>  
                  Tecnología
              </option>
              {routerTec.map((aver) => (
                <option key={aver} value={aver}>
                  {aver}
                </option>
              ))}
            </select>

            <select className='tecnologia-router' value={routerFiltrado} onChange={handleSelectRouterChange}
            disabled={isDisabledRouter}>
              <option key='Especificar router' value='Especificar router'>  
                  Especificar router
              </option>
              {/* {console.log("routersLista:", routersLista)} */}
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
                {motivoAveria.map((aver) => (
                  <option key={aver} value={aver}>
                    {aver}
                  </option>
                ))}

            </select>


            {medioAveria === true && <LugarAveriaInternet />}
            
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

        </div>

            {/* {<BotonesProcedimiento />} */}





        

        
        {/* <div className={`contenedor-estado-luces-router ${mostrarContenedor ? '' : 'mostrar-contenedor'}`}> */}
        <div className={`contenedor-estado-luces-router mostrar-contenedor`}>
             
             
             
        <div className='contenedor-luces-cable-reset'>
              <input
                type="text"
                id="resultadoEstado"
                // value={valor}
                value={valor}
                // onChange={(e) => setValor(e.target.value)}
                onChange={(e) => manejarCambioInput(e.target.value)}
                className={ocultarLucesRouter === true ? `cambiar-radio-contenedor` : ''}
                placeholder={`Resultado de estado (${estadoLucesCablesResetFiltrado})`}
              />

              {/* <ResultadoEstado tipo={estadoLucesCablesResetFiltrado} valor={valor} setValor={setValor} /> */}

              <select className={ocultarLucesRouter === true ? `cambiar-radio-contenedor tecnologia-router` : 'tecnologia-router'} value={estadoLucesCablesResetFiltrado} onChange={handleEstadoLucesCablesResetChange}>
                <option key='Comprobar' value='Comprobar'>  
                    Comprobar
                </option>
                {/* {console.log("routersLista:", estadoLucesCablesReset)} */}
                {Object.keys(estadoLucesCablesReset).map((estado, index) => (
                  <option key={index} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
          </div>
          


              <div className={ocultarLucesRouter ? `ocultar-luces-router` : 'mostrar-luces-router'}>
                {objetoRouterSeleccionado?.estadoLuces &&
                  Object.keys(objetoRouterSeleccionado.estadoLuces).map((categoria) => {
                    // Obtener todas las luces de la categoría actual
                    const todasLasLuces = Object.keys(objetoRouterSeleccionado.estadoLuces[categoria]);

                    // Solo continuar si hay luces
                    if (todasLasLuces.length === 0) return null;

                    return (
                      <div key={categoria} className="categoria">
                        <h2>{categoria.toUpperCase()}</h2>
                        <div className="contenedor-estado-luces">
                          {todasLasLuces.map((luz) => (
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
              </div>


              {<BotonesProcedimientos />}
          </div>

          

          {notasFibra}



        {/* Sidebar
        <div className={`sidebar-derecho ${isSidebarVisible ? "visible" : ""}`}>
          <button className="close-button" onClick={() => setSidebarVisible(false)}>X</button>
          {(lugarAveriaS !== 'Seleccionar lugar' &&  medioAveria === true) && <h2>{motivoAveriaS} {lugarAveriaS}</h2>}
          {(lugarAveriaS === 'Seleccionar lugar' || medioAveria === false) && <h2>{motivoAveriaS}</h2>}
          
          <MiMarkDown
            markdownText={getMarkdownText()}
            id="markdownProcedimiento"
            markdownText2={procedimiento.Observaciones || ""}
          />
        </div> */}
        
        {/* Overlay que se muestra cuando el sidebar está abierto */}
        {/* {isSidebarVisible && (
          <div className="overlay-derecho" onClick={() => setSidebarVisible(!isSidebarVisible)}></div>
        )} */}
        {/* {isSidebarVisible && <div className="overlay-derecho"></div>} */}

      </div>

    </div>
      </div>
    </div>



    

    
    </>
  );
}

export default AppFibra;
