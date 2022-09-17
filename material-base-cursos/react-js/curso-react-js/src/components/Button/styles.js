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
        background: #e1e1e1;
      `)
  }
}


const Container = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 4px;
  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.background};
  }
  ${props => getUiType(props.uiType)}
`;

export default Container;