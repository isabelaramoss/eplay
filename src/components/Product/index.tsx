import Tag from '../Tag'

import * as S from './styles'

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
  const getDescr = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  return (
    <S.Card
      to={`/produto/${id}`}
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
    >
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.CardTitle>{title}</S.CardTitle>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <S.Descr>{getDescr(description)}</S.Descr>
    </S.Card>
  )
}

export default Product
