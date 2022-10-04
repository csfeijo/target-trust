import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  border-radius: 4px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;

  flex-shrink: 0;
  margin: 10px;
  
  a {
    color: ${({ theme }) => theme.colors.mainColor};
    text-decoration: none;
    flex-grow: 1;
    margin-left: 30px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    a {
      color: ${({ theme }) => theme.colors.background};
    }
  }

`

export default Container