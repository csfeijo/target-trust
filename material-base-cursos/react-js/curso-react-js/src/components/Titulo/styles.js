import styled, { css } from 'styled-components';

const warningBg = 'red';
const successBg = 'green';

export const Texto = styled.h1`
  background-color: ${props => props.type === 'success' ? successBg : warningBg};
  color: white;

  span {
    color: yellow;
  }

  font-family: ${props => props.font || 'Courier'};

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
  `};
`;

export const TextoMenor = styled(Texto)`
  font-size: 14px;
`;