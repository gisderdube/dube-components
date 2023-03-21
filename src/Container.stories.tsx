import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Container } from '.'

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
}

export default meta
type Story = StoryObj<typeof Container>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <Container style={{ border: '2px solid red' }}>
      <div style={{ backgroundColor: 'pink' }}>
        This is a default container. Try resizing the viewport to see its behavior.
      </div>
    </Container>
  ),
}
