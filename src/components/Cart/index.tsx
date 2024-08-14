import { useDispatch, useSelector } from 'react-redux'
import { Rootreducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'
import Tag from '../Tag'
import {
  Overlay,
  CartContainer,
  SideBar,
  Quantity,
  Prices,
  CartItem
} from './styles'
import { formatPrice } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: Rootreducer) => state.cart)

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
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>
          {items.length > 0
            ? `${items.length} jogo(s) no carrinho`
            : 'Seu carrinho está vazio...'}
        </Quantity>
        <Prices>
          Total de {formatPrice(getTotalPrice())}
          <span>Em Até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
