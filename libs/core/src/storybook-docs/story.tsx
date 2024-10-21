import React, { ReactNode } from 'react'

interface StoryProps {
  path: string
  children: ReactNode
}

const Story = ({ path, children }: StoryProps) => {
  return (
    <a href={path} style={{ all: 'unset', cursor: 'pointer' }}>
      {children}
    </a>
  )
}

export default Story
