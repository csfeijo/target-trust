import React, { useState } from 'react';
import Container from './styles';
import Contador from '../../components/Contador';

const Home = () => {
  const [count, setCount] = useState(0);


  return (
    <Container>
      <h1>Home Page</h1>
    </Container>
  )
}

export default Home;