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

interface BadgeStyles {
  container: React.CSSProperties,
  label: React.CSSProperties
}

const badgeStyles: BadgeStyles = {
  container: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '20px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 500,
  }
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
    if (!!badgeType) {
      setType(badgeType as BadgeType)
    }

    if (!!customColor || !!customBackgroundColor) {
      setType('custom')
    }
  }, [])

  return !isClosed ? (
    <span
      {...props}
      className={`badge ${type}`}
      style={{
        color: customColor,
        backgroundColor: customBackgroundColor,
        ...badgeStyles.container,
      }}
    >
      <strong style={badgeStyles.label}>{children}</strong>
      {isCloseable && (
        <button
          type="button"
          className="close"
          onClick={() => setIsClosed(true)}
        >
          {closeText}
        </button>
      )}
    </span>
  ) : null
}

export default Badge
