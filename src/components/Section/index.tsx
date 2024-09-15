import { Container, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
}

const Section = ({ title, background }: Props) => (
  <Container background={background}>
    <Title>{title}</Title>
  </Container>
)

export default Section
