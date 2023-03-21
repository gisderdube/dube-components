import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 35px calc((100vw - 975px) / 2);
  @media (max-width: 1015px) {
    padding: 35px 20px;
  }
`

export default Container
