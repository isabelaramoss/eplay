import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const FooterContainer = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`
export const FooterLinks = styled.ul`
  display: flex;
  margin-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-wrap: wrap;
    gap: 16px;
  }
`

export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`
