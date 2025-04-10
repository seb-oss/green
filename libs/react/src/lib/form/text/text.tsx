import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

export const Text = ({ children }: TextProps) => (
  <span className="gds-form-text">{children}</span>
)

export default Text
