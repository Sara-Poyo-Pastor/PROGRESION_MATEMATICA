import { useState } from 'react';
import "./SignUpView.css";
import BackButton from '../../components/backButton/BackButton';
import { register } from '../../../src/services/conection';

function SignUpView() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }
  
    try {
      const response = await register(name, lastname, email, password);
  
      if (response && response.message) {
        alert(response.message);
      } else {
        setErrorMessage('Respuesta no válida desde la API.');
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message || "Error al registrar usuario.");
    }
  };

  return (
    <>
      <BackButton to="/" />
      <div>
        <h2 className='signUpTitle'>Regístrate</h2>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className='field'>
            <label>Apellidos:</label>
            <input
              type="text"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              required
            />
          </div>
          <div className='field'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='field'>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='field'>
            <label>Confirmar Contraseña:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
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

export default SignUpView;
