import React from 'react';
import './Login.css'

const Login = ({ onLogin, setUsername, setPassword, estiloLogin }) => {
//   const [usernameinput, setUsernameInput] = useState('');
//   const [passwordinput, setPasswordInput] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//   };

  return (
    <div className={`contenedor-login ${estiloLogin}`}>
      <h1>appFi</h1>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={onLogin}>
        <div className='contenedor-input-login'>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            placeholder='nombre de usuario'
            // value={usernameinput}
            onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del username
          
          />
        </div>
        <div className='contenedor-input-login'>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder='*******'
            // value={passwordinput}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
