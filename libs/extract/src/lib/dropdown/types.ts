import { Observable, Subscription } from 'rxjs'
import { AriaAttributes } from 'react'

export interface DropdownOption {
  key: string
  value: unknown
  selected?: boolean
}

export interface ExtendedDropdownOption
  extends DropdownOption, ElementProps {}

export interface Attributes extends AriaAttributes {
  id?: string
  role?: string
  tabIndex?: number
}

export interface ElementProps {
  attributes: Attributes
  classes: string[]
}

export interface AbstractDropdown {
  id: string
  text: string
  isActive: boolean
  isOpen: boolean
  options: ExtendedDropdownOption[]
  elements: Partial<{
    toggler: Partial<ElementProps>
    listbox: Partial<ElementProps>
  }>
  keyboardEvents: Observable<KeyboardEvent>
  subscription: Subscription
}
