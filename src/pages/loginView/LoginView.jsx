import "./LoginView.css";
import { useState } from 'react';



function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    // Por ejemplo, puedes usar fetch o axios para hacer una solicitud a tu API
    console.log('Datos de inicio de sesión:', { email, password });
  };

  const handleCancel = () => {
    // Agrega la lógica para cancelar el inicio de sesión
    console.log('Inicio de sesión cancelado');
  };

  return (
    <div>
      <h2 className="loginTitle">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
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

export default LoginView;


