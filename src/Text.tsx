import React from 'react'
import styled, { css } from 'styled-components'
import { defaultTheme } from './utils/theme'

export type AlignProps = {
  center?: boolean
  right?: boolean
  mobileLeft?: boolean
  mobileRight?: boolean
  mobileCenter?: boolean
}

export const alignStyles = css<AlignProps>`
  text-align: ${(p) => (p.center ? 'center' : p.right ? 'right' : 'left')};
  @media (max-width: 950px) {
    ${(props) =>
      props.mobileCenter &&
      css`
        text-align: center;
      `}
    ${(props) =>
      props.mobileLeft &&
      css`
        text-align: left;
      `}
    ${(props) =>
      props.mobileRight &&
      css`
        text-align: right;
      `}
  }
`

type TextProps = AlignProps & {
  big?: boolean
  bold?: boolean
  small?: boolean
  size?: string
  limitWidth?: boolean
  light?: boolean
  margin?: boolean
  marginBig?: boolean
}

const baseStyle = css<TextProps>`
  font-size: ${(props) => props.size || (props.big ? '1.25rem' : props.small ? '0.75rem' : '1rem')};
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  ${(props) =>
    props.limitWidth &&
    css`
      max-width: 400px;
    `}
  color: ${(props) => (props.light ? props.theme.colors.light : props.theme.colors.dark)};

  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 0.6rem;
    `}

  ${(props) =>
    props.marginBig &&
    css`
      margin-bottom: 1.4rem;
    `}

  ${alignStyles}
`

const Block = styled.p`
  ${baseStyle}
`
const Inline = styled.span`
  ${baseStyle}
`

Block.defaultProps = Inline.defaultProps = {
  theme: defaultTheme,
}

export default function Text({
  big,
  small,
  children,
  inline,
  center,
  right,
  mobileLeft,
  mobileRight,
  mobileCenter,
  limitWidth = true,
  light,
  bold,
  ...props
}: TextProps & React.HTMLAttributes<HTMLParagraphElement> & { inline?: boolean }) {
  const Node = inline ? Inline : Block

  return (
    <Node
      big={big}
      small={small}
      center={center}
      right={right}
      limitWidth={limitWidth}
      light={light}
      mobileLeft={mobileLeft}
      mobileRight={mobileRight}
      mobileCenter={mobileCenter}
      bold={bold}
      {...props}
    >
      {children}
    </Node>
  )
}
