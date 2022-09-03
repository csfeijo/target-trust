import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  background-color: #eeeeee;
  color: white;
  width: 200px;
  height: 150px;
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
    background-color: #7145e0;
    a {
      color: white;
    }
  }

`;

export default Container;