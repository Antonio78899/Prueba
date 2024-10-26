import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '2020009092@unfv.edu.pe' && password === '2020009092') {
      navigate('/dashboard'); // Navegar al dashboard si las credenciales son correctas
    } else {
      setError('Usuario o contraseña incorrecta');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="Sum.png" alt="Logo" className="logo" />
        <h2>Sistema Único de Matrícula</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Usuario:</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Contraseña:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Ingresar</button>
        </form>
        <a href="/recuperar" className="forgot-password">Olvidé mi contraseña</a>
      </div>
    </div>
  );
};

export default Login;
