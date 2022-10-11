import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.background};
  width: 80%;
  border-radius: 4px;
  flex-direction: row;
  margin: 10px;
  
  a {
    color: #002244;
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