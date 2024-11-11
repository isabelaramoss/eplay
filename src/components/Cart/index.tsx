import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'

//Em qualquer tela, quando clicado o ícone de carrinhho, esse componente será aberto. Por isso, colocamos ele em App.
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button type="button" title="Clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

//aside -> barra lateral.

export default Cart
