import React, { JSX } from 'react'

export type TableCellProps = JSX.IntrinsicElements['td']

export const TableCell = React.forwardRef(
  (
    { ...props }: TableCellProps,
    ref: React.ForwardedRef<HTMLTableCellElement>,
  ) => {
    return <td {...props} ref={ref} />
  },
)

TableCell.displayName = 'TableCell'
