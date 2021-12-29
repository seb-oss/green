import { ListType } from '@sebgroup/extract'
import React, { HTMLAttributes, ReactNode } from 'react'

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  listType?: ListType
  children?: ReactNode
}

const ListItem = ({ listType, children, ...props }: ListItemProps) => {
  if (listType === 'table') {
    return <div>{children}</div>
  } else {
    return <li {...props}>{children}</li>
  }
}

export default ListItem
