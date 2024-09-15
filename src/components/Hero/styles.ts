import styled from 'styled-components'
import banner from '../../assets/images/fundo_hogwarts.png'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const HeroContainer = styled.div`
  position: relative;
  display: block;
  height: 480px;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 16px;

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 288px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`
