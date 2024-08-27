import { Container, Title, Links, Link, FooterSection } from './styles'

const Footer = () => {
  const correntYear = new Date().getFullYear()
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <Title>Categorias</Title>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Ação</Link>
            </li>
            <li>
              <Link to="/categories#sports">Esportes</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulação</Link>
            </li>
            <li>
              <Link to="/categories#fight">Luta</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <Title>Acesso rápido</Title>
          <Links>
            <li>
              <Link to="/#on-sale">Promoções</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Em Breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{correntYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}
export default Footer
