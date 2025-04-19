import React, { useState, useRef, useEffect, useCallback } from 'react';
import './AppFibra.css';
import CopyToClipboardHTML from '../CopiarPortapapeles/CopiarPortapapeles.js';
import { HoraInicioFin, MiMarkDown } from '../DatosContacto/DatosContacto.js';
import datosFibra from '../../Datos/DatosFibra';
import Routers from '../../Datos/Routers.js';
import Procedimientos from '../../Datos/Procedimientos.js';
import '../SidebarDerecho/SidebarDerecho.css';
import MiMarkDownEfecto from '../MiMarkDown/MiMarkDown.js';
import Loader from '../Login/Loader.js';
import NotasProcedimientos from '../../Datos/NotasProcedimientos.js';
import TextareaAutosize from 'react-textarea-autosize';

let motivoAveria = [
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
  'Desactivar band steering',
  'Desperfecto',
  'Reubicación',
]

let lugarAveria = {
  general: ['WiFi', 'cable', 'ambos'],
  errorContrasena: ['router', 'WiFi'],
  cambiarContrasena: ['acceso router', 'redes WiFi'],
  desperfecto: ['general', 'TESA', 'no cliente'],
  reubicacion: ['general', 'TESA', 'seguimiento', 'escalado a coordinación']
}

let velocidadContratada = ['100Mbps', '300Mbps', '600Mbps', '1000Mbps']

let routerTec = ['FTTH', 'HFC', 'NEBA']

let estadoLucesCablesReset = {
  Luces: ``,
  Cables: ``,
  Reset: ``,
  "N/C": ``
}

let valorSubcategoria = {
  "Sin servicio": ["Avería banda ancha", "Net incomunicado - No conecta"],
  "ONT Alarmada": ["Avería banda ancha", "Net incomunicado - No conecta"],
  "Masiva": ["Avería banda ancha", "Net incomunicado - No conecta"],
  "Router roto": ["Avería banda ancha", "Net incomunicado - Equipo"],
  "Cable roto": ["Avería banda ancha", "Net incomunicado - Equipo"],
  "Cortes": ["Avería banda ancha", "Net mala calidad"],
  "Velocidad": ["Avería banda ancha", "Net mala calidad"],
  "Cobertura": ["Avería banda ancha", "Net mala calidad"],
  "Error contraseña": ["Avería banda ancha", "Net preventivo"],
  "Renombrar redes WiFi": ["Avería banda ancha", "Net preventivo"],
  "Desactivar band steering": ["Avería banda ancha", "Net preventivo"],
  "Cambiar contraeña": ["Avería banda ancha", "Net preventivo"],
  "Desperfecto": ["Reclamación banda ancha", "Interior / Exterior / TESA / Avería"]
}

