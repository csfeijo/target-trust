import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  background-color: #e89900;
  color: white;
  width: 150px;
  height: 100px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  a {
    color: #002244;
    text-decoration: none;
  }

  &:hover {
    background-color: #002244;
    a {
      color: white;
    }
  }

`;

export default Container;