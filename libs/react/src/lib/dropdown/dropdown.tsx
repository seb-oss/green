import { DropdownArgs, OnChange } from '@sebgroup/extract'
import { DOMAttributes, HTMLAttributes, useRef } from 'react'
import { dropdownValues } from '@sebgroup/extract'
import { useDropdown } from './hooks'
import { Popover, Listbox, ListboxItem } from '@sebgroup/stems'
import React from 'react'

export interface DropdownProps extends DropdownArgs {
  onChange?: OnChange
}

//type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }> { open: boolean }

Popover.register()
Listbox.register()
ListboxItem.register()

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
      <stem-popover open={isOpen}>
        <stem-listbox>
          {props.options.map((o) => (
            <stem-listbox-item
              key={o.value}
              onClick={() => setIsOpen((state) => false)}
            >
              {o.label}
            </stem-listbox-item>
          ))}
        </stem-listbox>
      </stem-popover>
    </div>
  )
}

export default Dropdown
