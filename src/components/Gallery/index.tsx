import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/fechar.png'
import { Items, Item, Action } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="" />
        <Action>
          <img src={zoom} alt="Clique para maximizar a imagem" />
        </Action>
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
      <Item>
        <img src={zelda} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
