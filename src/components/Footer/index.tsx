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
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Ação</Link>
            </li>
            <li>
              <Link>Esportes</Link>
            </li>
            <li>
              <Link>Simulação</Link>
            </li>
            <li>
              <Link>Estratégia</Link>
            </li>

            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <Title>Acesso rápido</Title>
          <Links>
            <li>
              <Link>Novidades</Link>
            </li>
            <li>
              <Link>Promoções</Link>
            </li>
            <li>
              <Link>Em Breve</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{correntYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}
export default Footer
