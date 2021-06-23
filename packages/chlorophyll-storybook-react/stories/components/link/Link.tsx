import { VFC } from 'react'

interface LinkProps {
  text: string
  href: string
  className?: '' | 'button'
}
export const Link: VFC<LinkProps> = ({ text, ...props }) => {
  return <a {...props}>{text}</a>
}
