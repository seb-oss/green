import { ListType } from '@sebgroup/extract'
import { ReactNode, HTMLAttributes } from 'react'
import ListItem from './listItem'

export interface ListProps
  extends HTMLAttributes<HTMLOListElement | HTMLUListElement> {
  listType?: ListType
  tableCaption?: string
  tableData?: TableListProps[]
  children?: ReactNode[]
}

export interface TableListProps {
  title: string
  definition: string[]
}

export const List = ({
  listType,
  tableCaption,
  tableData,
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
          {tableData?.map((data, index) => (
            <ListItem listType={listType} tableRowData={data} key={index} />
          ))}
        </dl>
      </figure>
    )
  }
}

export default List
