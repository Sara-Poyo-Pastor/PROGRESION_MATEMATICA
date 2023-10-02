import { useState } from 'react';
import "./LoginView.css";
import BackButton from "../../components/backButton/BackButton";
import { login } from '../../../src/services/conection';
import { useNavigate } from 'react-router-dom';

function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await login(email, password);
      if (response.message === 'Inicio de sesión exitoso') {
        console.log('Inicio de sesión exitoso.');
        navigate('/LoginAccess');
        setEmail('');
        setPassword('');
      } else {
        console.error('Error al iniciar sesión:', response.message);
      }
    } catch (error) {
      console.error('Error en la función de inicio de sesión:', error.message);
    }
    
  };
  

  return (
    <>
      <BackButton to="/" />
      <div>
        <h2 className="loginTitle">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Aceptar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginView;


