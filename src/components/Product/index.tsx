import { Card, CardTitle, Descr } from './styles'
import Tag from '../Tag'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <CardTitle>Nome do jogo</CardTitle>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descr>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta incidunt
      illo distinctio placeat provident, corporis voluptatem nihil facilis
      labore reiciendis voluptas accusamus excepturi, praesentium esse aliquid
      totam reprehenderit, saepe soluta?
    </Descr>
  </Card>
)

export default Product
