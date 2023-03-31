import React, { forwardRef } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { defaultTheme } from './utils/theme'

type ButtonProps = {
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  secondary?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  padding: 8px 15px;
  color: ${(props) => props.theme.colors.light};
  border: none;
  font-size: 1rem;
  outline: none;
  font-family: ${(props) => props.theme.fonts.heading};
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};

  ${(props) =>
    props.secondary &&
    css`
      background: transparent;
      border: 2px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background: #d2d2d2;
      cursor: not-allowed;

      &::after {
        display: none;
      }
    `}
`

StyledButton.defaultProps = {
  theme: defaultTheme,
}

export type Ref = HTMLButtonElement

const Button = forwardRef<Ref, ButtonProps>(({ children, disabled, onClick, ...props }, ref) => {
  const passedTheme = useTheme()
  console.log('passedTheme:', passedTheme)
  return (
    <StyledButton ref={ref} disabled={disabled} onClick={(e) => (disabled ? null : onClick?.(e))} {...props}>
      {children}
    </StyledButton>
  )
})

Button.displayName = 'Button'

export default Button
