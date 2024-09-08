import styled from 'styled-components'

export const ProductsContainer = styled.section`
  padding: 32px 0;
`

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;
`
