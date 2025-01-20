import Tag from '../Tag'
import Button from '../Button'

import { formatPrice } from '../ProductsList'
import { useGetFeatureGameQuery } from '../../services/api'

import { Image, Titulo, Precos } from './styles'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <Titulo>{game.name}</Titulo>
          <Precos>
            <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
