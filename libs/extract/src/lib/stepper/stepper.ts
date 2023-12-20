export interface StepperArgs {
  id?: string
  value?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}
