import { VFC } from 'react'

interface ButtonProps {
  text: string
  type?: '' | 'button' | 'submit' | 'reset'
  className?: '' | 'primary' | 'secondary' | 'ghost'
}
export const Button: VFC<ButtonProps> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>
}
