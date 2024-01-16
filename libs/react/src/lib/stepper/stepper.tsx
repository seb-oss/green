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
  onIncrease?: () => void
  onDecrease?: () => void
  inputMode?: 'numeric' | 'decimal'
  testId?: string
}

// TODO: Should be named "Numeric input" instead of stepper?

export function Stepper({
  id,
  label,
  description,
  statusMessage,
  validator,
  value = 0,
  onChange = () => undefined,
  onIncrease = () => undefined,
  onDecrease = () => undefined,
  inputMode = 'numeric',
  testId,
}: StepperProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      onIncrease()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      onDecrease()
    }
  }

  const PrimitiveStepper = (
    <div
      data-testid={testId}
      className={`group group-border group-stepper ${
        validator && validateClassName(validator?.indicator as IndicatorType)
      }`}
    >
      <button type="button" onClick={onDecrease}>
        -
      </button>
      <input
        id={id}
        type="text"
        inputMode={inputMode}
        pattern="[0-9]*"
        onChange={onChange}
        onFocus={({ target }) => target.select()}
        onKeyDown={handleKeyDown}
        placeholder="0"
        value={value}
      />
      <button type="button" onClick={onIncrease}>
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
