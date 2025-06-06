import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink to={to as string} type="link" title={title} onClick={onClick}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
