import "../styles/login.css";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <div className="login-header">
          <svg className="avatar" viewBox="0 0 24 24" width="64" height="64">
            <path d="M4 6h16v12H4z" fill="none" stroke="#555" strokeWidth="2" />
            <path d="M7 12h10M7 9h10M7 15h10" stroke="#555" strokeWidth="2" />
            <circle cx="12" cy="12" r="8" fill="none" stroke="#555" strokeWidth="2" />
          </svg>
          <h2>Conexión a Base de Datos</h2>
        </div>
        <form id="loginForm">
          <div className="input-group">
            <input type="text" id="dbAddress" required />
            <label htmlFor="dbAddress">Dirección de Base de Datos</label>
          </div>
          <div className="input-group">
            <input type="text" id="serverName" required />
            <label htmlFor="serverName">Nombre del Servidor</label>
          </div>
          <div className="input-group">
            <input type="text" id="username" required />
            <label htmlFor="username">Usuario</label>
          </div>
          <div className="input-group">
            <input type="password" id="password" required />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Guardar conexión
            </label>
            <a href="https://example.com/connection-help">¿Necesitas ayuda?</a>
          </div>
                    <Link to='/home' >Conectar</Link>
          <div className="register-link">
            ¿No tienes credenciales? <a href="https://example.com/request-access">Solicitar Acceso</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
