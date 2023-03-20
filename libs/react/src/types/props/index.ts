export interface IconProps {
  focusable?: boolean
  title?: string
  fill?: string
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
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  label?: string
  instruction?: string
  errorMessage?: string
  hasTextbox?: boolean
  disabled?: boolean
}
