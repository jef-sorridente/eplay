import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>Categorias</LinkItem>
          <LinkItem>Novidades</LinkItem>
          <LinkItem>Promoções</LinkItem>
        </Links>
      </nav>
    </div>
    <div>
      <LinkCart href="#">
        0 - produto(s) <img src={carrinho} alt="Carrinho" />
      </LinkCart>
    </div>
  </HeaderBar>
)

export default Header
