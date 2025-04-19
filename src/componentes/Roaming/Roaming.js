import React, { useState, useEffect } from 'react';
import './Roaming.css';
import RoamingDatos from '../../Datos/RoamingDatos';


function Roaming() {
  const [searchState, setSearchState] = useState({
    paisGlobal: '',
    paisGlobalDestino: '',
    searchQuery: '',
    searchQuery2: '',
    searchResults: [],
    searchResults2: [],
    showLabels: false,
    showLabels2: false,
    showList: false,
    showList2: false,
    inputPaisDestino: 0,
  });

  const [montoConsumo, setMontoConsumo] = useState(0);
  const [establecimientoConsumo, setEstablecimientoConsumo] = useState(0);
  const [unidadConsumo, setUnidadConsumo] = useState('€/mb');
  const [zonaPais, setZonaPais] = useState({ nZona: null, nPais: null });
  const [zonaPaisDestino, setZonaPaisDestino] = useState({ nZona: null, nPais: null });
  // const [etiquetaZona, setEtiquetaZona] = useState('');
  const [tipoConsumo, setTipoConsumo] = useState('Datos');
  const [observaciones, setObservaciones] = useState('No');

  const zonas = RoamingDatos[tipoConsumoGlobal[tipoConsumo]];

  useEffect(() => {
    // Actualizar zona y país con función común
    const updateZonaPais = (pais, setZonaPaisCallback) => {
      const indiceZona = Object.keys(zonas).findIndex(zona =>
        zonas[zona].paises.some(p => p === pais)
      );

      if (indiceZona !== -1) {
        const nZona = Object.keys(zonas)[indiceZona];
        const nPais = zonas[nZona].paises.indexOf(pais);
        setZonaPaisCallback({ nZona, nPais });
      }
    };

    if (searchState.paisGlobal) {
      updateZonaPais(searchState.paisGlobal, setZonaPais);
    }

    if (searchState.paisGlobalDestino) {
      updateZonaPais(searchState.paisGlobalDestino, setZonaPaisDestino);
    }

  }, [zonas, searchState.paisGlobal, searchState.paisGlobalDestino]);

  useEffect(() => {
    if (tipoConsumo === 'Datos' && zonaPais.nZona && RoamingDatos.datos?.[zonaPais.nZona]) {
      const data = RoamingDatos.datos[zonaPais.nZona];
      const { paisGlobal, paisGlobalDestino } = searchState;
      
      // Si paisGlobal está vacío, no es necesario continuar con más lógica
      if (!paisGlobal) {
        setMontoConsumo(0);
        setEstablecimientoConsumo(0);
      } else {
        // Establecer el monto
        setMontoConsumo(data.precio);
      
        // Establecer el establecimiento
        setEstablecimientoConsumo(paisGlobalDestino === '' ? 0 : data.establecimientoConsumo);
      
        // Establecer observaciones según la zona
        setObservaciones(zonaPais.nZona === 'zona1' ? data.observaciones : 'No');
      }
      
      setUnidadConsumo(data.unidad);
      
    } else if (tipoConsumo === 'Llamadas' && zonaPais.nZona && RoamingDatos["Llamadas, SMS"]?.[zonaPais.nZona]) {
      const llamadas = RoamingDatos["Llamadas, SMS"][zonaPais.nZona].llamadasIn;
      const { paisGlobal } = searchState;
      
      // Si paisGlobal está vacío, se establece en 0, de lo contrario se usa el valor de llamadas
      if (!paisGlobal) {
        setMontoConsumo(0);
        setEstablecimientoConsumo(0);
        setObservaciones('No');
      } else {
        setMontoConsumo(llamadas.precio);
        setEstablecimientoConsumo(llamadas.establecimiento);
        setObservaciones(zonaPais.nZona === 'zona1' ? llamadas.observaciones : 'No');
      }
      
      setUnidadConsumo(llamadas.unidad);    


    } else if (tipoConsumo === 'Llamadas salientes' && zonaPais.nZona) {
      const llamadasOut = RoamingDatos["Llamadas, SMS"][zonaPais.nZona]?.llamadasOut;
      const llamadasOutZona = llamadasOut?.[zonaPaisDestino.nZona];
      const { paisGlobal, paisGlobalDestino } = searchState;
    
      if (!paisGlobal || !paisGlobalDestino) {
        // Restablecer valores si alguno de los países está vacío
        setMontoConsumo(0);
        setEstablecimientoConsumo(0);
        setObservaciones('No');
      } else if (llamadasOutZona?.unidad && llamadasOutZona?.precio && llamadasOutZona?.establecimiento) {
        // Asignar valores si las propiedades necesarias existen
        setMontoConsumo(llamadasOutZona.precio);
        setEstablecimientoConsumo(llamadasOutZona.establecimiento);
        setUnidadConsumo(llamadasOutZona.unidad);
    
        // Asignar observaciones si las zonas coinciden con el criterio
        setObservaciones(
          zonaPaisDestino.nZona === 'zona1' && zonaPais.nZona === 'zona1'
            ? llamadasOutZona.observaciones
            : 'No'
        );
       } 

  } else if (tipoConsumo === 'Mensajes' && zonaPais.nZona && RoamingDatos["Llamadas, SMS"]?.[zonaPais.nZona]) {
    const smsOut = RoamingDatos["Llamadas, SMS"][zonaPais.nZona].smsOut;
    const { paisGlobal } = searchState;
    
    // Si alguno de los países está vacío, establecer valores predeterminados
    if (!paisGlobal) {
      setMontoConsumo(0);
      setEstablecimientoConsumo(0);
      setObservaciones('No');
    } else {
      setMontoConsumo(smsOut.precio);
      setEstablecimientoConsumo(smsOut.establecimiento);
      
      // Asignar observaciones según la zona
      setObservaciones(zonaPais.nZona === 'zona1' ? smsOut.observaciones : 'No');
    }
    
    setUnidadConsumo(smsOut.unidad);
    
  }
    
  }, [zonaPais.nZona, tipoConsumo, searchState.paisGlobalDestino, zonaPaisDestino]);

  const handleInputChange = (event, type) => {
    const query = event.target.value.toLowerCase();
    setSearchState(prevState => {
      const newState = { ...prevState, [type]: query };
      const searchResultsKey = type === 'searchQuery' ? 'searchResults' : 'searchResults2';
      newState[searchResultsKey] = RoamingDatos.paises.filter(pais =>
        pais.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(query)
      );
      newState[`showLabels${type === 'searchQuery' ? '' : '2'}`] = query !== '';
      newState[`showList${type === 'searchQuery' ? '' : '2'}`] = query !== '';

      const resetSearchState = (type) => {
        setMontoConsumo(0);
        setEstablecimientoConsumo(0);
        setObservaciones('No');
        
        if (type === 'searchQuery') {
          setSearchState(prevState => ({
            ...prevState,  // Mantener el resto del estado sin cambios
            paisGlobal: '',
            searchQuery: ''
          }));
          setZonaPais({ nZona: '', nPais: ''})
        } else if (type === 'searchQuery2') {
          setSearchState(prevState => ({
            ...prevState,  // Mantener el resto del estado sin cambios
            paisGlobalDestino: '',
            searchQuery2: ''
          }));
          setZonaPaisDestino({ nZona: '', nPais: ''})
        }
      };
      
      if (query === '') {
        resetSearchState(type);
      }
      return newState;
    });
  };

  const handleOptionSelect = (event, type) => {
    const selectedCountry = event.target.innerText;

    setSearchState(prevState => ({
      ...prevState,
      [type]: selectedCountry,
      [type === 'searchQuery' ? 'paisGlobal' : 'paisGlobalDestino']: selectedCountry,
      [`showList${type === 'searchQuery' ? '' : '2'}`]: false,
    }));
    
    
    if (type === 'searchQuery2') {
      const llamadasOut = RoamingDatos["Llamadas, SMS"]?.[zonaPais.nZona]?.llamadasOut?.[zonaPaisDestino.nZona];
      
      const resetConsumptionData = () => {
        setMontoConsumo(0);
        setEstablecimientoConsumo(0);
      };

      const updateConsumptionData = ({ unidad, precio, establecimiento }) => {
        setUnidadConsumo(unidad);
        setMontoConsumo(precio);
        setEstablecimientoConsumo(establecimiento);
        // setEtiquetaZona(zonaPaisDestino.nZona)
      };
      
      llamadasOut 
      ? updateConsumptionData(llamadasOut)
      : resetConsumptionData();
    } else {
      // setEtiquetaZona(zonaPais.nZona)
    }
    
    
    
  };
  

  return (
    <>
      <div className='contenedor-roaming-general'>
        <div className="search-container-roaming">
          <div className='contenedor-pais'>
            {searchState.showLabels && <label htmlFor="incidenciaBusqueda">País seleccionado:</label>}
            <div className='contenedor-pais-etiqueta-zona'>
              <input
                type="text"
                placeholder="Buscar pais..."
                id="contenedorPaisRoaming"
                value={searchState.searchQuery}
                onChange={(e) => handleInputChange(e, 'searchQuery')}
              />
              {zonaPais.nZona && <div className='zona-pais-etiqueta'>{zonaPais.nZona}</div>}
            </div>
            {searchState.showList && (
              <ul>
                {searchState.searchResults.map(result => (
                  <li key={result} onClick={(e) => handleOptionSelect(e, 'searchQuery')}>
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {searchState.inputPaisDestino === 1 && (
            <div className='contenedor-pais'>
              {searchState.showLabels && <label htmlFor="incidenciaBusqueda">Llamando a:</label>}
              <div className='contenedor-pais-etiqueta-zona'>
                <input
                  type="text"
                  placeholder="Pais destino..."
                  id="contenedorPaisDestinoRoaming"
                  value={searchState.searchQuery2}
                  onChange={(e) => handleInputChange(e, 'searchQuery2')}
                />
                {zonaPaisDestino.nZona && <div className='zona-pais-etiqueta'>{zonaPaisDestino.nZona}</div>}
              </div>
              {searchState.showList2 && (
                <ul>
                  {searchState.searchResults2.map(result => (
                    <li key={result} onClick={(e) => handleOptionSelect(e, 'searchQuery2')}>
                      {result}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      <RoamingCapa
        paisSeleccionado={searchState.paisGlobal}
        paisSeleccionadoDestino={searchState.paisGlobalDestino}
        inputPaisDestino={searchState}
        setInputPaisDestino={setSearchState}
        setTipoConsumo={setTipoConsumo}
        montoConsumo={montoConsumo}
        tipoConsumo={tipoConsumo}
        setUnidadConsumo={setUnidadConsumo}
        establecimientoConsumo={establecimientoConsumo}
        unidadConsumo={unidadConsumo}
        setEstablecimientoConsumo={setMontoConsumo}
        setMontoConsumo={setMontoConsumo}
        observaciones={observaciones}
        setObservaciones={setObservaciones}
      />
    </>
  );
}


function TipoConsumo({ tipoConsumo, setTipoConsumo, setUnidadConsumo, 
  setInputPaisDestino, setEstablecimientoConsumo, setMontoConsumo,
  paisSeleccionadoDestino, setObservaciones, inputPaisDestino}) {


  const handleLlamadasSalientesClick = () => {
    // Actualiza el estado de tipoConsumo
    setTipoConsumo('Llamadas salientes');
    
    // Establece los valores de unidad y monto
    setUnidadConsumo('€/min');
    setEstablecimientoConsumo(0);
    setMontoConsumo(0);

    if (paisSeleccionadoDestino === '') {
      setObservaciones('No');
    }
  
    // Restablece el estado del inputPaisDestino y muestra el campo de destino
     setInputPaisDestino(prevState => ({
       ...prevState,  // Mantener el resto del estado sin cambios
       inputPaisDestino: 1, // Actualizar solo inputPaisDestino
     }));

  };


  return (
    <>
      <label>Consumo en roaming</label>
      <div className='contenedor-impuesto-seleccion'>
        <button 
          className={tipoConsumo === 'Datos' ? 'selected' : ''}
          onClick={() => {setTipoConsumo('Datos'); setUnidadConsumo('€/mb')
            setInputPaisDestino(prevState => ({
              ...prevState,  // Mantener el resto del estado sin cambios
              inputPaisDestino: 0, // Actualizar solo inputPaisDestino
            }));
          }}>
              <i className='bx bx-sort-alt-2' />
              <span className="link">Datos</span>
        </button>
        <button 
          className={tipoConsumo === 'Llamadas' ? 'selected' : ''}
          onClick={() => {setTipoConsumo('Llamadas'); setUnidadConsumo('€/min');
            setInputPaisDestino(prevState => ({
              ...prevState,  // Mantener el resto del estado sin cambios
              inputPaisDestino: 0, // Actualizar solo inputPaisDestino
            }));
          }}>
              <i className='bx bx-phone-incoming' />
              <span className="link">Llamadas</span>
        </button>
        <button 
          className={tipoConsumo === 'Llamadas salientes' ? 'selected' : ''}
          onClick={handleLlamadasSalientesClick}>
              <i className='bx bx-phone-outgoing' />
              <span className="link">Llamadas</span>
        </button>
        <button 
          className={tipoConsumo === 'Mensajes' ? 'selected' : ''}
          onClick={() => {setTipoConsumo('Mensajes'); setUnidadConsumo('€/sms');
            setInputPaisDestino(prevState => ({
              ...prevState,  // Mantener el resto del estado sin cambios
              inputPaisDestino: 0, // Actualizar solo inputPaisDestino
            }));
          }}>
              <i className='bx bx-message-detail' />
              <span className="link">Mensajes</span>
        </button>
      </div>
      
    </>
  );
}


const tipoConsumoGlobal = {
  'Datos': "datos",
  'Llamadas': "Llamadas, SMS",
  'Llamadas salientes': "Llamadas, SMS",
  'Mensajes': "Llamadas, SMS",
  // 'Video': "Llamadas, SMS y Video LLamadas"  // Adapta esta tasa según sea necesario
};


function RoamingCapa({paisSeleccionado, paisSeleccionadoDestino, setInputPaisDestino,
  setTipoConsumo, montoConsumo, tipoConsumo, setUnidadConsumo, establecimientoConsumo,
  unidadConsumo, setEstablecimientoConsumo, setMontoConsumo,
  observaciones, setObservaciones, inputPaisDestino}) {
  // const [llamadasEntrantes, setLlamadasEntrantes] = useState([]);
  // const [smsEnviados, setSmsEnviados] = useState();
  // const [videoEntrantes, setVideoEntrantes] = useState([]);
  // const [videoSalientes, setVideoSalientes] = useState([]);
  // const [datos, setDatos] = useState();


  function observacionesContenedor(observaciones) {
    return <prev id='observaciones' dangerouslySetInnerHTML={{ __html: observaciones }}></prev>;
  }



  return (
    <div className='contenedor-roaming-global'>
      <TipoConsumo tipoConsumo={tipoConsumo} setTipoConsumo={setTipoConsumo} 
      setUnidadConsumo={setUnidadConsumo} setInputPaisDestino={setInputPaisDestino}
      setEstablecimientoConsumo={setEstablecimientoConsumo}
      setMontoConsumo={setMontoConsumo} paisSeleccionadoDestino={paisSeleccionadoDestino}
      setObservaciones={setObservaciones} inputPaisDestino={inputPaisDestino}/>
      <div className='contenedor-roaming-principal'>
        {(tipoConsumo === "Llamadas" || tipoConsumo === "Llamadas salientes")
          && (
          <div className='contenedor-roaming'>
            <div className='impuesto-total entera'>{establecimientoConsumo}</div>
            <div>
              <div className='impuesto-total'>Estab.</div>
              <div className='impuesto-total decimal'>EUR</div>
            </div>
          </div>)}
        
        <div className='contenedor-roaming'>
          <div className='impuesto-total entera'>{montoConsumo}</div>
          <div>
            <div className='impuesto-total'>Precio</div>
            <div className='impuesto-total decimal'>{unidadConsumo}</div>
          </div>
        </div>


      </div>

      {observaciones !== 'No' && observacionesContenedor(observaciones)}

    </div>
  );
}

export default Roaming;