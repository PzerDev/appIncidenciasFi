import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion.js';
// import DatosContacto from './componentes/DatosContacto/DatosContacto.js';

function App() {
  return (
    <>  
      <Router basename="/appIncidenciasFi/build/">
        <BarraNavegacion />
        <Routes>
          {/* <Route path="/" element={<Inicio />} /> */}
          {/* <Route path="/calculadora" element={<Calculadora />} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
