import { ReactNode } from 'react'

/* eslint-disable-next-line */
export interface GroupProps {
  children: ReactNode
  error?: Error | string
  groupBorder?: boolean
  invalid?: boolean
}

export function Group({ children, error, groupBorder = false }: GroupProps) {
  const groupClassName = `group ${groupBorder ? 'group-border' : ''} ${error ? 'is-invalid' : ''}`
  const errorMessage = (error) ? (error as Error).message || (error as string) : ''
  return (
    <div className="form-group">
      <div className={groupClassName}>
        { children }
      </div>
      { error && (
        <span className="form-info">{ errorMessage }</span>
      )}
    </div>
  )
}

export default Group
