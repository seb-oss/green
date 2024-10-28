import React, { ReactNode } from 'react'

interface StoryProps {
  path: string
  children: ReactNode
}

const Story = ({ path, children }: StoryProps) => {
  return (
    <>
      <style>{`
        .story-link {
          all: unset;
          cursor: pointer;
          color: currentColor;  
          text-decoration: none; 

          &:hover {
            background-color: #fff;
          }
        }
      `}</style>
      <a href={path} className="story-link">
        {children}
      </a>
    </>
  )
}

export default Story
