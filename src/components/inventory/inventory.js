import "../../styles/inventory.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Inventory = () => {
  const [almacenesSalida, setAlmacenesSalida] = useState([]);
  const [almacenesDestino, setAlmacenesDestino] = useState([]);
  const [conceptos, setConceptos] = useState([]);
  const [busquedaClave, setBusquedaClave] = useState("")
  const [articulosTabla, setArticulosTabla] = useState([]);
  // Nuevos estados para los selects
  const [almacenSalidaId, setAlmacenSalidaId] = useState("");
  const [almacenDestinoId, setAlmacenDestinoId] = useState("");
  const [conceptoId, setConceptoId] = useState("");
  // Estados de los otros campos
  const [fecha, setFecha] = useState(new Date().toISOString().slice(0, 16));
  const [folio, setFolio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [centroCostoId, setCentroCostoId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://xpnqlt26-5224.usw3.devtunnels.ms/api/Microsip/datos");
        const result = await response.json();

        if (result?.almacenes) {
          setAlmacenesSalida(result.almacenes);
          setAlmacenesDestino(result.almacenes);
        }

        if (result?.conceptos) {
          setConceptos(result.conceptos);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  

  const buscarArticuloPorClave = async () => {
    if (!busquedaClave.trim()) return; // No ejecutar si está vacío

    try {
      const response = await fetch(
        "https://xpnqlt26-5224.usw3.devtunnels.ms/api/Microsip/obtener-articulo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ claveArticulo: busquedaClave }),
        }
      );

      if (response.ok) {
        const result = await response.json();

        // Agregar el artículo a la tabla si no existe ya
        setArticulosTabla((prev) => {
          const existe = prev.some((art) => art.articuloId === result.articuloId);
          if (!existe) {
            return [...prev, { ...result, unidades: 1 }];
          }
          return prev;
        });

        setBusquedaClave(""); // Limpiar el input después de buscar
      } else {
        console.error("Error al buscar el artículo");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const manejarEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita recarga en caso de estar en un form
      buscarArticuloPorClave();
    }
  };

  return (
    <div>
      <Link to="/home" className="back-button">← Volver</Link>

      <div className="container">
        <div className="inventory-container">
          <div className="header">
            <h1>Gestión de Inventario</h1>
          </div>

          <div className="form-group">
            <label htmlFor="almacenSalida">Almacén Salida:</label>
            <select id="almacenSalida">
              <option value="">Seleccione un almacén</option>
              {almacenesSalida.map((almacen) => (
                <option key={almacen.ALMACEN_ID} value={almacen.ALMACEN_ID}>
                  {almacen.NOMBRE}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="almacenDestino">Almacén Destino:</label>
            <select id="almacenDestino">
              <option value="">Seleccione un almacén</option>
              {almacenesDestino.map((almacen) => (
                <option key={almacen.ALMACEN_ID} value={almacen.ALMACEN_ID}>
                  {almacen.NOMBRE}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="conceptos">Concepto:</label>
            <select id="conceptos">
              <option value="">Seleccione un Concepto</option>
              {conceptos.map((concepto) => (
                <option key={concepto.CONCEPTO_IN_ID} value={concepto.CONCEPTO_IN_ID}>
                  {concepto.NOMBRE}
                </option>
              ))}
            </select>
          </div>

          {/* Campo de búsqueda SOLO activa con ENTER */}
          <div className="form-group">
            <label htmlFor="busqueda">Buscar Producto por Clave:</label>
            <input
              type="text"
              id="busqueda"///*
              placeholder="Escriba la clave del producto y presione Enter..."
              value={busquedaClave}
              onChange={(e) => setBusquedaClave(e.target.value)}
              onKeyDown={manejarEnter} // Solo buscará cuando se presione Enter
            />
          </div>

          {/* Campo para la descripcion */}


          <div>
            <div>descripcion</div>
          </div>

          <div className="inventory-table-container">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Unidades</th>
                </tr>
              </thead>
              <tbody>
                {articulosTabla.map((articulo) => (
                  <tr key={articulo.articuloId}>
                    <td>{articulo.nombreArticulo}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={articulo.unidades}
                        onChange={(e) =>
                          setArticulosTabla((prev) =>
                            prev.map((art) =>
                              art.articuloId === articulo.articuloId
                                ? { ...art, unidades: parseInt(e.target.value, 10) }
                                : art
                            )
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Inventory;
