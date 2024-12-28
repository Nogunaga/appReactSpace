import React from 'react'

const Cargando = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src="/imagenes/hdt.gif" alt="cargando" style={{ width: "10vw" }} />
      <p style={{ marginTop: "10px", fontSize: "2.2em", color: "#1a53ced1" }}>Cargando...</p>
    </div>
  );
};

export default Cargando;

