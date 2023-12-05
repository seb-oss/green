import { ChangeEvent, useEffect, useState } from 'react'
import {
  IValidator,
  validateClassName,
  IndicatorType,
  StepperArgs,
} from '@sebgroup/extract'

export interface StepperProps extends StepperArgs {
  label?: string
  description?: string
  statusMessage?: string
  validator?: IValidator
}

// TODO: Should be named "Numeric input" instead of stepper?

export function Stepper({
  id,
  label,
  description,
  statusMessage,
  validator,
  value = 0,
  onChange,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
}: StepperProps) {
  const [localValue, setLocalValue] = useState<number>(value)

  const clamp = (v: number) => Math.max(min, Math.min(v, max))

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(e.target.valueAsNumber)) return
    const value = clamp(e.target.valueAsNumber)
    setLocalValue(value)
    if (onChange) {
      onChange(value)
    }
  }

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const down = () => {
    if (localValue > min) {
      const newValue = clamp(localValue - step)
      setLocalValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  const up = () => {
    if (localValue < max) {
      const newValue = clamp(localValue + step)
      setLocalValue(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      up()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      down()
    }
  }

  const PrimitiveStepper = (
    <div
      className={`group group-border group-stepper ${
        validator && validateClassName(validator?.indicator as IndicatorType)
      }`}
    >
      <button type="button" onClick={down}>
        -
      </button>
      <input
        id={id}
        type="number"
        onChange={onChangeEvent}
        onFocus={({ target }) => target.select()}
        onKeyDown={handleKeyDown}
        placeholder="0"
        value={localValue}
      />
      <button type="button" onClick={up}>
        +
      </button>
    </div>
  )

  if (!label && !description && !statusMessage && !validator)
    return PrimitiveStepper

  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      {description && <span className="form-info">{description}</span>}
      <div className="stepper-wrapper">
        {PrimitiveStepper}
        {validator && <span className="form-info">{validator.message}</span>}
      </div>
    </div>
  )
}
