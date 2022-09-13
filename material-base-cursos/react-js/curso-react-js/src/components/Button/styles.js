import styled from 'styled-components';

const Container = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export default Container;