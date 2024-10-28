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
            <Link to="/categorias/#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categorias/#action">AÇÃO</Link>
          </li>
          <li>
            <Link to="/categorias/#sports">ESPORTES</Link>
          </li>
          <li>
            <Link to="/categorias/#simulation">SIMULAÇÃO</Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <FooterLinks>
          <li>
            <Link to="/#on-sale">PROMOÇÕES</Link>
          </li>
          <li>
            <Link to="/#coming-soon">EM BREVE</Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
