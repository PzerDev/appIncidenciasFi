// import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio.js';
import Calculadora from './componentes/Calculadora/Calculadora.js';
import Roaming from './componentes/Roaming/Roaming.js';
import AppFibra from './componentes/AppFibra/AppFibra.js';
import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion.js';





function App({onLogout}) { // Ya no necesitamos pasar onLogout directamente aquí
  
  function LayoutConBarra() {
    return (
      <>
        <BarraNavegacion onLogout={onLogout} />
        <Outlet /> {/* Aquí se renderizarán los componentes de las rutas */}
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutConBarra />,
      children: [
        { index: true, element: <Inicio /> }, // Para la ruta principal /
        { path: "calculadora", element: <Calculadora /> },
        { path: "roaming", element: <Roaming /> },
        { path: "pruebasFi", element: <AppFibra /> },
      ],
    },
    { path: "*", element: <h1>404 - Página no encontrada</h1> },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;