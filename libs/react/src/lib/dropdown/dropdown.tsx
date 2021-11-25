import { DropdownOption } from '@sebgroup/extract'
import { useDropdown } from './hooks'

export interface DropdownProps {
  id?: string
  children?: string
  options: DropdownOption[]
  loop?: boolean
}

export const Dropdown = ({ id, options, loop, children }: DropdownProps) => {
  const {
    activate,
    deactivate,
    listboxProps,
    togglerProps,
    listItems,
  } = useDropdown({ id, options, loop, text: children })

  return (
    <div onFocus={activate} onBlur={deactivate}>
      <button {...togglerProps} />
      <div {...listboxProps}>
        <button className="close m-4 m-sm-2 d-block d-sm-none">
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
