import React from 'react'

import { randomId } from '@sebgroup/extract'
import { IconProps } from '../../types/props'

/**
 * @deprecated
 * This component is deprecated. Use `gds-icon-square-exclamation` instead from `@sebgroup/green-core`.
 */
export const SquareExclamation = ({
  focusable = false,
  title,
  ...props
}: IconProps) => {
  let id
  if (title) id = randomId()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={props['aria-hidden']}
      focusable={focusable}
      aria-labelledby={id}
    >
      {title && <title id={id}>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2857 4H5.71429C4.7675 4 4 4.7675 4 5.71429V18.2857C4 19.2325 4.7675 20 5.71429 20H18.2857C19.2325 20 20 19.2325 20 18.2857V5.71429C20 4.7675 19.2325 4 18.2857 4ZM10.8682 7.42857H13.1318C13.3777 7.42857 13.5731 7.635 13.5597 7.8805L13.2948 12.7376C13.2824 12.9649 13.0945 13.1429 12.8669 13.1429H11.1331C10.9055 13.1429 10.7176 12.9649 10.7052 12.7376L10.4402 7.8805C10.4269 7.635 10.6223 7.42857 10.8682 7.42857ZM12 17.0714C11.0927 17.0714 10.3571 16.3359 10.3571 15.4286C10.3571 14.5213 11.0927 13.7857 12 13.7857C12.9073 13.7857 13.6429 14.5213 13.6429 15.4286C13.6429 16.3359 12.9073 17.0714 12 17.0714Z"
        fill="#333333"
      />
    </svg>
  )
}
