import { Card, CardTitle, Descr } from './styles'
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
  title,
  category,
  system,
  image,
  description,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <CardTitle>{title}</CardTitle>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descr>{description}</Descr>
  </Card>
)

export default Product
