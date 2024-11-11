import Product from '../Product'

import { Game } from '../../pages/Home'

import { List, Container, Title } from './styles'
import { parseToBrl } from '../../utils'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }

    return tags
  }

  return (
    <Container background={background} id={id}>
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
