import { HTMLProps, PropsWithChildren, useEffect, useState } from 'react'
import { ButtonVariant, LinkRel, LinkRole } from '@sebgroup/extract'

interface LinkProps {
  id?: string
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top' | string
  button?: boolean | ButtonVariant
  rel?: LinkRel | LinkRel[]
  role?: LinkRole
  external?: boolean
}

export const Link = ({ href, target, button, rel, role, external, id, children }: PropsWithChildren<LinkProps>) => {
  const [props, setProps] = useState<HTMLProps<HTMLAnchorElement>>({})
  useEffect(() => {
    const className = (button)
      ? ((typeof button === 'string') ? `button ${button}` : 'button')
      : undefined
    const rels = (rel) ? ((rel instanceof Array) ? rel : [rel]) : []
    if (external && !rels.includes('external')) rels.push('external')
    
    const newProps: HTMLProps<HTMLAnchorElement> = {
      role: role || ((button) ? 'button' : undefined),
      rel: rels.join(' ') || undefined,
      className,
      href,
      id,
      target,
    }
    setProps(newProps)
  }, [href, target, button, rel, external, id])
  return <a {...props}>{ children }</a>
}

export default Link
