import styled from 'styled-components';


const warningColor = '#FF9900';
const successColor = '#009900';
const font = 'Courier';

export const Mensagem = styled.h1`
  font-family: ${font};
  color: ${props => props.type === 'warning' ? warningColor : successColor};
`;

export default Mensagem;
