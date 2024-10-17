import React, { useState } from 'react';
import './Calculadora.css';

function MontoInput({ monto, setMonto }) {
  const [mes, setMes] = useState(new Date().getMonth() + 1); 
  const [montoTarifa, setMontoTarifa] = useState();
  const [diasProporcional, setDiasProporcional] = useState();
  const [ano, setAno] = useState(new Date().getFullYear());

  const handleMontoChange = (event) => {
    const nuevoValor = event.target.value;

    // Eliminar todo lo que no sean números o puntos
    const valorLimpio = nuevoValor.replace(/[^0-9.]/g, '');
  
    // Limitar a un solo punto decimal y convertir a número
    const valorConUnPunto = parseFloat(valorLimpio.replace(/\./g, '.').slice(0, valorLimpio.indexOf('.') + 4));
  
    // Asegurar que el valor esté entre 0 y 999.99
    const valorFinal = Math.min(Math.max(valorConUnPunto, 0), 999.99);
    
    setDiasProporcional('');
    setMonto(valorFinal);
    setMontoTarifa(valorFinal);
  };

  const handleProporcionalChange = (event) => {
    const nuevoValor = event.target.value.replace(/\D/g, ''); // Elimina cualquier carácter que no sea un número
    if (nuevoValor <= getDaysInMonth(ano, mes)) {
      setDiasProporcional(parseFloat(nuevoValor));
      // setValor(nuevoValor);
      const proporcional = ((getDaysInMonth(ano, mes) + 1 - parseFloat(nuevoValor)) / getDaysInMonth(ano, mes)) * document.querySelectorAll('.monto-impuesto input')[0].value; 
      setMonto(proporcional);
    }
  }

  const handleMesChange = (event) => {
    setMes(parseInt(event.target.value));
    // setMonto(parseFloat(event.target.value));
    const proporcional = ((getDaysInMonth(ano, parseInt(event.target.value)) + 1 - diasProporcional) / getDaysInMonth(ano, parseInt(event.target.value))) * document.querySelectorAll('.monto-impuesto input')[0].value; 
    setMonto(proporcional);
  }


  function getDaysInMonth(year, mes) {
    return new Date(year, mes, 0).getDate();
  }

  return (
    <div className='monto-impuesto'>
      <div>
        <label>Monto tarifa</label>
        <input type="number" placeholder="ingresar" 
        onChange={handleMontoChange} 
        value={montoTarifa} />
      </div>
      <div>
        <label>Activo desde</label>
        <input type="number" placeholder="día"
        onChange={handleProporcionalChange} 
        max={getDaysInMonth(ano, mes)} 
        min={1} 
        value={diasProporcional} 
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}/>
      </div>
      <div>
        <label>Mes</label>
        <select value={mes} onChange={handleMesChange}>
          {Array.from({ length: 12 }, (_, index) => index + 1).map(mes => (
            <option key={mes} value={mes}>
              {new Date(2024, mes - 1, 1).toLocaleString('default', { month: 'long' })}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function TipoImpuesto({ tipoImpuesto, setTipoImpuesto }) {
  const handleTipoImpuestoChange = (event) => {
    setTipoImpuesto(event.target.value);
  };

  return (
    <>
      <label>Tipo de Impuesto</label>
      <div className='contenedor-impuesto-seleccion'>
        <button 
          className={tipoImpuesto === 'IVA (21%)' ? 'selected' : ''}
          onClick={() => setTipoImpuesto('IVA (21%)')}>IVA (21%)</button>
        <button 
          className={tipoImpuesto === 'IGIC (7%)' ? 'selected' : ''}
          onClick={() => setTipoImpuesto('IGIC (7%)')}>IGIC (7%)</button>
        <button 
          className={tipoImpuesto === 'IPSI (8%)' ? 'selected' : ''}
          onClick={() => setTipoImpuesto('IPSI (8%)')}>IPSI (8%)</button>
        <button 
          className={tipoImpuesto === 'IPSI (10%)' ? 'selected' : ''}
          onClick={() => setTipoImpuesto('IPSI (10%)')}>IPSI (10%)</button>
      </div>
    </>
  );
}

function Calculadora() {
  const [monto, setMonto] = useState(0);
  const [tipoImpuesto, setTipoImpuesto] = useState('IVA (21%)');
  const [incluyeImpuesto, setIncluyeImpuesto] = useState(false);

  const calcularTotal = () => {
    const tasas = {
      'IVA (21%)': 0.21,
      'IGIC (7%)': 0.07,
      'IPSI (8%)': 0.08,
      'IPSI (10%)': 0.1  // Adapta esta tasa según sea necesario
    };

    const tasa = tasas[tipoImpuesto];
    let baseImponible = 0;
    let impuesto = 0;
    let total = 0 ;
    if (incluyeImpuesto === true) {
      baseImponible = monto / (1.21)
    } else {
      baseImponible = incluyeImpuesto ? monto / (1 + tasa) : monto;
    }
    impuesto = baseImponible * tasa;
    total = baseImponible + impuesto;

    return { baseImponible, impuesto, total };
  };

  let { baseImponible, impuesto, total } = calcularTotal();
  if (isNaN(total)) {
    total = 0;
  }
  let enteraTotal = Math.floor(total); // parteEntera será 10
  let decimalTotal = total - enteraTotal;

  return (
    <div className='contenedor-calculadora'>
      <MontoInput setMonto={setMonto} />
      <label className='margin-bot'>
        <input type="checkbox" checked={incluyeImpuesto} onChange={() => setIncluyeImpuesto(!incluyeImpuesto)} />
        Incluye IVA
      </label>
      <TipoImpuesto tipoImpuesto={tipoImpuesto} setTipoImpuesto={setTipoImpuesto} />
      <div className='contenedor-impuesto-principal'>
        <div className='contenedor-impuesto'>
          {/* <div>TOTAL</div> */}
          <div className='impuesto-total entera'>{enteraTotal}'</div>
          <div>
            <div className='impuesto-total decimal'>{decimalTotal.toFixed(2).slice(2)}</div>
            <div className='impuesto-total'>€/mes</div>
          </div>
        </div>

        <div className='contenedor-base-imponible'>
          <div>Base Imponible: {baseImponible.toFixed(2)} €</div>
          <div>{tipoImpuesto}: {impuesto.toFixed(2)} €</div>
            <a target="_blank"
            rel="noopener noreferrer"
            href='#'>
            Ver listado</a>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;