import { randomId } from '../id'

export interface StepperArgs {
  id?: string
  value?: number
  min?: number
  max?: number
  step?: number
}

export interface AbstractStepper {
  up: (value?: number) => void
  down: (value?: number) => void
  setValue: (value: number) => void
  setMin: (value?: number) => void
  setMax: (value?: number) => void
  setStep: (value: number) => void
}

export interface StepperData {
  id: string
  value?: number
  min?: number
  max?: number
  step: number
}

export const createStepper = (
  { value, min, max, step = 1, id = randomId() }: StepperArgs,
  update: (data: StepperData) => void,
): AbstractStepper => {
  let data: StepperData = { id, value, min, max, step }
  const stepper: AbstractStepper = {
    up: (value) => {
      data = compute(data, { value: value || data.step })
      update(data)
    },
    down: (value) => {
      data = compute(data, { value: -(value || data.step) })
      update(data)
    },
    setValue: (value) => {
      data = compute({ ...data, value }, {})
      update(data)
    },
    setMin: (value) => {
      data = compute(data, { min: value })
      update(data)
    },
    setMax: (value) => {
      data = compute(data, { max: value })
      update(data)
    },
    setStep: (value) => {
      data = compute(data, { step: value })
      update(data)
    },
  }
  update(data)

  return stepper
}

const isNumber = (val: number | undefined): boolean => (typeof val === 'number')

const compute = (data: StepperData, change: Partial<StepperData>): StepperData => {
  if (change.step) data.step = Math.max(change.step, 1)
  if (Object.prototype.hasOwnProperty.call(change, 'min')) data.min = change.min
  if (Object.prototype.hasOwnProperty.call(change, 'max')) data.max = change.max
  if (change.value) {
    const oldValue = data.value || 0
    const newValue = oldValue + change.value
    data.value = newValue
  }
  if (isNumber(data.value) && isNumber(data.min)) data.value = Math.max(data.value as number, data.min as number)
  if (isNumber(data.value) && isNumber(data.max)) data.value = Math.min(data.value as number, data.max as number)

  return { ...data }
}
