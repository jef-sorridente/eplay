import { Card, Titulo, Descricao } from './styles'

import Tag from '../Tag'

const Product = () => {
  return (
    <Card>
      <img src="https://placehold.co/222x250" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Sistema</Tag>
      <Descricao>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        consectetur totam quasi, explicabo, sapiente aut est ut quisquam eveniet
        incidunt atque dolorem natus accusantium, a modi ex nesciunt similique
        impedit.
      </Descricao>
    </Card>
  )
}

export default Product
