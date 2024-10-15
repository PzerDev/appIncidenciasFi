import React, { useState } from 'react';
import './Calculadora.css';

function MontoInput({ setMonto }) {
  const [mes, setMes] = useState(new Date().getMonth() + 1); 
  // const [mes, setMonth] = useState(1);
  const [diasProporcional, setDiasProporcional] = useState();
  const [ano, setAno] = useState(new Date().getFullYear());

  const handleMontoChange = (event) => {
    setMonto(parseFloat(event.target.value));
  };

  const handleProporcionalChange = (event) => {
    setDiasProporcional(parseFloat(event.target.value));
    const proporcional = ((getDaysInMonth(ano, mes) + 1 - parseFloat(event.target.value)) / getDaysInMonth(ano, mes)) * document.querySelectorAll('.monto-impuesto input')[0].value; 
    setMonto(proporcional);
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
      <input type="number" placeholder="Ingrese el monto" onChange={handleMontoChange} />
      <select value={mes} onChange={handleMesChange}>
        {Array.from({ length: 12 }, (_, index) => index + 1).map(mes => (
          <option key={mes} value={mes}>
            {new Date(2024, mes - 1, 1).toLocaleString('default', { month: 'long' })}
          </option>
        ))}
      </select>
      <input type="number" placeholder="Servicio activo desde" onChange={handleProporcionalChange} />
    </div>
  );
}

function TipoImpuesto({ tipoImpuesto, setTipoImpuesto }) {
  const handleTipoImpuestoChange = (event) => {
    setTipoImpuesto(event.target.value);
  };

  return (
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

  const { baseImponible, impuesto, total } = calcularTotal();

  return (
    <div className='contenedor-calculadora'>
      <MontoInput setMonto={setMonto} />
      <label>
        <input type="checkbox" checked={incluyeImpuesto} onChange={() => setIncluyeImpuesto(!incluyeImpuesto)} />
        El monto incluye impuesto (IVA)
      </label>
      <TipoImpuesto tipoImpuesto={tipoImpuesto} setTipoImpuesto={setTipoImpuesto} />
      <div className='contenedor-impuesto-principal'>
        <div className='contenedor-impuesto'>
          <div>TOTAL</div>
          <div className='impuesto-total'>{total.toFixed(2)} €</div>
        </div>

        <div className='contenedor-base-imponible'>
          <div>Base Imponible: {baseImponible.toFixed(2)} €</div>
          <div>{tipoImpuesto}: {impuesto.toFixed(2)} €</div>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;