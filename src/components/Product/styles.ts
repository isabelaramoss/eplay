import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  position: relative;
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 8px;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardTitle = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descr = styled.p`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
