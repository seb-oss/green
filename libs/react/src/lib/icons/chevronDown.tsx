import React from 'react'

import { randomId } from '@sebgroup/extract'
import { IconProps } from '../../types/props'

/**
 * @deprecated
 * This component is deprecated. Use `gds-icon-chevron-down` instead from `@sebgroup/green-core`.
 *
 * */
export const ChevronDown = ({ focusable = false, title }: IconProps) => {
  let id
  if (title) id = randomId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 448 512"
      focusable={focusable}
      aria-labelledby={id}
    >
      {title && <title id={id}>{title}</title>}
      <path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z" />
    </svg>
  )
}
