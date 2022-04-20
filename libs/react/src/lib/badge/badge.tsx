import React, { HTMLProps } from 'react'
import { BadgeType } from '@sebgroup/extract'

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  title: string
  badgeType?: BadgeType
  isCloseable?: boolean
  closeText?: string
}

export function Badge({
  title,
  badgeType,
  isCloseable,
  closeText,
  ...props
}: BadgeProps) {
  const [isClosed, setIsClosed] = React.useState<boolean>(false)

  return !isClosed ? 
    <span {...props} className={`badge ${badgeType}`}>
      <strong>{title}</strong>
      {isCloseable && (
        <button className="close" onClick={()=>setIsClosed(true)}>
          {/* <span className="sr-only">{closeText}</span> */}
        </button>
      )}
    </span>
  : null
}

export default Badge
