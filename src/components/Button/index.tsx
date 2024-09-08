import { ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = () => <ButtonContainer>nome do botão</ButtonContainer>

export default Button
