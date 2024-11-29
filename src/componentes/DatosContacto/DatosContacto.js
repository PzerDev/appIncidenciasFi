import React, { useState } from 'react';
import './DatosContacto.css'; // Importamos el archivo CSS
import CopyToClipboardHTML from '../CopiarPortapapeles/CopiarPortapapeles.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import Routers from '../../Datos/Routers.js';
import ReactMarkdown from 'react-markdown';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// import DatosAdicionales from '../DatosAdicionales/DatosAdicionales.js';

let horasSeleccionar = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

let tecnologiaSeleccionar = [];


var horario;
function mostrarDiaSegunHora() {
  var horaActual = new Date();
  var hora = horaActual.getHours();
  // var dia = horaActual.getDate();
  // var mes = horaActual.getMonth() + 1;
  // var minutos = horaActual.getMinutes();
  // Obtenemos la hora actual

  // Establecemos el día a mostrar según la hora
  if (hora >= 9 && hora < 13) {
    horario = "Buenos días";
  } else if (hora >= 13 && hora < 20) {
    horario = "Buenas tardes";
  } else {
    horario = "Buenas noches";
  }

}


let acometidaObj = {
  onivia: ["M", "J", "X"],
  adamo: ["A"],
  finetwork: /^\d{4,5}$/,
  vodafoneTesa: /^\d{9}$/
}

const MiMarkDown = ({ markdownText, id }) => {
  const htmlContent = DOMPurify.sanitize(marked(markdownText));
  return <div id={id} dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};




