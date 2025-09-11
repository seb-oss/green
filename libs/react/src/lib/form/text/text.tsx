import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

/**
 * @deprecated Please use the `gds-text` web component from green-core instead
 */
export const Text = ({ children }: TextProps) => (
  <span className="form-text">{children}</span>
)

export default Text
