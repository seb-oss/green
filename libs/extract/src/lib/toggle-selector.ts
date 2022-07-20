export type ToggleSelectorInputType = 'checkbox' | 'radio'

export type ToggleSelectorIconPosition = 'left' | 'right'

export type ToggleSelectorType = IToggleSelector | Array<IToggleSelector>

export interface IToggleSelector {
  value: string
  label?: string
  icon?: string
  iconPosition?: ToggleSelectorIconPosition
  customLabel?: HTMLElement
  description?: string
  disabled?: boolean
}

export interface IDisplayToggleSelector extends IToggleSelector {
  optionItem: IToggleSelector
  selected: boolean
}
