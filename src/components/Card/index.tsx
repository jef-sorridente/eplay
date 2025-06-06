import * as S from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <S.Container>
    <h2>{title}</h2>
    {children}
  </S.Container>
)

export default Card
