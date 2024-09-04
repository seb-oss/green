import React, { ReactNode, MouseEvent } from 'react'
import { ButtonType } from '@sebgroup/extract'

interface IconButtonInterface {
  children: ReactNode
  type?: ButtonType
  onClick: (event: MouseEvent) => void
  'aria-expanded'?: boolean
  'aria-controls'?: string
  size?: 'small' | 'normal'
  title?: string
}

export const IconButton = ({
  children,
  onClick,
  ...props
}: IconButtonInterface) => {
  return (
    <button
      className={`icon ${props.size === 'small' && 'small'}`}
      onClick={onClick}
      aria-controls={props['aria-controls']}
      aria-expanded={props['aria-expanded']}
      type={props.type ?? 'button'}
      title={props.title}
    >
      {children}
    </button>
  )
}