// src/Contador/index.js
import { React, useState } from 'react';

const Contador = () => {

  const [cont, setCont] = useState(0);

  return (
    <>
      <p>{cont}</p>
      <button
        onClick={() => setCont(cont - 1)}
      >&lt; Contador</button>
      <button
        onClick={() => setCont(cont + 1)}
      >Contador &gt;</button>
    </>
  );
};

export default Contador;

