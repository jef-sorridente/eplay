import { useEffect, useState } from 'react'
import { Image, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formatPrice } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

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
