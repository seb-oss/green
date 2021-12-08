import { DropdownOption } from '@sebgroup/extract'
import { useRef } from 'react'
import { useDropdown } from './hooks'

export interface DropdownProps {
  id?: string
  children?: string
  options: DropdownOption[]
  loop?: boolean
}

export const Dropdown = ({ id, options, loop, children }: DropdownProps) => {
  const togglerRef = useRef<HTMLButtonElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)
  const {
    dropdown,
    listboxProps,
    togglerProps,
    listItems,
  } = useDropdown({
    id,
    options,
    loop,
    togglerRef,
    listboxRef,
    text: children
  })

  return (
    <div>
      <button {...togglerProps} ref={togglerRef} />
      <div {...listboxProps} ref={listboxRef}>
        <button className="close m-4 m-sm-2 d-block d-sm-none" onClick={dropdown?.close}>
          <span className="sr-only">Close</span>
        </button>
        <ul role="listbox">
          { listItems.map((liProps) => <li key={liProps.id} {...liProps} />) }
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
