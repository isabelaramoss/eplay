import Button from '../Button'
import Tag from '../Tag'
import { HeroContainer, Infos } from './styles'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwars Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
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
