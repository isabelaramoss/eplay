import {
  FooterContainer,
  SectionTitle,
  FooterSection,
  FooterLinks,
  Link
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <FooterLinks>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>AÇÃO</Link>
          </li>
          <li>
            <Link>SIMULAÇÃO</Link>
          </li>
          <li>
            <Link>ESPORTES</Link>
          </li>
          <li>
            <Link>SIMULAÇÃO</Link>
          </li>
          <li>
            <Link>ESTRATÉGIA</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <FooterLinks>
          <li>
            <Link>NOVIDADES</Link>
          </li>
          <li>
            <Link>PROMOÇÕES</Link>
          </li>
          <li>
            <Link>EM BREVE</Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
