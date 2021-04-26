import React, { memo } from 'react';
import styled from '@emotion/styled';
import { Github } from '@emotion-icons/fa-brands/Github/Github'
import { Linkedin } from '@emotion-icons/fa-brands/Linkedin/Linkedin'
import { Twitter } from '@emotion-icons/fa-brands/Twitter/Twitter'

const FooterContainer = styled.footer`
  display: flex;
  flex:  0 1 auto;
  flex-flow: row-reverse;
  height: 80px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
`

const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.tertiary};
  height: 24px;
  margin: 18px 6px 0;
`;

const links = [
  { Icon: Github, alt: 'Github', href: 'https://github.com/rubenspgcavalcante' },
  { Icon: Linkedin, alt: 'Linkedin', href: 'https://www.linkedin.com/in/rubens-pinheiro-a34a4823/' },
  { Icon: Twitter, alt: 'Twitter', href: 'https://twitter.com/rubenspgc' },
]

const Footer = () => {
  return (
    <FooterContainer>
      {links.map(({ Icon, alt, href }) => (
        <IconLink key={alt} target="_blank" rel="noopener" href={href} >
          <Icon height={24} width={24} alt={alt} />
        </IconLink>
      ))}
    </FooterContainer>
  )
};

export default memo(Footer);