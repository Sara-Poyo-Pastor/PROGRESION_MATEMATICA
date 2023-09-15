import { useState } from 'react';
import "./SignUpView.css";



function App() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleApellidosChange = (e) => {
    setApellidos(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para registrar al usuario
    console.log('Datos de registro:', { nombre, apellidos, email, password, confirmPassword });
  };

  const handleCancel = () => {
    // Agrega la lógica para cancelar el registro
    console.log('Registro cancelado');
  };

  return (
    <div>
      <h2 className='signUpTitle'>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className='field'>
          <label>Apellidos:</label>
          <input
            type="text"
            value={apellidos}
            onChange={handleApellidosChange}
            required
          />
        </div>
        <div className='field'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='field'>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className='field'>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div>
          <button type="submit">Aceptar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
