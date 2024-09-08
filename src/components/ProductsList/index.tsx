import Product from '../Product'
import { List, ProductsContainer, ProductTitle } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <ProductsContainer>
    <div className="container">
      <ProductTitle>{title}</ProductTitle>
      <List>
        <Product
          title="Nome do jogo"
          infos={['-10%', 'R% 150']}
          category="Ação"
          system="Windows"
          image="//placehold.it/222x250"
          description="teste"
        />
        <Product
          title="Nome do jogo"
          infos={['-10%', 'R% 150']}
          category="Ação"
          system="Windows"
          image="//placehold.it/222x250"
          description="teste"
        />
        <Product
          title="Nome do jogo"
          infos={['-10%', 'R% 150']}
          category="Ação"
          system="Windows"
          image="//placehold.it/222x250"
          description="teste"
        />
        <Product
          title="Nome do jogo"
          infos={['-10%', 'R% 150']}
          category="Ação"
          system="Windows"
          image="//placehold.it/222x250"
          description="teste"
        />
      </List>
    </div>
  </ProductsContainer>
)

export default ProductsList
