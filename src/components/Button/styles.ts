import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  border-radius: 8px;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  background-color: tranparent;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  border: 2px solid ${colors.white};
  border-radius: 8px;
  padding: 8px 16px;
  text-decoration: none;
`
