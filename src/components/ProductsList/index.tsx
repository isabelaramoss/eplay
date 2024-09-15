import Game from '../../models/Game'
import Product from '../Product'
import { List, Container, ProductTitle } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <ProductTitle>{title}</ProductTitle>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            infos={game.infos}
            category={game.category}
            system={game.system}
            image={game.image}
            description={game.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
