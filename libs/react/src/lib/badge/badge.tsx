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

/**
 * Renders a badge component.
 *
 * @deprecated Please use the `gds-badge` web component from green-core instead
 *
 * @param {React.ReactNode} props.children - The content of the badge.
 * @param {string} props.badgeType - The type of the badge.
 * @param {boolean} props.isCloseable - Indicates if the badge is closeable.
 * @param {string} props.closeText - The text for the close button.
 * @param {string} props.customColor - The custom color for the badge.
 * @param {string} props.customBackgroundColor - The custom background color for the badge.
 * @returns {React.ReactNode} The rendered badge component.
 */
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
  }, [badgeType, customColor, customBackgroundColor])

  return !isClosed ? (
    <span
      {...props}
      className={`gds-badge ${type}`}
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
