import { useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { Game } from '../../pages/Home'
import { parseToBrl } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import { HeroContainer, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <HeroContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              title="Clique aqui para adicionar este jogo ao carrinho"
              type="button"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </HeroContainer>
  )
}

export default Hero
