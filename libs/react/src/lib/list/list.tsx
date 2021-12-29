import { ListType } from '@sebgroup/extract'
import { ReactNode, HTMLAttributes } from 'react'
import ListItem from './listItem'

interface ListProps
  extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  listType?: ListType
  tableCaption?: string
  children?: ReactNode[]
}

export const List = ({
  listType,
  tableCaption,
  children,
  ...props
}: ListProps) => {
  if (listType === 'ordered') {
    return (
      <ol {...props}>
        {children?.map((child, index) => (
          <ListItem key={index}>{child}</ListItem>
        ))}
      </ol>
    )
  } else if (listType !== 'table') {
    return (
      <ul {...props} className={listType}>
        {children?.map((child, index) => (
          <ListItem key={index}>{child}</ListItem>
        ))}
      </ul>
    )
  } else {
    return (
      <figure>
        <figcaption className="table-list-caption">{tableCaption}</figcaption>
        <dl>
          {children?.map((child, index) => (
            <ListItem listType={listType} key={index}>
              {child}
            </ListItem>
          ))}
        </dl>
      </figure>
    )
  }
}

export default List
