import { ChangeEventHandler } from 'react'

export interface StepperArgs {
  id?: string
  value?: string | number
  min?: number
  max?: number
  step?: number
  onChange?: ChangeEventHandler<HTMLInputElement>
}
