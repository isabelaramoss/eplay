import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.FooterLinks>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG."
              to="/categorias/#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Ação."
              to="/categorias/#action"
            >
              AÇÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes."
              to="/categorias/#sports"
            >
              ESPORTES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação."
              to="/categorias/#simulation"
            >
              SIMULAÇÃO
            </S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.FooterLinks>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de promoções."
              to="/#on-sale"
            >
              PROMOÇÕES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de em breve."
              to="/#coming-soon"
            >
              EM BREVE
            </S.Link>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.FooterContainer>
)

export default Footer