function DatosContacto({ ticket }) {
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [contacto, setContacto] = useState('');
  const [correo, setCorreo] = useState('');

  const [idExternal, setExternalId] = useState('');

  // const [acometida, setAcometida] = useState('');
  // const [horaInicio, setHoraInicio] = useState('');
  //observaciones de notas
  const [observaciones, setObservaciones] = useState('Observaciones:');

  //Estados y eventos para Horas
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');

  const handleSelectHoraInicioChange = (event) => {
    setHoraInicio(event.target.value);
  };
  const handleSelectHoraFinChange = (event) => {
    setHoraFin(event.target.value);
  };

  //Estados y eventos para tecnologia y modelo router
  const [tecnologia, setTecnologia] = useState('Tecnología');
  const [routerFiltrado, setRouterFiltrado] = useState('Seleccionar router');
  // const [averia, setAveria] = useState('Seleccionar avería');
  // const [averiaSeleccionada, setAveriaSeleccionada] = useState('Especificar avería')
  const [luces, setLuces] = useState('');

  //Estados y eventos incidencias voz
  const [incidencia, setIncidencia] = useState('Seleccionar incidencia');
  const [incidenciaSeleccionada, setIncidenciaSeleccionada] = useState('Pasos a seguir según incidencia')
  const [afectado, setAfectado] = useState('');

  //Estados y eventos para nuevas direcciones
  const [nuevaDireccion, setNuevaDireccion] = useState('');

  const handleSelectTecnologiaChange = (event) => {
    setTecnologia(event.target.value);
    // console.log(acometidaFuncion())
  };

  const handleSelectRouterChange = (event) => {
    setRouterFiltrado(event.target.value);

    const foundRouter = Routers.find(router => router.router === event.target.value);

    if (foundRouter) {
      setLuces(foundRouter.luces);
    } else {
      setLuces("Router model not found.");
    }
  };

  const handleExternalIdChange = (event) => {
    setExternalId(event.target.value);
    // console.log(acometidaFuncion());

  };

  const handleSelectAveriaChange = (event) => {
    setIncidencia(event.target.value);
    setIncidenciaSeleccionada(ticket.averia[event.target.value][0]);
    setCorreo(ticket.averia[event.target.value][1]);
    correoEdit = ticket.averia[event.target.value][1];

  };

  const handleSelectVozChange = (event) => {
    setIncidencia(event.target.value);
    setIncidenciaSeleccionada(ticket.voz[event.target.value][0]);
    setCorreo(ticket.voz[event.target.value][1]);
    correoEdit = ticket.voz[event.target.value][1];

    // Texto para observaciones
    observacionesContenedor(ticket.voz[event.target.value][2]);
    setObservaciones(ticket.voz[event.target.value][2]);

  };

  const handleSelectAmazonChange = (event) => {
    setIncidencia(event.target.value);
    setIncidenciaSeleccionada(ticket.amazon[event.target.value][0]);
    setCorreo(ticket.amazon[event.target.value][1]);
    correoEdit = ticket.amazon[event.target.value][1];
  };

  const handleSelectSIMChange = (event) => {
    setIncidencia(event.target.value);
    setIncidenciaSeleccionada(ticket.sim[event.target.value]);
    setObservaciones(ticket.observaciones);
    // setCorreo(ticket.amazon[event.target.value][1]);
    // correoEdit = ticket.amazon[event.target.value][1];
  };


  //Lista de varibales a actualizar<
  let datosAdicionales = "";
  let acometidaSelecionada = "";
  let listaRouters = "";


  //Codigo para filtrar router por acometida y tecnologia
  function routersFiltradosFunc(valorAcometida, valorTecnologia) {
    return Routers.filter(dato => {
      return dato.acometida === valorAcometida && dato.tecnologia === valorTecnologia;
    });
  }

  //Código para filtrar la tecnología disponible segun acometida
  const tecnologiaUnica = () => {
    const tecnologiasUnicas = new Set();
    Routers.forEach(router => {
      if (acometidaSelecionada === router.acometida) {
        tecnologiasUnicas.add(router.tecnologia);
      }
    });

    // Convertir el Set en un arreglo si es necesario
    tecnologiaSeleccionar = [...tecnologiasUnicas];
  };

  //Codigo para filtrar averia

  // function averiaFiltradaFunc(valorAveria) {
  //   return ticket.averia.filter(dato => {
  //     return dato.acometida === valorAcometida && dato.tecnologia === valorTecnologia;
  //   });
  // }

  // function lucesRouterFunc(valorRouter, valorTecnologia) {
  //   return Routers.filter(dato => {
  //     return dato.acometida === valorAcometida && dato.tecnologia === valorTecnologia;
  //   });
  // }




  mostrarDiaSegunHora();

  // console.log(DatosAdicionales)

  let notaEdit = "";
  let correoEdit = "";



  if (ticket.nota) {

    notaEdit = ticket.nota.replace("{cliente}", nombre)
      .replace("{dni}", documento)
      .replace("{contacto}", contacto)
      .replace("{idorden}", idExternal)
      .replace("{inicio}", horaInicio)
      .replace("{fin}", horaFin)
      .replace("{router}", routerFiltrado)
      .replace("{luces}", luces)
      .replace("{incidenciaSeleccionada}", incidenciaSeleccionada)
      .replace("{afectado}", afectado)
      .replace("{incidencia}", incidencia)
      .replace("{horario}", horario)
      .replace("{nuevaDireccion}", nuevaDireccion)

    if (ticket.motivo === 'Avería / Incidencia Fibra - General' ||
      ticket.motivo === 'Móvil - Incidencia voz' ||
      ticket.motivo === 'Incidencia Promociones - Amazon Prime') {

      if (incidencia === 'ONT Alarmada') {

        let notaAmpliadaEdit = ticket.averia["ONT Alarmada"][1];
        correoEdit = notaAmpliadaEdit.replace("{contacto}", contacto)
          .replace("{idorden}", idExternal)
          .replace("{inicio}", horaInicio)
          .replace("{fin}", horaFin)
      } else {
        correoEdit = correo;
      }

    } else {
      correoEdit = ticket.correoPlantilla;
    }


    // ticket.motivo === 'Avería / Incidencia Fibra - General' ? correoEdit = correo : correoEdit = ticket.correoPlantilla;

  }


  function acometidaFuncion() {
    let primeraLetra = idExternal.substring(0, 1);
    if (primeraLetra === "M" || primeraLetra === "X" || primeraLetra === "J") {
      acometidaSelecionada = "Onivia";
    }
    else if (primeraLetra === "A") {
      acometidaSelecionada = "Adamo";
    }
    else if (acometidaObj.vodafoneTesa.test(idExternal)) {
      acometidaSelecionada = "Vodafone / Tesa";
      // masivo = Routers.getRange("N2").getValue();
    }
    else if (acometidaObj.finetwork.test(idExternal)) {
      acometidaSelecionada = "Finetwork";
    } else {
      acometidaSelecionada = "";
    }

    tecnologiaUnica();
    listaRouters = routersFiltradosFunc(acometidaSelecionada, tecnologia);
    return listaRouters
  }

  function observacionesContenedor(observaciones) {
    return <prev id='observaciones'>{observaciones}</prev>;
  }

  const notaCorreoContenedores = (

    <div id='notaCorreo'>
      <div id='contenedorNota'>
        <div className='pre'>
          <MiMarkDown markdownText={notaEdit} id="markdownNota"/>
        </div>
        {/* <pre type="text" dangerouslySetInnerHTML={{ __html: notaEdit}} placeholder="Nota para apertura de caso..." disabled ></pre> */}
        <CopyToClipboardHTML targetId="markdownNota" />
      </div>

      <div id='contenedorCorreo'>
        <div className='pre'>
            <MiMarkDown markdownText={correoEdit} id="markdownCorreo"/>
        </div>
        {/* <pre type="text" dangerouslySetInnerHTML={{ __html: notaEdit}} placeholder="Nota para apertura de caso..." disabled ></pre> */}
        <CopyToClipboardHTML targetId="markdownCorreo" />
      </div>
        {/* <pre type="text" dangerouslySetInnerHTML={{ __html: correoEdit}} placeholder="Nota para apertura de caso..." disabled ></pre> */}
      
    </div>

  )

  if (ticket.motivo === 'Avería / Incidencia Fibra - General') {

    acometidaFuncion();
    let listaAveria = Object.keys(ticket.averia);
    if (acometidaSelecionada === 'Vodafone / Tesa') {
      // Si es Vodafone/Tesa, conservamos los elementos específicos
      listaAveria = listaAveria.filter(averia => averia !== 'ONT Alarmada' || averia !== 'Masivo');
  
      // Si además la tecnología es Router HFC, solo conservamos "Masivo"
      if (tecnologia === 'Router HFC') {
          listaAveria = listaAveria.filter(averia => averia !== 'ONT Alarmada');
      }
  } else {
      // Si no es Vodafone/Tesa, eliminamos "ONT Alarmada" y "Masivo"
      listaAveria = listaAveria.filter(averia => averia !== 'ONT Alarmada' && averia !== 'Masivo');
  }
    // if (acometidaSelecionada !== 'Vodafone / Tesa') {
    //   let indice = [listaAveria.indexOf('ONT Alarmada'), listaAveria.indexOf('Masivo')];
      
    //   if (indice[0] !== -1 && indice[1] !== -1) {
    //     listaAveria.splice(indice[0], 1);
    //     listaAveria.splice(indice[1], 1);
    //     // console.log(lista); 
    //   }
    // }

    //       let observa = {
    //         cableRoto: `Observaciones:
    // - En este caso se debe cambiar el estado a Pendiente de cliente`,
    //         ontAlarmada: `
    //         `
    //       }

    datosAdicionales = (
      <>
        <div className='contenedor-input-datos-cliente'>
          <input type="text" value={idExternal} onChange={handleExternalIdChange} placeholder="External ID" />
          <input type="text" value={acometidaSelecionada} placeholder="Acometida" />
          {/* <input type="text" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} placeholder="horaInicio" /> */}
          <select className='hora-seleccionada' value={horaInicio} onChange={handleSelectHoraInicioChange}>
            <option key='Desde' value='Desde'>
              Desde
            </option>
            {horasSeleccionar.map((horaSel) => (
              <option key={horaSel} value={horaSel}>
                {horaSel}
              </option>
            ))}
          </select>
          <select className='hora-seleccionada' value={horaFin} onChange={handleSelectHoraFinChange}>
            <option key='Hasta' value='Hasta'>
              Hasta
            </option>
            {horasSeleccionar.map((horaSel) => (
              <option key={horaSel} value={horaSel}>
                {horaSel}
              </option>
            ))}
          </select>
        </div>

        <div className='contenedor-datos-router'>
          <select className='tecnologia-router' value={tecnologia} onChange={handleSelectTecnologiaChange}>
            <option key='Tecnología' value='Tecnología'>
              Tecnología
            </option>
            {tecnologiaSeleccionar.map((tecno) => (
              <option key={tecno} value={tecno}>
                {tecno}
              </option>
            ))}
          </select>
          <select className='tecnologia-router' value={routerFiltrado} onChange={handleSelectRouterChange}>
            <option key='Seleccionar router' value='Seleccionar router'>
              Seleccionar router
            </option>
            {listaRouters.map((rout) => (
              <option key={rout.router} value={rout.router}>
                {rout.router}
              </option>
            ))}
          </select>
          <select className='tecnologia-router' value={incidencia} onChange={handleSelectAveriaChange}>
            {/* <option key='Seleccionar avería' value='Seleccionar avería'>  
                Seleccionar avería
            </option> */}
            {listaAveria.map((aver) => (
              <option key={aver} value={aver}>
                {aver}
              </option>
            ))}
          </select>
        </div>

        {notaCorreoContenedores}

        {incidencia === 'Router / Cable roto' && observacionesContenedor(ticket.observaciones.cableRoto)}
        {incidencia === 'ONT Alarmada' && observacionesContenedor(ticket.observaciones.ontAlarmada)}

      </>

    )
  } else if (ticket.motivo === 'Móvil - Incidencia voz') {
    // acometidaFuncion();
    let listaIncidenciaVoz = Object.keys(ticket.voz);
    // document.querySelector('#observaciones').style.display = 'block';

    datosAdicionales = (
      <>
        <div className='contenedor-input-datos-cliente'>
          <select className='tecnologia-router incidencia-voz' value={incidencia} onChange={handleSelectVozChange}>
            {/* <option key='Seleccionar incidencia' value='Seleccionar incidencia'>  
                Seleccionar incidencia
            </option> */}
            {listaIncidenciaVoz.map((incid) => (
              <option key={incid} value={incid}>
                {incid}
              </option>
            ))}
          </select>
          <input type="text" value={afectado} onChange={(e) => setAfectado(e.target.value)} placeholder="Número afectado" />
        </div>

        {notaCorreoContenedores}

        {observacionesContenedor(observaciones)}
      </>
    )
  } else if (ticket.motivo === 'Incidencia Promociones - Amazon Prime') {
    // acometidaFuncion();
    let listaIncidenciaAmazon = Object.keys(ticket.amazon);

    datosAdicionales = (
      <>
        <div className='contenedor-input-datos-cliente'>
          <select className='tecnologia-router incidencia-voz' value={incidencia} onChange={handleSelectAmazonChange}>
            {/* <option key='Seleccionar incidencia' value='Seleccionar incidencia'>  
                Seleccionar incidencia
            </option> */}
            {listaIncidenciaAmazon.map((amaz) => (
              <option key={amaz} value={amaz}>
                {amaz}
              </option>
            ))}
          </select>
          <input type="text" value={afectado} onChange={(e) => setAfectado(e.target.value)} placeholder="Número afectado" />
        </div>

        {notaCorreoContenedores}

      </>
    )
  } else if (ticket.motivo === 'Modificar dirección de envío de SIM' ||
    ticket.motivo === 'Cambiar dirección de envío del regalo/terminal' ||
    ticket.motivo === 'Error dirección - Referencia Catastral'
  ) {
    // acometidaFuncion();
    datosAdicionales = (
      <>
        <div className='contenedor-input-datos-cliente'>
          <input type="text" value={nuevaDireccion} onChange={(e) => setNuevaDireccion(e.target.value)} placeholder="Nueva dirección" />
        </div>

        {notaCorreoContenedores}

      </>
    )
  } else if (ticket.subcategoria === 'Duplicado SIM') {
    let listaReemplazoSIM = Object.keys(ticket.sim);
    const regexRoboPerdida = /pérdida|robo/i;

    datosAdicionales = (
      <>
        <div className='contenedor-afectado-sim'>
          <div className='contenedor-input-datos-cliente'>
            <input type="text" value={afectado} onChange={(e) => setAfectado(e.target.value)} placeholder="Servicio afectado" />
          </div>
          <select className='tecnologia-router incidencia-voz' value={incidencia} onChange={handleSelectSIMChange}>
            {listaReemplazoSIM.map((reempl) => (
              <option key={reempl} value={reempl}>
                {reempl}
              </option>
            ))}
          </select>
        </div>
        <div className='contenedor-input-datos-cliente'>
          <input type="text" value={nuevaDireccion} onChange={(e) => setNuevaDireccion(e.target.value)} placeholder="Dirección de envío" />
        </div>

        {notaCorreoContenedores}
        {regexRoboPerdida.test(incidencia) && observacionesContenedor(observaciones)}

      </>
    )
  } else if (ticket.motivo === 'Técnico falta a cita') {

    let observa = `Consideraciones:
- Considerar que esté fuera de la franja horaria
- Estado de excepción (EE)
- Llamada en Hubspot del mismo día con tipificación Mobility y comentario de nuestros compañeros
- Asegurar con el cliente que el técnico NO le ha llamado`

    datosAdicionales = (
      <>
        {notaCorreoContenedores}
        <prev id='observaciones'>{observa}</prev>
      </>
    )

  }

  else {

    datosAdicionales = notaCorreoContenedores;

  }


  return (
    <div id='datosContacto'>

      <div className='contenedor-label-input-datos-cliente'>
        <div className='contenedor-label-datos-cliente'>
          <label>Datos de Cliente:</label>
        </div>
        <div className='contenedor-input-datos-cliente'>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
          <input type="text" value={documento} onChange={(e) => setDocumento(e.target.value)} placeholder="Documento de Identidad" />
          <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} placeholder="Número de contacto" />
        </div>
      </div>

      {datosAdicionales}

    </div>
  );
}

export default DatosContacto;

