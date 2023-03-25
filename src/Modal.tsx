import React from 'react'
import styled from 'styled-components'
import { defaultTheme } from './utils/theme'

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 150;
`

const Content = styled.div`
  background: ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 25px;
  width: 525px;
  max-width: 90vw;
`

Content.defaultProps = { theme: defaultTheme }

export default function Modal({ children }) {
  return (
    <Bg>
      <Content>{children}</Content>
    </Bg>
  )
}
