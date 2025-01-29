import "../styles/home.css"
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
              <div className="user-info">
    <span>Usuario: Admin</span>
    <a href="https://example.com/logout" className="logout-button">Cerrar Sesión</a>
  </div>

  <div className="container">
    <div className="modules-container">
      <div className="header">
        <h1>Sistema de Gestión</h1>
        <p>Seleccione el módulo al que desea acceder</p>
      </div>

      <div className="modules-grid">
        <div className="module-card">
          <svg className="module-icon" width="48" height="48" viewBox="0 0 24 24">
            <path fill="none" stroke="#4158d0" stroke-width="2" 
                  d="M4 4h16v16H4zM4 9h16M9 4v16"/>
            <circle cx="6.5" cy="6.5" r="1" fill="#4158d0"/>
            <circle cx="6.5" cy="12.5" r="1" fill="#4158d0"/>
            <circle cx="6.5" cy="18.5" r="1" fill="#4158d0"/>
          </svg>
          <h2 className="module-title">Inventario</h2>
          <p className="module-description">
            Gestione su inventario, productos, stock y movimientos de almacén.
          </p>
          <Link  to="/inventory" className="module-button">Acceder</Link>
        </div>

        <div className="module-card">
          <svg className="module-icon" width="48" height="48" viewBox="0 0 24 24">
            <path fill="none" stroke="#4158d0" stroke-width="2" 
                  d="M3 6h18l-2 13H5zM8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
            <circle cx="9" cy="11" r="1" fill="#4158d0"/>
            <circle cx="15" cy="11" r="1" fill="#4158d0"/>
          </svg>
          <h2 className="module-title">Ventas</h2>
          <p className="module-description">
            Administre órdenes de venta, proveedores y seguimiento de pedidos.
          </p>
          <a href="https://example.com/purchases" className="module-button">Acceder</a>
        </div>
      </div>
    </div>
  </div>
        </div>
    )

}
export default Home