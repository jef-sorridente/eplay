class Game {
  category: string
  description: string
  infos: string[]
  system: string
  title: string
  id: number
  image: string

  constructor(
    id: number,
    category: string,
    description: string,
    infos: string[],
    system: string,
    title: string,
    image: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.infos = infos
    this.title = title
    this.system = system
    this.image = image
  }
}
export default Game
