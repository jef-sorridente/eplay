import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categories">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categories">Promoções</Link>
          </LinkItem>
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
