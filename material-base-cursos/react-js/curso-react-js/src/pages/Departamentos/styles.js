import styled from 'styled-components'

export const Container = styled.section`

`

export const List = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Panel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  border-left: 1px solid ${({ theme }) => theme.colors.background};
`