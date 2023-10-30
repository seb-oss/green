import React from 'react'
import { createComponent } from '@lit-labs/react'

import { GdsDropdown, GdsOption, getScopedTagName } from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

export type CompareWith<T = any> = (o1: T, o2: T) => boolean
export type SearchFilter<T = any> = (search: string, value: T) => boolean
export type DropdownPlacements = 'bottom-start' | 'top-start'
export type OnChange<T = any> = (value: T) => void

export type IndicatorType = 'success' | 'error' | 'info'

export type ValidatorType = 'Required' | 'Email'

export interface ValidatorRules {
  type: ValidatorType
  custom?: () => string | undefined
}

export interface IValidator {
  message: string
  indicator: IndicatorType
  rules?: ValidatorRules
}

export interface DropdownArgs {
  compareWith?: CompareWith
  display?: string // option key to display
  id?: string
  informationLabel?: string
  label?: string
  loop?: boolean
  multiSelect?: boolean
  onTouched?: () => void
  options: DropdownOption[]
  searchFilter?: SearchFilter
  searchable?: boolean
  texts?: DropdownTexts
  useValue?: string // option key to use as value
  validator?: IValidator
  value?: any
}
export interface DropdownTexts {
  select?: string
  selected?: string
  placeholder?: string
  searchPlaceholder?: string
  close?: string
  optionsDescription?: string
}
export interface DropdownOption {
  label?: string
  value?: any
  selected?: boolean
  [key: string]: any
}

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
  display = 'label',
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
  useValue = 'value',
  validator,
  value,
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = React.useState<
    DropdownOption | undefined
  >(options.find((o) => o.value === value))

  const handleOnChange = (e: any) => {
    if (e.detail?.value) {
      setSelectedOption(options.find((o) => o[useValue] === e.detail.value))
      onChange?.(e.detail?.value)
    }
  }

  // These adapter functions are used to maintain backwards compatibility with the old interface
  const compareWithAdapter = (o1: DropdownOption, o2: DropdownOption) => {
    const compareFn = compareWith || ((a, b) => a === b)
    return compareFn(o1, o2)
  }
  const searchFilterAdapter = (q: string, o: GdsOption) => {
    if (searchFilter) return searchFilter(q, o.value[useValue])
    else
      return ((q: string, o: GdsOption) =>
        o.innerHTML.toLowerCase().includes(q.toLowerCase()))(q, o)
  }

  return (
    <div className="form-group">
      <CoreDropdown
        id={id}
        label={label}
        searchable={searchable}
        multiple={multiSelect}
        value={selectedOption?.value}
        onchange={handleOnChange}
        invalid={validator?.indicator === 'error'}
        compareWith={compareWithAdapter}
        searchFilter={searchFilterAdapter}
      >
        {informationLabel && <span slot="sub-label">{informationLabel}</span>}
        {validator && <span slot="message">{validator.message}</span>}
        <CoreOption isPlaceholder aria-hidden>
          {texts?.placeholder || 'Select'}
        </CoreOption>
        {options.map((option) => (
          <CoreOption
            key={option[useValue]}
            value={option[useValue]}
            selected={option.selected}
          >
            {option[display]}
          </CoreOption>
        ))}
      </CoreDropdown>
    </div>
  )
}

export default Dropdown
