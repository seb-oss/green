export interface IconProps {
  focusable?: boolean
  title?: string
  fill?: string
  width?: number
  height?: number
  'aria-hidden'?: boolean
}

export interface SelectorAttributesProps {
  id?: string
  className?: string
  testId?: string
}

export interface LabelProps {
  label?: string
  labelInformation?: string
}

export interface SliderProps {
  name?: string
  value?: number
  min?: number
  max?: number
  showMinMax?: boolean
  minMaxFormat?: (value: number, unit?: string) => string
  step?: number
  label?: string
  instruction?: string
  errorMessage?: string
  hasTextbox?: boolean
  unitLabel?: string
  disabled?: boolean
  onChange?: (value: number) => void
  enableClamping?: boolean
  onClamp?: (value: number) => void
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'

  /**
   * @deprecated Use `value` instead
   */
  defaultValue?: number
}
