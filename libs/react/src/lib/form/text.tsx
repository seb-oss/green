import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
}

const Text = ({ children }: TextProps) => (
  <span className="form-text">{children}</span>
)

export default Text
