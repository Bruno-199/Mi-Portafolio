import { useState, useEffect } from "react";

const Ejemplo = () => {
  const [nombre, setNombre] = useState("Bruno");

  const handleClick = () => {
    console.log("mensaje");
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <h4>nombre: {nombre}</h4>
      <br />
      <br />
      <button onClick={handleClick}> mostrar mensaje </button>
    </>
  );
};

export default Ejemplo;

