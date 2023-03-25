import React, { useMemo, useState } from 'react'
import styled, { css } from 'styled-components'
import { v4 as uuid } from 'uuid'
import { defaultTheme } from './utils/theme'

const baseStyles = css`
  border: 1px solid #cacaca;
  padding: 7px 5px;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 1rem;
  font-family: inherit;
  color: ${(props) => props.theme.colors.dark};
  outline: none;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 15px;
`

const StyledLabel = styled.label`
  font-size: 0.85rem;
  opacity: 0.6;
  cursor: pointer;
  transition: 125ms all ease-in-out;
`

const StyledInput = styled.input`
  ${baseStyles}
`
const StyledTextarea = styled.textarea`
  ${baseStyles}
  min-height: 150px;
`

StyledInput.defaultProps = StyledTextarea.defaultProps = { theme: defaultTheme }

type InputProps = {
  textarea?: boolean
  id?: string
  label?: string
  value: string
  onChange: (string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>
  style?: React.CSSProperties
}

const Input: React.FC<InputProps> = ({
  id: givenId,
  textarea,
  label,
  value,
  onChange,
  wrapperProps,
  style,
  ...props
}) => {
  const id = useMemo(() => {
    return givenId || (label ? `input-${label}` : uuid())
  }, [givenId, label])

  const [isFocused, setFocused] = useState(false)

  const InputEl = textarea ? StyledTextarea : StyledInput

  return (
    <InputGroup {...wrapperProps}>
      {(label && (
        <StyledLabel htmlFor={id} style={{ ...(isFocused && { opacity: 1 }) }}>
          {label}
        </StyledLabel>
      )) ||
        null}
      <InputEl
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        id={id}
        value={value}
        style={{ ...style, ...(isFocused && { borderColor: 'black' }) }}
        onChange={(e) => onChange?.(e.target.value, e)}
        {...props}
      />
    </InputGroup>
  )
}

export default Input
