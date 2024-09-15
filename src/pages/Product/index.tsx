import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat
          quam est molestias, recusandae voluptatibus quasi molestiae tenetur
          vitae dolorum. Voluptatibus fuga corrupti ea quasi libero porro at a
          officia perferendis ipsa, quidem officiis esse nostrum eos?
          Voluptatem, velit ratione minus consequatur omnis est fuga saepe porro
          temporibus tenetur corporis perspiciatis tempora officia nemo sapiente
          quae magni soluta necessitatibus numquam exercitationem ipsa quibusdam
          dolorum deleniti? Natus quam voluptatem minima sint tempora vero
          dolores quo consequuntur tenetur a error reprehenderit voluptate,
          dolorem blanditiis, officiis accusantium eligendi sed ad? Id, eaque
          expedita commodi, incidunt necessitatibus vero quidem perspiciatis
          eligendi deserunt asperiores quia.
        </p>
      </Section>
    </>
  )
}

export default Product
