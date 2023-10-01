import "./LoginView.css";
import { useState } from 'react';
import BackButton from "../../components/backButton/BackButton";
import axios from 'axios'; // Asegúrate de importar axios o la biblioteca que utilices para realizar solicitudes HTTP



function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      // Si la solicitud es exitosa, puedes almacenar el token en el almacenamiento local o en el estado de la aplicación.
      const token = response.data.token;
      console.log('Inicio de sesión exitoso. Token:', token);

      // Redirige al usuario a la página principal o a otra página después del inicio de sesión.
      // Por ejemplo:
      // history.push('/dashboard');
    } catch (error) {
      // Si la solicitud falla, puedes manejar el error adecuadamente.
      console.error('Error al iniciar sesión:', error);
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