function mostrarDiaSegunHora() {
  let horario;
  let horaActual = new Date();
  let hora = horaActual.getHours();
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
  const [loaderCargando] = useState(false);
  const [enlaceAveriaApi, setEnlaceAveriaApi] = useState('');
  const [idAveria, setIdAveria] = useState('');
  const [idFibra, setIdFibra] = useState('');
  const [idExternal, setExternalId] = useState('');
  const [velocidad, setVelocidad] = useState('');
  const [adjuntoCliente, setAdjuntoCliente] = useState('');
  const [tecnologiaRouter, setTecnologiaRouter] = useState('');
  const [refreshParams, setRefreshParams] = useState('');
  const [routerFiltrado, setRouterFiltrado] = useState('Especificar router');
  const [routersLista, setRoutersLista] = useState([]);
  const [objetoRouterSeleccionado, setObjetoRouterSeleccionado] = useState({});
  const [motivoAveriaFibra, setMotivoAveria] = useState('Seleccionar motivo');
  const [lugarAveriaInternet, setLugarAveriaInternet] = useState('');
  const [medioAveria, setMedioAveria] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDisabledRouter, setIsDisabledRouter] = useState(true);
  const [isDisabledMotivo, setIsDisabledMotivo] = useState(true);

  // Estado de cambio del select luces cables reset
  const [estadoLucesCablesResetFiltrado, setEstadoLucesCablesResetFiltrado] = useState('Estado');

  // Estado de compLuces, compCables, compReset
  const [compLuces, setCompLuces] = useState('');
  const [compCables, setCompCables] = useState('');
  const [compReset, setCompReset] = useState('');

  const [contacto, setContacto] = useState('');

  const [voEscalado, setVoEscalado] = useState('');
  let motivoAveriaEscalado = ''
  let lugarAveriaE = ''

  // descripcionesLuces para luces
  const [descripcionesLuces, setDescripcionesLuces] = useState({});
  const [ocultarLucesRouter, setOcultarLucesRouter] = useState(true);
  //Estados y eventos para Horas
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');

  const handleSelectHoraInicioChange = (event) => {
    setHoraInicio(event.target.value);
  };
  const handleSelectHoraFinChange = (event) => {
    setHoraFin(event.target.value);
  };

  //Estado del router
  const estadoRouter = useRef('Estado');
  const ultimaObservacionRef = useRef(null);

  // Manejar el cambio de selección en el dropdown
  const handleEstadoChange = (categoria, luz, estado) => {
    const descripcion = objetoRouterSeleccionado.estadoLuces[categoria][luz][estado];
    setDescripcionesLuces((prev) => ({
      ...prev,
      [`${categoria}-${luz}`]: descripcion || "Sin descripción.",
    }));

    actualizarEstado(luz, estado)
    mostrarDiaSegunHora();

    if (estado === '') {
    } else {
    }
    focusTextAreaResultadoEstado();

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
  };

  const handleSelectAveriaChange = (event) => {
    setMotivoAveria(event.target.value);
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
      if (event.target.value === 'Seleccionar motivo'
        || event.target.value === 'Cobertura'
      ) {
        setMedioAveria(false);
        setLugarAveriaInternet('WiFi');
      }
    } else {
      setMedioAveria(false);
      setLugarAveriaInternet('')
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

  const handleSelectTecnologiaChange = (event) => {
    let nuevaTecnologia = event.target.value;
    setTecnologiaRouter(nuevaTecnologia);

    const indiceBandSteering = motivoAveria.indexOf('Desactivar band steering');
    const indiceRenombrarRedes = motivoAveria.indexOf('Renombrar redes WiFi');
    if (indiceBandSteering !== -1 && indiceRenombrarRedes === -1) {
      motivoAveria[indiceRenombrarRedes] = 'Desactivar band steering';
    } else {
      motivoAveria[indiceBandSteering] = 'Renombrar redes WiFi';
    }

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
    setDescripcionesLuces({}); // Limpia las descripciones
  };

  const handleSelectLugarAveriaChange = (event, voEscalado) => {
    setLugarAveriaInternet(event.target.value);
    
    if (motivoAveriaFibra === 'Velocidad') {
      event.target.value === 'WiFi' || event.target.value === 'cable' || event.target.value === 'ambos' ?
        setAdjuntoCliente('test de velocidad realizado') :
        setAdjuntoCliente('');
    }
    
    // El estado voEscalado ya está actualizado por el useEffect
    if (estadoLucesCablesResetFiltrado === 'Reset') {
      verificaCambioAveriaParaReset('Reset', voEscalado);
    }
  };
  

  const handleEstadoLucesCablesResetChange = (event) => {
    setEstadoLucesCablesResetFiltrado(event.target.value);

    // Si Estado está en estado o está en N/C
    if (event.target.value === 'N/C') {
      setCompCables('N/C');
      setCompLuces('N/C');
      setCompReset('N/C');
      if (tecnologiaRouter === 'NEBA') {
        setRefreshParams(`- Refresh Params: N/C  `)
      };
    } else if (event.target.value === 'Estado') {
      setCompCables('');
      setCompLuces('');
      setCompReset('');
      if (tecnologiaRouter === 'NEBA') {
        setRefreshParams(`- Refresh Params:  `);
      }
    } else if (event.target.value === 'Reset' && tecnologiaRouter === 'NEBA') {
      setRefreshParams(`- Refresh Params: Ok  `)
    }

    console.log(observacionEscalado)
    verificaCambioAveriaParaReset(event.target.value, observacionEscalado)

    if (event.target.value !== 'Estado' && event.target.value !== 'N/C') {
      // Fuerza el focus incluso si el valor no ha cambiado
      estadoRouter.current.focus();
    }
  }

  // Desplaza la página hasta el final cuando se abre el contenedor de luces
  // useEffect(() => {
  //   if (!ocultarLucesRouter) {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: 'smooth',
  //     });
  //   }    
  // }, [ocultarLucesRouter]);

  const valorObservacionEscalado = useCallback(() => {
    let observacionEscalado = '';
    if (medioAveria) {
      observacionEscalado =
        NotasProcedimientos[motivoAveriaEscalado] && NotasProcedimientos[motivoAveriaEscalado][lugarAveriaE]
          ? NotasProcedimientos[motivoAveriaEscalado][lugarAveriaE]
          : observacionEscalado;
    } else {
      observacionEscalado =
        NotasProcedimientos[motivoAveriaEscalado]
          ? NotasProcedimientos[motivoAveriaEscalado]
          : observacionEscalado;
    }
    return observacionEscalado;
  }, [medioAveria, motivoAveriaEscalado, lugarAveriaE]);

  useEffect(() => {
    const observacionEscalado = valorObservacionEscalado(); 
    setVoEscalado(observacionEscalado);  // Actualizamos el voEscalado cada vez que cambian las dependencias
    
  }, [medioAveria, motivoAveriaEscalado, lugarAveriaE, valorObservacionEscalado]);


  const focusTextAreaResultadoEstado = () => {
    if (document.querySelector('#estadoComprobaciones').value !== 'Estado' &&
      document.querySelector('#estadoComprobaciones').value !== 'N/C') {
      estadoRouter.current.focus();
    }
  }

  const idEnlaceFibra = idFibra
    ? `[${idExternal}](https://new-groups-permissions.finetwork.com/services/fiber/${idFibra})`
    : idExternal;

  const enlaceApi = enlaceAveriaApi
    ? `[${idExternal}](${enlaceAveriaApi})`
    : idExternal;

  const motivoAveriaRegistrado = ((motivoAveriaFibra === 'Desactivar band steering' && (tecnologiaRouter === 'HFC' || routerFiltrado === 'ONT Nokia G010G-P y Router Sercomm W1-H500s')) ? 'Renombrar redes WiFi' : motivoAveriaFibra) || "Seleccionar motivo";
  motivoAveriaEscalado = motivoAveriaRegistrado
  lugarAveriaE = lugarAveriaInternet || "valor predeterminado";
  let observacionEscalado = valorObservacionEscalado();

  // Asegúrate de que 'Procedimientos' tiene las propiedades necesarias

  function verificaCambioAveriaParaReset(event, obEscalado) {
    if (event === 'Reset' && obEscalado) {
      const trimmedObservacion = obEscalado.trim();
      const estadosPrevios = [];

      // Si la observación es nueva, reemplazar la anterior (si existe)
      if (ultimaObservacionRef.current !== trimmedObservacion) {
        const nuevosEstados = estadosPrevios.filter(
          estado => estado !== ultimaObservacionRef.current
        );

        // Añadir el nuevo valor
        nuevosEstados.push(trimmedObservacion);
        setCompReset(nuevosEstados.join(", "));
        ultimaObservacionRef.current = trimmedObservacion;
      }
    }
  }

  let notaHistorica = datosFibra.notaHistorica.replace("{idExternal}", idEnlaceFibra)
    .replace("{motivoAveriaFibra}", motivoAveriaRegistrado)
    .replace("{velocidadContratada}", velocidad)
    .replace("{tecnologiaRouter}", tecnologiaRouter)
    .replace("{medioAveria}", lugarAveriaInternet + ' ')
    .replace("{router}", routerFiltrado)
    .replace("{luces}", compLuces)
    .replace("{cables}", compCables)
    .replace("{refresh}", refreshParams)
    .replace("{reset}", compReset)

  let notaEscaladoApi = datosFibra.notaEscaladoApi.replace("{idExternal}", enlaceApi)
    .replace("{motivoAveriaFibra}", motivoAveriaRegistrado)
    .replace("{medioAveria}", lugarAveriaInternet)
    .replace("{contacto}", contacto)
    .replace("{inicio}", horaInicio)
    .replace("{fin}", horaFin)
    .replace("{luces}", compLuces)
    .replace("{cables}", compCables)
    .replace("{refresh}", refreshParams)
    .replace("{reset}", compReset)

  let notaReclamoApi = datosFibra.notaReclamoApi.replace("{idExternal}", enlaceApi)
    .replace("{motivoAveriaFibra}", motivoAveriaRegistrado)
    .replace("{medioAveria}", lugarAveriaInternet)
    .replace("{observacionEscalado}", observacionEscalado)
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
    .replace("{motivoAveriaFibra}", motivoAveriaRegistrado)
    .replace("{medioAveria}", lugarAveriaInternet)
    .replace("{idAveriaApi}", idAveria)
    .replace("{inicio}", horaInicio)
    .replace("{fin}", horaFin)
    .replace("{horario}", mostrarDiaSegunHora)

  let notaEscaladoCoord = datosFibra.notaReclamoCoord.replace("{idExternal}", enlaceApi)
    .replace("{motivoAveriaFibra}", motivoAveriaRegistrado)
    .replace("{medioAveria}", lugarAveriaInternet)

  let notaBoFact = datosFibra.notaBoFacturacion.replace("{motivoAveriaFibra}", motivoAveriaRegistrado)
    .replace("{medioAveria}", lugarAveriaInternet)


  const notasFibra = (

    <div id='notasContenedor'>
      <div className='contenedorNotaEscalado'>
        <label>Nota Histórica</label>
        <div className='pre notaHistorica'>
          <MiMarkDown markdownText={notaHistorica} id="markdownNotaHistorica" />
        </div>
        <CopyToClipboardHTML targetId="markdownNotaHistorica" />
      </div>

      <div className='contenedorNotaEscalado'>

        <label>Nota Escalado API</label>
        <label style={{ fontWeight: "600", paddingLeft: "0" }}>{valorSubcategoria[motivoAveriaRegistrado]?.[0]}</label>

        <div className='pre notaEscalado'>
          <MiMarkDown markdownText={notaEscaladoApi} id="markdownNotaEscalado" />

          <div className='contenedor-sub-tipo'>
            <div className='sub-tipo'>{valorSubcategoria[motivoAveriaRegistrado]?.[1] === undefined ? 'Subtipo' : valorSubcategoria[motivoAveriaRegistrado]?.[1]}</div>
            <CopyToClipboardHTML
              targetId="markdownNotaEscalado"
            />
          </div>
        </div>

      </div>

      {adjuntoCliente &&
        <div className='contenedorNotaEscalado'>
          <label>Nota Escalado Adjunto</label>
          <div className='pre notaEscalado'>
            <MiMarkDown markdownText={notaEscaladoAdjunto} id="markdownNotaEscaladoAdjunto" />
          </div>
          <button
            id={`copiarBtn_NotaEscaladoAdjunto`}
            onClick={(e) => {
              const mailto = `mailto:?subject=${encodeURIComponent(notaEscaladoAdjuntoAsunto)}&body=${encodeURIComponent(notaEscaladoAdjunto)}`;
              window.location.href = mailto;
            }}
            onMouseDown={(e) => e.preventDefault()} // Evita comportamiento inesperado en botones
          >
            <i className='bx bx-mail-send'></i>
          </button>
        </div>
      }

      <div className='contenedorNotaEscalado'>
        <label>24h - Reclamo API</label>
        <div className='pre notaReclamoApi'>
          <MiMarkDown markdownText={notaReclamoApi} id="markdownNotaReclamoApi" />
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoApi" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>48h - Reclamo Outlook</label>
        <div className='pre notaReclamoOutlook'>
          <MiMarkDown markdownText={notaReclamoOutlook} id="markdownNotaReclamoOutlook" />
        </div>
        <button onClick={(e) => {
          // Usa una URL específica para Outlook
          const mailto = `mailto:?subject=${encodeURIComponent(notaReclamoOutlookAsunto)}&body=${encodeURIComponent(notaReclamoOutlook)}`;
          window.location.href = mailto;
        }}><i className='bx bx-mail-send'></i>
        </button>
      </div>

      <div className='contenedorNotaEscalado'>
        <label>72h - Reclamo Coordinación</label>
        <div className='pre notaReclamoCoord'>
          <MiMarkDown markdownText={notaEscaladoCoord} id="markdownNotaReclamoCoord" />
        </div>
        <CopyToClipboardHTML targetId="markdownNotaReclamoCoord" />
      </div>

      <div className='contenedorNotaEscalado'>
        <label>BO Facturación</label>
        <div className='pre notaBoFact'>
          <MiMarkDown markdownText={notaBoFact} id="markdownNotaBoFact" />
        </div>
        <CopyToClipboardHTML targetId="markdownNotaBoFact" />
      </div>

    </div>

  )


  const LugarAveriaInternet = () => {
    return (
      <select className='tecnologia-router' value={lugarAveriaInternet} onChange={(event) => {handleSelectLugarAveriaChange(event, observacionEscalado)}}>
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
  const motivoAveriaS = motivoAveriaRegistrado
  const lugarAveriaS = lugarAveriaInternet || "valor predeterminado";
  // Asegúrate de que 'Procedimientos' tiene las propiedades necesarias
  let procedimiento = { general: "Información no disponible", Observaciones: "" };
  if (medioAveria) {
    procedimiento =
      Procedimientos[motivoAveriaS] && Procedimientos[motivoAveriaS][lugarAveriaS]
        ? Procedimientos[motivoAveriaS][lugarAveriaS]
        : procedimiento;
  } else {
    procedimiento =
      Procedimientos[motivoAveriaS]
        ? Procedimientos[motivoAveriaS]
        : procedimiento;
  }

  const getMarkdownText = () => {
    if (
      motivoAveriaS === 'Error contraseña' ||
      motivoAveriaS === 'Cambiar contraseña' ||
      motivoAveriaS === 'Desperfecto' ||
      motivoAveriaS === 'Reubicación'
    ) {
      if (lugarAveriaS !== 'Seleccionar lugar') {
        return procedimiento || 'Información no disponible';
      } else {
        return 'Información no disponible';
      }
    } else if (motivoAveriaS === 'Desactivar band steering') {
      if (
        tecnologiaRouter !== 'HFC' &&
        (routerFiltrado === 'Sercomm Vox 3.0 fiber' ||
          routerFiltrado === 'Sercomm ONT L3 FG824CD')
      ) {
        return procedimiento.bandSteering || 'Información no disponible';
      } else {
        return procedimiento.general || 'Información no disponible';
      }
    } else if (tecnologiaRouter === 'NEBA') {
      if (motivoAveriaS === 'Renombrar redes WiFi' ||
        motivoAveriaS === 'Cable roto' ||
        motivoAveriaS === 'Router roto' ||
        motivoAveriaS === 'Masiva'
      ) {
        return procedimiento.general || 'Información no disponible';
      } else {
        return procedimiento.NEBA || 'Información no disponible';
      }
    } else {
      return procedimiento.general || 'Información no disponible';
    }
  };


  const BotonesProcedimientos = () => {
    const limpiarCampos = () => {
      document.querySelector('a[href="/appIncidenciasFi/build"]').click();
      setTimeout(() => {
        document.querySelector('a[href="/appIncidenciasFi/build/pruebasFi"]').click();
      }, 1);
    };


    return (
      <div className="contenedor-botones-procedimientos">

        <div className='botones-izquierda'>
          <button className="boton sin-fondo" onClick={limpiarCampos}>
            <i class='bx bx-trash' ></i>
          </button>
          {routerFiltrado !== 'Especificar router' && <button className={`boton ${ocultarLucesRouter ? 'sin-fondo' : 'fondo-boton'}`} onClick={() => {setOcultarLucesRouter(!ocultarLucesRouter); focusTextAreaResultadoEstado();}}>
            <i class='bx bx-sun'></i>
            <p>Luces</p>
          </button>}
          <a href="https://dashboard.finetwork.com/tickets/add" class="boton sin-fondo" target="_blank" rel="noopener noreferrer">
            <i class='bx bx-edit'></i>
            <p>Escalar</p>
          </a>
          {motivoAveriaFibra !== 'Seleccionar motivo' &&
            <button className={`boton ${isSidebarVisible ? 'fondo-boton' : 'sin-fondo'}`}
              onClick={() => { setSidebarVisible(!isSidebarVisible); focusTextAreaResultadoEstado() }}>
              <i class='bx bx-detail'></i>
              <p>Procedimiento</p>
            </button>}
        </div>

        <div className='botones-derecha'>
          <select id='estadoComprobaciones'
            className={ocultarLucesRouter === true ? `cambiar-radio-contenedor tecnologia-router` : 'tecnologia-router'} value={estadoLucesCablesResetFiltrado}
            onChange={handleEstadoLucesCablesResetChange}>
            <option key='Estado' value='Estado'>
              Estado
            </option>
            {Object.keys(estadoLucesCablesReset).map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>
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
    setValor: () => { },
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
        <div className="sidebar-derecho">
          <div className='sidebar-titulo'>
            <button className="close-button" onClick={() => { setSidebarVisible(false); focusTextAreaResultadoEstado() }}>
              <i class='bx bx-x'></i>
            </button>
            {(lugarAveriaS !== 'Seleccionar lugar' && medioAveria === true) && (
              <h2>{motivoAveriaS} {lugarAveriaS}</h2>
            )}
            {(lugarAveriaS === 'Seleccionar lugar' || medioAveria === false) && (
              <h2>{motivoAveriaS}</h2>
            )}
          </div>
          <MiMarkDownEfecto 
            markdownText={getMarkdownText()}
            id="markdownProcedimiento"
            markdownText2={procedimiento.Observaciones || ""}
            typingSpeed={0.1}
          />
        </div>

        <div className="main-content">
          <div id='datosNotasFibra'>

            {loaderCargando && <Loader text={"Cargando..."} />}

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
                    {
                      tecnologiaRouter === 'HFC'
                        ? motivoAveria
                          .map((aver) => (
                            <option key={aver} value={aver}>
                              {aver === 'Desactivar band steering'
                                ? 'Renombrar redes WiFi'
                                : aver}
                            </option>
                          ))
                          .slice(1)
                        : tecnologiaRouter !== 'HFC' &&
                          routerFiltrado === 'ONT Nokia G010G-P y Router Sercomm W1-H500s'
                          ? motivoAveria.map((aver) => (
                            <option key={aver} value={aver}>
                              {aver === 'Desactivar band steering'
                                ? 'Renombrar redes WiFi'
                                : aver}
                            </option>
                          ))
                          : motivoAveria.map((aver) => (
                            <option key={aver} value={aver}>
                              {aver}
                            </option>
                          ))
                    }

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
                      }
                    }
                    } placeholder="Número de contacto" />
                  <HoraInicioFin horaInicio={horaInicio} horaFin={horaFin} handleSelectHoraInicioChange={handleSelectHoraInicioChange} handleSelectHoraFinChange={handleSelectHoraFinChange} />
                </div>
              </div>
              {notasFibra}
              <div className={`contenedor-estado-luces-router mostrar-contenedor`}>

                <div className={ocultarLucesRouter ? `ocultar-luces-router` : 'mostrar-luces-router'}>
                  <button className="close-button"
                    onClick={() => {
                      setOcultarLucesRouter(true);
                      focusTextAreaResultadoEstado();
                    }}>
                    <i class='bx bx-x'></i>
                  </button>
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

                <div className='contenedor-luces-cable-reset'>
                  <TextareaAutosize
                    type="text"
                    id="resultadoEstado"
                    ref={estadoRouter}
                    maxRows={5}
                    // value={valor}
                    value={valor}
                    // onChange={(e) => setValor(e.target.value)}
                    onChange={(e) => manejarCambioInput(e.target.value)}
                    className={ocultarLucesRouter === true ? `cambiar-radio-contenedor` : ''}
                    placeholder={`Especificar estado de ${estadoLucesCablesResetFiltrado === 'Estado' ? '...' : estadoLucesCablesResetFiltrado}`}
                  />
                </div>
                {<BotonesProcedimientos />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AppFibra;