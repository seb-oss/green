import {ChangeEvent} from 'react'
import { StepperArgs, useStepper } from './hook'
import {IValidator, validateClassName, IndicatorType} from "@sebgroup/extract";

export interface StepperProps extends StepperArgs {
  label?: string
  description?: string
  statusMessage?: string
  validator?: IValidator
}


// TODO: Should be named "Numeric input" instead of stepper?

export function Stepper({
  label,
  description,
  statusMessage,
  validator,
  ...stepperArgs
}: StepperProps) {

  const [stepper, data] = useStepper(stepperArgs)

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    stepper.setValue(e.target.valueAsNumber)
  }

  const PrimitiveStepper = (
    <div className={`group group-border group-stepper ${validator && validateClassName(validator?.indicator as IndicatorType)}`}>
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
  )

  if (!label && !description && !statusMessage && !validator) return PrimitiveStepper;

  return (
    <div className="form-group">
      { label && (
        <label htmlFor={data.id}>{ label }</label>
      )}
      { description && (
        <span className="form-info">{ description }</span>
      )}
      <div className="stepper-wrapper">
        { PrimitiveStepper }
        { validator && (
          <span className="form-info">{ validator.message }</span>
        )}
      </div>
    </div>
  )
}
