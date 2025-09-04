import { randomId } from '@sebgroup/extract'
import { IconProps } from '../../types/props'

/**
 * @deprecated
 * This component is deprecated. Use `gds-icon-cross` instead from `@sebgroup/green-core`.
 */
export const Times = ({ focusable = false, title }: IconProps) => {
  let id
  if (title) id = randomId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      focusable={focusable}
      aria-labelledby={id}
    >
      {title && <title id={id}>{title}</title>}
      <path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" />
    </svg>
  )
}
