import React from 'react'

import styled, { css } from 'styled-components'
import { AlignProps, alignStyles } from './Text'
import { defaultTheme } from './utils/theme'

type HeadingProps = AlignProps & {
  limitWidth?: boolean
  light?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
}

const baseStyles = css<HeadingProps>`
  ${(props) =>
    props.limitWidth &&
    css`
      max-width: 450px;
    `}

  color: ${(props) => (props.light ? props.theme.colors.light : props.theme.colors.dark)};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-bottom: 0.6rem;
  ${alignStyles}
`

const H1 = styled.h1`
  ${baseStyles}
  font-size: 2.5rem;
`
const H2 = styled.h2`
  ${baseStyles}
  font-size: 1.88rem;
`
const H3 = styled.h3`
  ${baseStyles}
  font-size: 1.5rem;
`
const H4 = styled.h4`
  ${baseStyles}
  font-size: 1.25rem;
`

H1.defaultProps =
  H2.defaultProps =
  H3.defaultProps =
  H4.defaultProps =
    {
      theme: defaultTheme,
    }

export default function Heading({
  children,
  center,
  right,
  mobileLeft,
  mobileRight,
  mobileCenter,
  limitWidth = true,
  light,
  h2,
  h3,
  h4,
  ...props
}: HeadingProps & React.HTMLAttributes<HTMLHeadingElement>) {
  const Comp = h2 ? H2 : h3 ? H3 : h4 ? H4 : H1

  return (
    <Comp
      center={center}
      right={right}
      limitWidth={limitWidth}
      light={light}
      mobileLeft={mobileLeft}
      mobileRight={mobileRight}
      mobileCenter={mobileCenter}
      {...props}
    >
      {children}
    </Comp>
  )
}
