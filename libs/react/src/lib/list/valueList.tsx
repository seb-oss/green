import { ReactElement } from 'react'

interface ValueListProps {
  children?:
    | ReactElement<ValueListItemProps>
    | ReactElement<ValueListItemProps>[]
  divided?: boolean
  header?: string;
  horizontal?: boolean
  inverted?: boolean
  leftAlign?: boolean;
  slim?: boolean;
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

/**
 * This component renders a value list to the user.
 *
 * @param {ReactElement<ValueListItemProps>[]} children A list of label value pairs.
 * @param {boolean} divided Add dividers between each label value pair.
 * @param {string} header Group the list with a text.
 * @param {boolean} horizontal Display the label value pair horizontally.
 * @param {boolean} inverted Change which of label and value are bolded.
 * @param {boolean} leftAlign Align value left aligned when displayed horizontally.
 * @param {boolean} slim Make margins and paddings smaller to fit more in scree.
 * @returns {ReactNode} A React element that renders a value list to the user.
 */
export const List = ({ children, divided, header, horizontal, inverted, leftAlign, slim }: ValueListProps) => {
  let classNames = 'gds-list'
  if (divided) classNames += ' gds-list--divided'
  if (header) classNames += ' gds-list--grouped'
  if (horizontal) classNames += ' gds-list--horizontal'
  if (inverted) classNames += ' gds-list--inverted'
  if (leftAlign) classNames += ' gds-list--left-align'
  if (slim) classNames += ' gds-list--slim'
  
  const list = <dl className={classNames}>{children}</dl>;
  return header ? <figure className="gds-list-figure"><figcaption className="table-list-caption">{header}</figcaption>{list}</figure> : list;
}

export default { List, Label, Value }
