import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/fechar.png'
import { Items, Item, Action, Modal } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

//mock -> hardcoded - apenas para ocupar espaço
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/u9TY741PSh8?si=pb3pZ62sDN0203kw'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    //defaultCover -> imagem oficial do jogo, que colocamos na Home
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <div className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" />
          </header>
          <img src={spiderman} alt="" />
        </div>
      </Modal>
    </>
  )
}

export default Gallery
