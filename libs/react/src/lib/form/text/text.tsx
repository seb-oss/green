import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

export const Text = ({ children }: TextProps) => (
  <span className="form-text">{children}</span>
)

export default Text
