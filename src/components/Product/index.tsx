import { Card, CardTitle, Descr, Infos } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  category: string
  system: string
  image: string
  description: string
  infos: string[]
  id: number
}

const Product = ({
  infos,
  image,
  title,
  category,
  system,
  description,
  id
}: Props) => {
  const getDescr = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/produto/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <CardTitle>{title}</CardTitle>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descr>{getDescr(description)}</Descr>
    </Card>
  )
}

export default Product
