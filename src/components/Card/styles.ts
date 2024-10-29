import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const CardContainer = styled.div`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
