import React, { useState } from "react";
import "../../styles/price.css";

const ConsultPrice = () => {
  const [busquedaClave, setBusquedaClave] = useState("");
  const [articuloClave, setArticuloClave] = useState("");
  const [articuloPrecio, setArticuloPrecio] = useState(null);
  const [articuloNombre, setArticuloNombre] = useState("");

  const buscarArticuloPorClave = async () => {
    if (!busquedaClave.trim()) return;

    try {
      const response = await fetch(
        "https://xpnqlt26-5224.usw3.devtunnels.ms/api/Microsip/obtener-precio-articulo",
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

        if (result?.precio) {
          setArticuloPrecio(result.precio);
          setArticuloNombre(result.nombreArticulo);
          setArticuloClave(busquedaClave);
        }

        setBusquedaClave("");
      } else {
        console.error("Error al buscar el artículo");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const manejarEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      buscarArticuloPorClave();
    }
  };

  return (
    <div>
      <a href="/home" className="back-button">← Volver</a>
      <div className="container">
        <div className="price-checker">
          <div className="header">
            <h1>Verificador de Precios</h1>
          </div>
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                id="codigo"
                placeholder="Escanea o ingresa el código del producto"
                autoComplete="off"
                value={busquedaClave}
                onChange={(e) => setBusquedaClave(e.target.value)}
                onKeyPress={manejarEnter}
                className="search-input"
              />
            </div>
          </div>
          <div className="result-container" id="resultado">
            <div className="product-info">
              <div className="product-details">
                <div className="product-code">
                  <span className="label">Código:</span>
                  <span className="value" id="codigo-producto">{articuloClave}</span>
                </div>
                <h2 id="nombre-producto">{articuloNombre || "Escanea un producto"}</h2>
                <div className="price">
                  ${articuloPrecio !== null ? articuloPrecio.toFixed(2) : "0.00"} MXN
                </div>
                <p className="description" id="descripcion">
                  La información del producto aparecerá aquí cuando escanees o ingreses un código.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultPrice;
