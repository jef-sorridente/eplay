import Product from '../components/Product'
import { Container, List, Title } from './styles'

type Props = {
  title: string
  background: 'gray' | 'brack'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Container>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
