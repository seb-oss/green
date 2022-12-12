import { Subscription, Subject } from 'rxjs'
import { AriaAttributes } from 'react'
import { Instance } from '@popperjs/core'
import { IValidator } from '../helperFunction'

export type CompareWith<T = any> = (o1: T, o2: T) => boolean

export type SearchFilter<T = any> = (search: string, value: T) => boolean

export type OnChange<T = any> = (value: T) => void

export type DropdownListener = (dropdown: AbstractDropdown) => void

export interface DropdownOption {
  label?: string
  value?: any
  selected?: boolean
  [key: string]: any
}

export interface DropdownTexts {
  select?: string
  selected?: string
  placeholder?: string
  searchPlaceholder?: string
  close?: string
  optionsDescription?: string
}

export interface DropdownOptionElement extends DropdownOption, ElementProps {
  active?: boolean
  hidden?: boolean
}

export interface Attributes extends AriaAttributes {
  id?: string
  role?: string
  style?: CSSStyleDeclaration
  tabIndex?: number
}

export interface ElementProps {
  attributes: Attributes
  classes: string[]
}

export interface AbstractDropdown {
  id: string
  value: any
  texts: DropdownTexts
  isActive: boolean
  isOpen: boolean
  isLooping: boolean
  isMultiSelect: boolean
  isSearchable: boolean
  isTouched: boolean
  useValue: string
  display: string
  validator: IValidator
  compareWith: CompareWith
  searchFilter?: SearchFilter
  options: DropdownOptionElement[]
  elements: Partial<{
    toggler: Partial<ElementProps>
    listbox: Partial<ElementProps>
    fieldset: Partial<ElementProps>
  }>
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

export interface DropdownHandler {
  dropdown: AbstractDropdown
  toggler: HTMLElement
  listbox: HTMLElement
  popper?: Instance
  subscription: Subscription
  isAlive: boolean
  onChange: OnChange
  onDestroy$: Subject<void>
  onTouched?: () => void

  update: (props: DropdownArgs) => Promise<void>
  blur: () => Promise<void>
  active: (isActive: boolean) => Promise<void>
  loop: (isLooping: boolean) => Promise<void>
  multiSelect: (isMultiSelect: boolean) => Promise<void>
  searchable: (isSearchable: boolean) => Promise<void>
  open: () => Promise<void>
  close: () => Promise<void>
  toggle: () => Promise<void>
  select: (
    selection: DropdownOptionElement,
    closeOnSelect?: boolean
  ) => Promise<void>
  selectByValue: (selection: any) => Promise<void>
  validate: (validator: IValidator) => Promise<void>
  search: (searchInput: string) => Promise<void>
  resetTouchedState: () => Promise<void>
  destroy: () => void
}
