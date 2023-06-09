import React, { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'
import styled, { css } from 'styled-components'
import { defaultTheme } from './utils/theme'

type LinkProps = {
  children: React.ReactNode
  disableHighlight?: boolean
  external?: boolean
  href: string
  lg?: boolean
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
}

const linkStyles = css<LinkProps>`
  cursor: pointer;
  position: relative;
  font-size: ${(props) => (props.lg ? '1.15rem' : 'inherit')};
  font-family: ${(props) => props.theme.fonts.heading};
  color: #4a4345;
  text-decoration: none;

  &:hover {
    color: rgb(100, 100, 100);
  }

  .caption {
    position: relative;
    background-color: transparent;
  }
`

const StyledLink = styled.a<LinkProps>`
  ${linkStyles}
`

const StyledNextLink = styled(NextLink)<LinkProps>`
  ${linkStyles}
`

StyledLink.defaultProps = StyledNextLink.defaultProps = {
  theme: defaultTheme,
}

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  if (external) {
    return <StyledLink {...props} />
  }

  return <StyledNextLink {...props} />
}

export default Link
