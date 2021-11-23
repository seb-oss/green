export interface DropdownOption {
  key: string
  value: unknown
  selected?: boolean
}

export interface ExtendedDropdownOption
  extends DropdownOption, ElementProps {
    focused?: boolean
}

export interface Attributes {
  'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | undefined
  'aria-owns'?: string
  'aria-expanded'?: boolean
  'aria-selected'?: boolean
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
  isOpen: boolean
  options: ExtendedDropdownOption[]
  elements: Partial<{
    toggler: Partial<ElementProps>
    listbox: Partial<ElementProps>
  }>
}
