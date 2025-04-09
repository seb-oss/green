import React, { JSX, useId } from 'react'
import classnames from 'classnames'

import { useTableContext } from '../../context/TableContextProvider'
import { TableCell, TableCellProps } from '../TableCell'
import { TableHeaderCell, TableHeaderCellProps } from '../TableHeaderCell'

export type TableRowProps = JSX.IntrinsicElements['tr'] & {
  checked?: boolean
  indeterminate?: boolean
  isHeaderRow?: boolean
  hideSelect?: boolean
  uniqueKey?: string
  parentKey?: string
  isExpanded?: boolean
  isSubRow?: boolean
  collapseButtonProps?: JSX.IntrinsicElements['button']
  checkboxProps?: JSX.IntrinsicElements['input']
}

const angleDown: JSX.Element = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
  </svg>
)
const angleRightIcon: JSX.Element = (
  <svg
    name="angle-right"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 512"
  >
    <path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" />
  </svg>
)

const TableRow = React.forwardRef(
  (
    {
      className,
      isHeaderRow,
      hideSelect,
      uniqueKey,
      parentKey,
      checked = false,
      indeterminate = false,
      isSubRow = false,
      isExpanded = false,
      checkboxProps = {},
      collapseButtonProps = {},
      ...props
    }: TableRowProps,
    ref: React.ForwardedRef<HTMLTableRowElement>,
  ) => {
    const tableContext = useTableContext()
    const [uniqueId, setUniqueId] = React.useState<string>(uniqueKey as string)
    const [isShown, setIsShown] = React.useState<boolean>(false)
    const [expanded, setExpanded] = React.useState<boolean>(isExpanded)
    const [isParentRow, setIsParentRow] = React.useState<boolean>(isExpanded)
    const [columnProps, setColumnProps] = React.useState<
      Omit<TableHeaderCellProps, 'ref'> | Omit<TableCellProps, 'ref'> | null
    >(null)
    const [expandedRows, setExpandedRows] = React.useState<Array<string>>(
      tableContext.tableState?.expandedRows || [],
    )
    const headerId: string = useId()

    /** initiate default expanded row */
    const initiateExpandedRows = React.useCallback(() => {
      const newExpandedRows: Array<string> = [...expandedRows]
      const expandedIndex: number = newExpandedRows.indexOf(uniqueId)
      if (isExpanded && expandedIndex === -1) {
        newExpandedRows.push(uniqueId)
      } else if (expandedIndex > -1) {
        const expandedIndex: number = newExpandedRows.indexOf(uniqueId)
        newExpandedRows.splice(expandedIndex, 1)
      }
      tableContext.setTableState({
        ...tableContext.tableState,
        expandedRows: newExpandedRows,
      })
      setExpandedRows(newExpandedRows)
    }, [isExpanded, uniqueId])

    React.useEffect(() => {
      setUniqueId(isHeaderRow ? 'all' : uniqueKey || headerId)
    }, [uniqueKey, isHeaderRow])

    React.useEffect(() => {
      setExpandedRows(tableContext.tableState.expandedRows || [])
    }, [tableContext.tableState.expandedRows])

    React.useEffect(() => {
      setExpanded(isExpanded)
      if (!isSubRow && !isHeaderRow && tableContext.onRowExpand) {
        initiateExpandedRows()
      }
    }, [isExpanded, initiateExpandedRows])

    React.useEffect(() => {
      setColumnProps(isHeaderRow ? { disableSort: true } : null)
    }, [isHeaderRow])

    React.useEffect(() => {
      setIsParentRow(!(isHeaderRow || isSubRow))
    }, [isHeaderRow, isSubRow])

    React.useEffect(() => {
      if (tableContext.onRowExpand) {
        setIsShown(isSubRow && expandedRows.indexOf(parentKey as string) > -1)
      }
    }, [expandedRows])

    const Cell = isHeaderRow ? TableHeaderCell : TableCell

    return (
      <tr
        {...props}
        ref={ref}
        className={classnames(className, {
          'sub-row': isSubRow,
          expanded: isExpanded,
          collapsible: isParentRow && !!tableContext.onRowExpand,
          show: isShown,
        })}
      >
        {!!tableContext.onRowExpand && (
          <Cell
            {...columnProps}
            className={classnames({ 'collapse-control': isParentRow })}
          >
            {isParentRow && (
              <button
                {...collapseButtonProps}
                className={classnames(
                  'collapse-btn',
                  collapseButtonProps.className,
                )}
                onClick={() =>
                  tableContext?.onRowExpand?.(!isExpanded, uniqueId)
                }
              >
                <div className="icon-holder">
                  {expanded ? angleDown : angleRightIcon}
                </div>
              </button>
            )}
          </Cell>
        )}
        {!!tableContext.onRowSelect && (
          <Cell
            {...columnProps}
            className={classnames({
              'select-control': !(hideSelect || isSubRow),
            })}
          >
            {!(hideSelect || isSubRow) && (
              <label className="form-control p-0">
                <input
                  type="checkbox"
                  checked={checked}
                  ref={(input: HTMLInputElement) => {
                    if (input) {
                      input.indeterminate = indeterminate && !checked
                    }
                  }}
                  name={`tb_checkbox_${uniqueId}`}
                  id={`tb_checkbox_${uniqueId}`}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    tableContext?.onRowSelect?.(event, uniqueId)
                  }
                />
                <i className="m-0" />
              </label>
            )}
          </Cell>
        )}
        {props.children}
      </tr>
    )
  },
)

TableRow.displayName = 'TableRow'

export { TableRow }
