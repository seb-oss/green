import {
  DropdownArgs,
  DropdownOption,
  OnChange,
  dropdownValues,
} from '@sebgroup/extract'
import React, { FormEvent } from 'react'
import { createComponent } from '@lit-labs/react'

import {
  GdsDropdown,
  GdsOption,
  getScopedTagName,
  registerTransitionalStyles,
} from '@sebgroup/green-core'

registerTransitionalStyles()

export const CoreDropdown = createComponent({
  tagName: getScopedTagName('gds-dropdown'),
  elementClass: GdsDropdown,
  events: { onchange: 'change' },
  react: React,
})

export const CoreOption = createComponent({
  tagName: getScopedTagName('gds-option'),
  elementClass: GdsOption,
  react: React,
})

export interface DropdownProps extends DropdownArgs {
  onChange?: OnChange
}

export const Dropdown = ({
  compareWith,
  display,
  id,
  informationLabel,
  label,
  loop,
  multiSelect,
  onChange,
  options,
  searchFilter,
  searchable,
  texts,
  useValue,
  validator,
  value,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState<
    DropdownOption | undefined
  >(options.find((o) => o.value === value))

  const handleOnChange = (e: any) => {
    console.log(e.detail?.value)
    if (e.detail?.value) {
      setSelectedOption(options.find((o) => o.value === e.detail.value))
    }
  }

  return (
    <div className="form-group">
      <CoreDropdown
        label={label}
        searchable={searchable}
        multiple={multiSelect}
        value={selectedOption?.value}
        onchange={handleOnChange}
      >
        {informationLabel && <span slot="form-info">{informationLabel}</span>}
        {validator && <span slot="form-info-after">{validator?.message}</span>}
        <CoreOption isPlaceholder aria-hidden>
          {texts?.placeholder || 'Select'}
        </CoreOption>
        {options.map((option) => (
          <CoreOption key={option.value} value={option.value}>
            {option.label}
          </CoreOption>
        ))}
      </CoreDropdown>
    </div>
  )
}

export default Dropdown
