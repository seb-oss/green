import { ListType } from '@sebgroup/extract'
import { ReactNode, HTMLAttributes } from 'react'
import ListItem from './listItem'

interface ListProps
  extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  listType?: ListType
  children?: ReactNode[]
}

export const List = ({ listType, children, ...props }: ListProps) => {
  if (listType === 'ordered') {
    return (
      <ol {...props}>
        {children?.map((child, index) => (
          <ListItem key={index}>{child}</ListItem>
        ))}
      </ol>
    )
  } else {
    return (
      <ul {...props} className={listType}>
        {children?.map((child, index) => (
          <ListItem key={index}>{child}</ListItem>
        ))}
      </ul>
    )
  }
}

export default List
