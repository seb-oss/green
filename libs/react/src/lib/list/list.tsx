import { ListType } from '@sebgroup/extract'
import React, {
  ReactNode,
  HTMLProps,
  OlHTMLAttributes,
  HTMLAttributes,
} from 'react'

interface ListProps extends HTMLAttributes<HTMLElement> {
  listType?: ListType
  children?: ReactNode[]
}

export const List = ({ listType, children, ...props }: ListProps) => {
  switch (listType) {
    case 'ordered': {
      const newProps: OlHTMLAttributes<HTMLOListElement> = { ...props }
      return <ol {...newProps}>{children?.map((child) => child)}</ol>
    }
    case 'unordered': {
      const newProps: HTMLProps<HTMLUListElement> = { ...props }
      return <ul {...newProps}>{children?.map((child) => child)}</ul>
    }
    case 'check': {
      const newProps: HTMLProps<HTMLUListElement> = { ...props }
      return (
        <ul {...newProps} className={listType}>
          {children?.map((child) => child)}
        </ul>
      )
    }
    default:
      return <ul></ul>
  }
}

export default List
