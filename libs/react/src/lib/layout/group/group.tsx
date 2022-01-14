import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface GroupProps {
  children: ReactNode
}

export function Group({ children }: GroupProps) {
  return <div className="group">{children}</div>
}

export default Group
