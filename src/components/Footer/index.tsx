import * as S from './styles'

const Footer = () => {
  const correntYear = new Date().getFullYear()
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.Title>Categorias</S.Title>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Ação"
                to="/categories#action"
              >
                Ação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Esportes"
                to="/categories#sports"
              >
                Esportes
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Simulação"
                to="/categories#simulation"
              >
                Simulação
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de Luta"
                to="/categories#fight"
              >
                Luta
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.Title>Acesso rápido</S.Title>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                Promoções
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de em breve"
                to="/#coming-soon"
              >
                Em Breve
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{correntYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </S.Container>
  )
}
export default Footer
