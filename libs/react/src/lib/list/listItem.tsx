import React, { HTMLAttributes, ReactNode } from 'react'

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

const ListItem = ({ children, ...props }: ListItemProps) => {
  return <li {...props}>{children}</li>
}

export default ListItem
