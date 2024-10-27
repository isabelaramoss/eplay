import Button from '../Button'
import Tag from '../Tag'
import zoom from '../../assets/images/zoom.png'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'

//Em qualquer tela, quando clicado o ícone de carrinhho, esse componente será aberto. Por isso, colocamos ele em App.
const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={zoom} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={zoom} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00. <span>Em até 6x sem juros</span>
      </Prices>
      <Button type="button" title="Clique aqui para continuar com a compra">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

//aside -> barra lateral.

export default Cart
