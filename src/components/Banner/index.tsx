import { Image, Prices, Title } from './styles'
import { formataPreco } from '../ProductsList'
import Tag from '../Tag'
import Button from '../Button'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title> {game?.name} </Title>
          <Prices>
            De <span>{formataPreco(game?.prices.old)}</span>
            <br />
            por apenas {formataPreco(game?.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/produto/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
