import React, { HTMLProps, ReactNode } from 'react'
import { BadgeType } from '@sebgroup/extract'

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  children?: ReactNode
  badgeType?: BadgeType
  isCloseable?: boolean
  closeText?: string
  customColor?: string
  customBackgroundColor?: string
}

export function Badge({
  children,
  badgeType,
  isCloseable,
  closeText,
  customColor,
  customBackgroundColor,
  ...props
}: BadgeProps) {
  const [isClosed, setIsClosed] = React.useState<boolean>(false)
  const [type, setType] = React.useState<BadgeType | ''>('')

  React.useEffect(() => {
    if (badgeType) {
      setType(badgeType as BadgeType)
    }

    if (!!customColor || !!customBackgroundColor) {
      setType('')
    }
  }, [])

  return !isClosed ? (
    <span
      {...props}
      className={`badge ${type}`}
      style={{
        color: customColor,
        backgroundColor: customBackgroundColor,
      }}
    >
      <strong>{children}</strong>
      {isCloseable && (
        <button
          type="button"
          className="close"
          onClick={() => setIsClosed(true)}
        >
          {closeText}
          <i></i>
        </button>
      )}
    </span>
  ) : null
}

export default Badge
