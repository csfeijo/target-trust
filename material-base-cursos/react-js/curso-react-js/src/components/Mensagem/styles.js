import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.type === 'erro' ? 'red' : 'green'};
  margin-top: 10px;
`;

export default Container;