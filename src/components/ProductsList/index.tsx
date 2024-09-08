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
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </ProductsContainer>
)

export default ProductsList
