import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: stretch;


  color: white;

  padding: 10px;
  background: #002244;

  h1 {
    margin-right: 60px;
  }
`;

export const LinkNav = styled(Link)`
  color: white;
  padding: 0 40px;
  border-right: 1px dashed white;
  font-size: 20px;

  display: flex;
  align-items: center;
`;

