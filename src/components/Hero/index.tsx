import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { HeroContainer, Infos } from './styles'
import { formataPreco } from '../ProductsList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <HeroContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          <span>De {formataPreco(game?.prices.old)}</span>
          Por {formataPreco(game?.prices.current)}
        </p>
        <Button
          variant="primary"
          title="Clique aqui para adicionar este jogo ao carrinho"
          type="button"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </HeroContainer>
)

export default Hero
