import { DropdownOption } from '@sebgroup/extract'
import { useDropdown } from './hooks'

export interface DropdownProps {
  id?: string
  children?: string
  options: DropdownOption[]
}

export const Dropdown = ({ id, options, children }: DropdownProps) => {
  const {
    listboxProps,
    toggleProps,
    listItems,
  } = useDropdown({ id, options, text: children })

  return (
    <div>
      <button {...toggleProps} />
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
