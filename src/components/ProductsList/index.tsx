import { Game } from '../../pages/Home'
import Product from '../Product'
import { List, Container, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                key={game.id}
                title={game.name}
                infos={getGameTags(game)}
                category={game.details.category}
                system={game.details.system}
                image={game.media.thumbnail}
                description={game.description}
                id={game.id}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
