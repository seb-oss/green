import {ChangeEvent} from 'react'
import { StepperArgs, useStepper } from './hook'

export interface StepperProps extends StepperArgs {
  label?: string
  description?: string
  statusMessage?: string
}

export function Stepper({
  label,
  description,
  statusMessage,
  ...stepperArgs
}: StepperProps) {

  const [stepper, data] = useStepper(stepperArgs)

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    stepper.setValue(e.target.valueAsNumber)
  }

  return (
    <div className="form-group">
      { label && (
        <label htmlFor={data.id}>{ label }</label>
      )}
      { description && (
        <span className="form-info">{ description }</span>
      )}
      <div className="group group-border group-stepper">
        <button onClick={() => stepper.down()}>-</button>
        <input
          id={data.id}
          type="number"
          onChange={onChangeEvent}
          onFocus={({target}) => target.select()}
          placeholder="0"
          value={data.value}
        />
        <button onClick={() => stepper.up()}>+</button>
      </div>
      { statusMessage && (
        <span className="form-info">{ statusMessage }</span>
      )}
    </div>
  )
}
