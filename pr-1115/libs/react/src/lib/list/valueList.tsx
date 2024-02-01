import { ReactElement } from 'react'

interface ValueListProps {
  children?:
    | ReactElement<ValueListItemProps>
    | ReactElement<ValueListItemProps>[]
  inverted?: boolean
}

interface ValueListItemProps {
  children: string
}

export const Label = ({ children }: ValueListItemProps) => {
  return <dt>{children}</dt>
}

export const Value = ({ children }: ValueListItemProps) => {
  return <dd>{children}</dd>
}

export const List = ({ children, inverted }: ValueListProps) => {
  let classNames = 'gds-list'
  if (inverted) classNames += ' gds-list--inverted'
  return <dl className={classNames}>{children}</dl>
}

export default { List, Label, Value }
