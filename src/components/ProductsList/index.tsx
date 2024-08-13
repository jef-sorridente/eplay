import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={['-10%%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={['-10%%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={['-10%%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
          <Product
            category="Ação"
            description="teste"
            image="https://placehold.co/222x250"
            infos={['-10%%', 'R$ 150']}
            system="Windows"
            title="Nome do jogo"
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
