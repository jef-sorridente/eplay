import { Image, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          <span>De R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Precos>
      </div>
    </Image>
  )
}

export default Banner
