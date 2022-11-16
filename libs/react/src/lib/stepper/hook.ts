import { AbstractStepper, createStepper, randomId, StepperArgs, StepperData } from '@sebgroup/extract'
import { useEffect, useState } from 'react'

export { StepperArgs }

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {}

export const useStepper = (
  { min, max, value = 0, step = 1, id = randomId(), onChange }: StepperArgs,
): [AbstractStepper, StepperData] => {
  const pStepper: Partial<AbstractStepper> = {
    down: noop,
    setMax: noop,
    setMin: noop,
    setStep: noop,
    setValue: noop,
    up: noop,
  }
  const [stepper, setStepper] = useState<AbstractStepper>(pStepper as AbstractStepper)
  const [data, setData] = useState<StepperData>({ id, value, min, max, step })

  useEffect(() => { if (max !== data.max) stepper.setMax(max) }, [stepper, max])
  useEffect(() => { if (min !== data.min) stepper.setMin(min) }, [stepper, min])
  useEffect(() => { if (step !== data.step) stepper.setStep(step || 1) }, [stepper, step])
  useEffect(() => { if (value !== data.value) stepper.setValue(value || 0, false) }, [stepper, value])

  useEffect(() => {
    setStepper(createStepper({ id, value, min, max, step, onChange }, setData))
  }, [])

  return [stepper, data]
}
