import { Card, CardTitle, Descr, Infos } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  category: string
  system: string
  image: string
  description: string
  infos: string[]
}

const Product = ({
  infos,
  image,
  title,
  category,
  system,
  description
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <CardTitle>{title}</CardTitle>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descr>{description}</Descr>
  </Card>
)

export default Product
