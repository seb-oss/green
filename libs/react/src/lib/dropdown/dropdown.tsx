import { DropdownArgs, OnChange } from '@sebgroup/extract'
import { DOMAttributes, HTMLAttributes, useRef } from 'react'
import { dropdownValues } from '@sebgroup/extract'
import { useDropdown } from './hooks'
import {
  PopoverReact as Popover,
  ListboxReact as Listbox,
  ListboxItemReact as ListboxItem,
} from '@sebgroup/stems'
import React from 'react'

export interface DropdownProps extends DropdownArgs {
  onChange?: OnChange
}

export const Dropdown = (props: DropdownProps) => {
  const { label, informationLabel, validator } = props
  const [isOpen, setIsOpen] = React.useState(false)

  //const { dropdown, listboxProps, togglerProps, listItems, multiSelectProps } =
  //  useDropdown({togglerRef, listboxRef, ...props})

  return (
    <div className="form-group">
      <button
        type="button"
        aria-haspopup="listbox"
        onClick={() => setIsOpen((state) => !state)}
      >
        Dropdown
      </button>
      <Popover open={isOpen}>
        <Listbox>
          {props.options.map((o) => (
            <ListboxItem
              key={o.value}
              onClick={() => setIsOpen((state) => false)}
            >
              {o.label}
            </ListboxItem>
          ))}
        </Listbox>
      </Popover>
    </div>
  )
}

export default Dropdown
