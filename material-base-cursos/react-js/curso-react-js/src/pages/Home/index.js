import React, { useState } from 'react';
import Container from './styles';
import Contador from '../../components/Contador';

const Home = () => {
  const [count, setCount] = useState(0);


  return (
    <Container>
      <h1>Home</h1>
      <p>{count}</p>

      <button onClick={() => {
        setCount(count + 1)
      }}>
        CLIQUE
      </button>
      <hr/>
      <Contador num={count}/>
    </Container>
  )
}

export default Home;