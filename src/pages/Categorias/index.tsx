import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    infos: ['10%', 'R$250,00'],
    image: resident,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 2,
    infos: ['5%', 'R$290,00'],
    image: resident,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 3,
    infos: ['R$150,00'],
    image: resident,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'Windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  },
  {
    id: 4,
    infos: ['30%', 'R$200,00'],
    image: resident,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'XBOX ONE',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    infos: ['17/05'],
    image: diablo,
    title: 'Diablo IV',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment.'
  },
  {
    id: 6,
    infos: ['17/05'],
    image: zelda,
    title: 'Zelda',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment.'
  },
  {
    id: 7,
    infos: ['17/05'],
    image: starWars,
    title: 'Star Wars',
    category: 'RPG',
    system: 'Windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment.'
  },
  {
    id: 8,
    infos: ['17/05'],
    image: resident,
    title: 'Resident Evil 4',
    category: 'RPG',
    system: 'Nitendo Switch',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment.'
  }
]

const Categorias = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categorias
