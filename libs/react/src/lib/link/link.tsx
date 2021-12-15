import React, { HTMLProps } from 'react'

interface LinkProps {
  link?: string
  text?: string
}

export const Link = ({ link, text }: LinkProps) => {
  const props: HTMLProps<HTMLAnchorElement> = {}
  if (link) props.href = link

  return (
    <div>
      <a href={link} rel="noreferrer">
        {text}
      </a>
    </div>
  )
}

export default Link
