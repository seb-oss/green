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

/**
 * @deprecated
 * Use `GroupedList` instead.
 */
export const Label = ({ children }: ValueListItemProps) => {
  return <dt>{children}</dt>
}

/**
 * @deprecated
 * Use `GroupedList` instead.
 */
export const Value = ({ children }: ValueListItemProps) => {
  return <dd>{children}</dd>
}

/**
 * @deprecated
 * Use `GroupedList` instead.
 */
export const List = ({ children, inverted }: ValueListProps) => {
  let classNames = 'gds-list'
  if (inverted) classNames += ' gds-list--inverted'
  return <dl className={classNames}>{children}</dl>
}

/**
 * @deprecated
 * Use `GroupedList` instead.
 */
export default { List, Label, Value }
