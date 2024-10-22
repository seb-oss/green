import React, { HTMLAttributes, ReactNode } from 'react'

import { ListType } from '@sebgroup/extract'
import { TableListProps } from './list'

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  listType?: ListType
  tableRowData?: TableListProps
  children?: ReactNode
}

const ListItem = ({
  listType,
  tableRowData,
  children,
  ...props
}: ListItemProps) => {
  if (listType === 'table') {
    return (
      <dl>
        <div>
          <dt>{tableRowData?.title}</dt>
          {tableRowData?.definition.map((item, index) => (
            <dd key={index}>{item}</dd>
          ))}
        </div>
      </dl>
    )
  } else {
    return <li {...props}>{children}</li>
  }
}

export default ListItem
