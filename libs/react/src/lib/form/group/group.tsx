import { ReactNode } from 'react'
import classNames from 'classnames'

/* eslint-disable-next-line */
export interface GroupProps {
  children: ReactNode
  error?: Error | string
  groupBorder?: boolean
  groupFocus?: boolean
  invalid?: boolean
  id?: string
  className?: classNames.Argument
}

export function Group({
  id,
  children,
  error,
  className,
  groupBorder = false,
  groupFocus = false,
}: GroupProps) {
  const groupClassName = classNames(
    'group',
    { 'group-border': groupBorder },
    { 'group-focus': groupFocus },
    { 'is-invalid': error },
    className
  )
  const errorMessage = error
    ? (error as Error).message || (error as string)
    : ''
  return (
    <div className="form-group" id={id}>
      <div className={groupClassName}>{children}</div>
      {error && <span className="form-info">{errorMessage}</span>}
    </div>
  )
}

export default Group
