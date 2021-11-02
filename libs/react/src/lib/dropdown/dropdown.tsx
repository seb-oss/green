import { HTMLAttributes, useEffect, useState } from 'react'
import { usePopper } from 'react-popper'

export interface DropdownOption {
  key: string
  value: never
}

export interface DropdownProps {
  children?: string
  options: DropdownOption[]
}

export const Dropdown = ({ options, children }: DropdownProps) => {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<DropdownOption>()
  const [selectedText, setSelectedText] = useState(children || options[0].key)

  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)

  useEffect(() => {
    setSelectedText(selected ? selected.key : children ? children : options[0].key)
  }, [selected, options, children])

  const id = 'mylistbox'

  const toggleExpanded = () => setExpanded(!expanded)
  const select = (option: DropdownOption) => {
    setSelected(option)
    setExpanded(false)
  }

  const renderOption = (option: DropdownOption) => {
    const props: HTMLAttributes<HTMLLIElement> = {
      role: 'option',
      onClick: () => select(option)
    }
    if (option === selected) props['aria-selected'] = true

    return <li {...props}>{option.key}</li>
  }

  return (
    <div>
      <button
        aria-haspopup="listbox"
        aria-owns={id}
        aria-expanded={expanded}
        className="dropdown-toggle"
        onClick={toggleExpanded}
        ref={setReferenceElement}
      >
        {selectedText}
      </button>
      <div
        className={`popover ${expanded ? 'active' : ''}`}
        role="listbox"
        tabIndex={-1}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <button className="close m-4 m-sm-2 d-block d-sm-none">
          <span className="sr-only">Close</span>
        </button>
        <ul role="listbox">{ options.map(renderOption) }</ul>
      </div>
    </div>
  )
}

export default Dropdown
