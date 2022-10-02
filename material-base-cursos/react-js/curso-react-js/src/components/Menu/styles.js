import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  padding: 10px;
  color: ${({ theme }) => theme.colors.mainColor};
  background: ${({ theme }) => theme.colors.background};

  h1 {
    margin-right: 60px;
  }
`

export const LinkNav = styled(Link)`
  color: ${({ theme }) => theme.colors.mainColor};
  padding: 0 40px;
  border-right: 1px dashed ${({ theme }) => theme.colors.mainColor};
  font-size: 20px;

  display: flex;
  align-items: center;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

