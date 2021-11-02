export interface DropdownOption {
  key: string
  value: unknown
  selected?: boolean
}

export interface ExtendedDropdownOption extends DropdownOption {
  id: string
}

export const extendOptions = (options: DropdownOption[], id: string): ExtendedDropdownOption[] => (
  options.map((o, ix) => ({ ...o, id: `${id}_option${ix}` }))
)

export const select = (options: ExtendedDropdownOption[], selected: ExtendedDropdownOption): ExtendedDropdownOption[] => (
  options.map((o) => ({ ...o, selected: o === selected }))
)
