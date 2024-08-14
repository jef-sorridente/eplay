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

const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src="https://placehold.co/600x400" alt="placeholder" />
          <div>
            <h3>Nome do Jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$: 150,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em Até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
