import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  width: 300px;
  height: 150px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  flex-shrink: 0;
  margin: 10px;
  
  a {
    color: ${({ theme }) => theme.colors.mainColor};
    text-decoration: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    a {
      color: ${({ theme }) => theme.colors.background};
    }
  }

`;

export default Container;