class Game {
  title: string
  category: string
  system: string
  image: string
  description: string
  infos: string[]
  id: number

  constructor(
    title: string,
    category: string,
    system: string,
    image: string,
    description: string,
    infos: string[],
    id: number
  ) {
    this.title = title
    this.category = category
    this.system = system
    this.image = image
    this.description = description
    this.infos = infos
    this.id = id
  }
}

export default Game
