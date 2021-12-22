import { Observable, Subscription } from 'rxjs'
import { AriaAttributes } from 'react'
import { Instance } from '@popperjs/core'

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
  style?: CSSStyleDeclaration
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
  isLooping: boolean
  options: ExtendedDropdownOption[]
  elements: Partial<{
    toggler: Partial<ElementProps>
    listbox: Partial<ElementProps>
  }>
  keyboardEvents: Observable<KeyboardEvent>
  subscription: Subscription
}

export type DropdownListener = (dropdown: AbstractDropdown) => void

export interface DropdownArgs {
  id?: string
  options: DropdownOption[]
  loop?: boolean
  text?: string
}

export interface DropdownHandler {
  dropdown: AbstractDropdown
  toggler: HTMLElement
  listbox: HTMLElement
  popper?: Instance
  subscription: Subscription
  isAlive: boolean

  update: (props: DropdownArgs) => Promise<void>
  active: (isActive: boolean) => Promise<void>
  loop: (isLooping: boolean) => Promise<void>
  open: () => Promise<void>
  close: () => Promise<void>
  toggle: () => Promise<void>
  select: (selection: ExtendedDropdownOption | number) => Promise<void>
  destroy: () => void
}
