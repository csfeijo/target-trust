import styled, { css } from 'styled-components';

const getUiType = (uiType) => {
  switch(uiType) {
    case 'success':
      return (css`
        background: #198754;
        color: white;
      `)
    case 'danger':
      return (css`
        background: #dc3545;
        color: white;
      `)
    case 'warning':
      return (css`
        background: #ffc107;
      `)
    default:
      return (css`
        background: ${({ theme }) => theme.colors.background};
      `)
  }
}

const Container = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:active {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.mainColor};
  }

  &:disabled {
    box-shadow: inset 0 0 3px 3px ${({ theme }) => theme.colors.active};
  }

  ${props => getUiType(props.uiType)}
`;

export default Container;