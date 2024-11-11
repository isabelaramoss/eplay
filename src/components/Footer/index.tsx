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
            <Link
              title="Clique aqui para acessar jogos de RPG."
              to="/categorias/#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação."
              to="/categorias/#action"
            >
              AÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes."
              to="/categorias/#sports"
            >
              ESPORTES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação."
              to="/categorias/#simulation"
            >
              SIMULAÇÃO
            </Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <FooterLinks>
          <li>
            <Link
              title="Clique aqui para acessar a seção de promoções."
              to="/#on-sale"
            >
              PROMOÇÕES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a seção de em breve."
              to="/#coming-soon"
            >
              EM BREVE
            </Link>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
