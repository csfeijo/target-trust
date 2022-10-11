import styled, { css } from 'styled-components'

const featuredBg = '#f3f3f3'
const featuredBorder = '#002244'
const defaultBg = 'green'
const defaultBorder = '#000000'

export const Texto = styled.h1`
  background-color: ${props => props.type === 'feature' ? featuredBg : defaultBg};
  border: 1px dashed ${props => props.type === 'feature' ? featuredBorder : defaultBorder};
  color: #002244;
  padding: 20px;
  width: 600px;
  text-align: center;
  margin: 0 auto;

  span {
    font-weight: bold;
  }
/* 
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
  `}; */
`