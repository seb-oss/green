import { FC, ReactNode } from 'react'

export interface GroupProps {
  children?: ReactNode
}

const Group: FC<GroupProps> = ({ children }) => {
  return <div className="group">{children}</div>
}

export default Group
