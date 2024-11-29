import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion.js';
// import DatosContacto from './componentes/DatosContacto/DatosContacto.js';

function App({ onLogout }) {

  return (
    <>  
      <Router basename="/appIncidenciasFi/build">
        <BarraNavegacion onLogout={onLogout} />

      </Router>
    </>

  );
}

export default App;
