import styled from 'styled-components'

export const Image = styled.div`
  height: 560px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 344px;
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 448px;
`

export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
