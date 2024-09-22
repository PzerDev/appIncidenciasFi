import React, { useState } from 'react';
import './DatosContacto.css'; // Importamos el archivo CSS
import CopyToClipboard from 'react-copy-to-clipboard';
import Routers from '../../Datos/Routers.js';

// import DatosAdicionales from '../DatosAdicionales/DatosAdicionales.js';

let horasSeleccionar = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
                        '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

let tecnologiaSeleccionar = [];

var horario;
var horaActual = new Date();
var hora = horaActual.getHours();
var minutos = horaActual.getMinutes();
function mostrarDiaSegunHora() {
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
  finetwork: /^\d{5}$/,
  vodafoneTesa: /^\d{9}$/
}




function DatosContacto({ticket}) {
    const [nombre, setNombre] = useState('');
    const [documento, setDocumento] = useState('');
    const [contacto, setContacto] = useState('');

    const [idExternal, setExternalId] = useState('');
    // const [acometida, setAcometida] = useState('');
    // const [horaInicio, setHoraInicio] = useState('');


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
    const [averia, setAveria] = useState('Seleccionar avería');
    const [correo, setCorreo] = useState('');
    const [averiaSeleccionada, setAveriaSeleccionada] = useState('Especificar avería')
    const [luces, setLuces] = useState('');

    const handleSelectTecnologiaChange = (event) => {
      setTecnologia(event.target.value);
      console.log(acometidaFuncion())
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
      console.log(acometidaFuncion())
    };

    const handleSelectAveriaChange = (event) => {
      setAveria(event.target.value);
      setAveriaSeleccionada(ticket.averia[event.target.value][0]);
      setCorreo(ticket.averia[event.target.value][1]);
      correoEdit = ticket.averia[event.target.value][1];
      // actualizarNota(averiaSeleccionada);
      // console.log(averiaSeleccionada)
      // console.log(acometidaFuncion())
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
                      .replace("{averia}", averiaSeleccionada)
                      .replace("{horario}", horario)

      ticket.motivo === 'Avería / Incidencia Fibra - General' ? correoEdit = correo : correoEdit = ticket.correoPlantilla;
      
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
        acometidaSelecionada =  "";
      }
      
      tecnologiaUnica();
      listaRouters = routersFiltradosFunc(acometidaSelecionada, tecnologia);
      return listaRouters
    }

    if (ticket.motivo === 'Avería / Incidencia Fibra - General'){

      acometidaFuncion();
      let listaAveria = Object.keys(ticket.averia);



      // const routersFiltrados = () => {
      //   routers.filter(dato => {
      //     return (dato.acometida === acometidaSelecionada && dato.tecnologia === tecnologia)
      //   })
      // };
      
      


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
          <select className='tecnologia-router' value={averia} onChange={handleSelectAveriaChange}>
            <option key='Seleccionar avería' value='Seleccionar avería'>  
                Seleccionar avería
            </option>
            {listaAveria.map((aver) => (
              <option key={aver} value={aver}>
                {aver}
              </option>
            ))}
          </select>
        </div>

        </>
        
      )
    }
    // const handleClick = () => {
    //   let copiarBtnNota = document.querySelector('#copiarBtnNota');
    //   copiarBtnNota.addEventListener('click', () => {

    //     const texto = document.getElementById('miTexto');
    //     texto.select();
    //     document.execCommand('copy');
          
    //   });
    // }

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

      <div id='notaCorreo'>
        <div id='contenedorNota'>
          <textarea type="text" value={notaEdit} placeholder="Nota para apertura de caso..." disabled/>
          <CopyToClipboard text={notaEdit}>
            <button id="copiarBtnNota"><i className="material-icons">content_copy</i></button>
          </CopyToClipboard>
        </div>

        <div id='contenedorCorreo'>
          <textarea type="text" value={correoEdit} placeholder="Correo/Plantilla para envío..." disabled/>
          <CopyToClipboard text={correoEdit}>
            <button id="copiarBtnCorreo"><i className="material-icons">content_copy</i></button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default DatosContacto;

