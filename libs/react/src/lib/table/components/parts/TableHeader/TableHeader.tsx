import React, { JSX } from 'react'

import { TableRowProps } from '../TableRow'

export type TableHeaderProps = JSX.IntrinsicElements['thead']

const TableHeader = React.forwardRef(
  (
    { ...props }: TableHeaderProps,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
  ) => {
    return (
      <thead {...props} ref={ref}>
        {React.Children.count(props.children) === 1 &&
        React.isValidElement<TableRowProps>(props.children)
          ? React.cloneElement<any>(props.children, {
              isHeaderRow: true,
              index: -1,
            })
          : React.Children.map(props.children, (Child, i: number) => {
              return React.isValidElement<TableRowProps>(Child) &&
                (Child?.type as any)?.displayName === 'TableRow'
                ? React.cloneElement<any>(Child, {
                    index: i,
                    hideSelect: !Child.props.isHeaderRow,
                  })
                : Child
            })}
      </thead>
    )
  },
)

TableHeader.displayName = 'TableHeader'

export { TableHeader }
