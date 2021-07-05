// src/Clicou/index.js
import { React, useState } from 'react';

const Clicou = () => {

  const [clicou, setClicou] = useState('ainda não');

  return (
    <>
      <p>{clicou}</p>
      <button
        onClick={() => clicou = clicou + 1}
      >CLIQUE ME</button>
    </>
  );
};

export default Clicou;

