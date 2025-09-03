import React from 'react'

import { randomId } from '@sebgroup/extract'
import { IconProps } from '../../types/props'

/**
 *
 * @deprecated
 * This component is deprecated. Use `gds-icon-check` instead from `@sebgroup/green-core`.
 */
export const Check = ({ focusable = false, title }: IconProps) => {
  let id
  if (title) id = randomId()
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      focusable={focusable}
      aria-labelledby={id}
    >
      {title && <title id={id}>{title}</title>}
      <path
        d="M17.6203 6.60836L9.40014 14.8285L6.37976 11.8081C6.23332 11.6617 5.99588 11.6617 5.84942 11.8081L4.96554 12.692C4.8191 12.8384 4.8191 13.0759 4.96554 13.2223L9.13495 17.3917C9.28138 17.5382 9.51882 17.5382 9.66529 17.3917L19.0344 8.02258C19.1809 7.87614 19.1809 7.63871 19.0344 7.49224L18.1506 6.60836C18.0041 6.46193 17.7667 6.46193 17.6203 6.60836Z"
        fill="white"
      />
    </svg>
  )
}
