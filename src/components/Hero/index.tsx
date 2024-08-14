import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formatPrice } from '../ProductsList'

import { Banner, Infos } from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span> De {formatPrice(game.prices.old)} </span>
            )}
            {game.prices.current && (
              <>
                Por R$
                {formatPrice(game.prices.current)}
              </>
            )}
          </p>
          {game.prices.current ? (
            <Button
              onClick={addToCart}
              type="button"
              title="clique aqui para adicionar esse jogo ao carrinho"
              variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          ) : (
            <p>Em Breve</p>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
