import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  padding-left: 10px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.mainColor};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 3px solid orange;

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
  
  &:hover,
  &.active {
    text-decoration: none;
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.background};
    box-shadow: inset 0px -5px 0 0px orange;
  }
`

