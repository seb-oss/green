import React from 'react'

import {
  getSliderTrackBackground,
  randomId,
  sliderColors,
} from '@sebgroup/extract'
import { SliderProps } from '../../types'

const InputWrapper = ({
  children,
  unitLabel,
}: {
  children: React.ReactNode
  unitLabel?: string
}) => (
  <>
    {unitLabel ? (
      <div className="group group-border group-focus">
        {children}
        <span className="form-text">{unitLabel}</span>
      </div>
    ) : (
      children
    )}
  </>
)

const minMaxFormatFn = (value: number, unit?: string) => {
  if (unit) return `${value} ${unit}`
  return value.toString()
}

export function Slider({
  name = `${randomId()}-slider`,
  value,
  defaultValue,
  min = 0,
  max = 100,
  minMaxFormat = minMaxFormatFn,
  showMinMax = false,
  step = 1,
  label,
  instruction,
  errorMessage,
  hasTextbox = false,
  unitLabel,
  disabled = false,
  onChange,
  enableClamping = true,
  onClamp,
  enterKeyHint,
}: SliderProps) {
  const [background, setBackground] = React.useState<string>()
  const [sliderValue, setSliderValue] = React.useState<number | undefined>(
    value ?? defaultValue,
  )
  const [inputFieldValue, setInputFieldValue] = React.useState<string>(
    sliderValue + '',
  )

  React.useLayoutEffect(() => {
    if (disabled) {
      setBackground(sliderColors.disabled)
      return
    }

    let percent = 0
    if (sliderValue !== undefined)
      percent = ((sliderValue - min) / (max - min)) * 100

    setBackground(getSliderTrackBackground(percent))
  }, [disabled, sliderValue])

  const clamp = (unclamped: number | undefined | string): number => {
    if (!enableClamping) return Number(unclamped)

    if (typeof unclamped === 'string') unclamped = Number(unclamped)
    if (!unclamped || Number.isNaN(unclamped)) return min

    const clamped = Math.min(Math.max(min, unclamped), max)
    if (clamped !== unclamped && onClamp) onClamp(unclamped)

    return clamped
  }

  const setNumValue = (value: number | undefined | string) => {
    if (value === '') value = min
    const unclamped = Number(value)
    const clamped = clamp(unclamped)
    setSliderValue(clamped)
    return [unclamped, clamped]
  }

  React.useEffect(() => {
    setNumValue(value)
  }, [value])

  const handleChange = (value: string) => {
    const [unclamped, clamped] = setNumValue(value)
    setInputFieldValue(unclamped + '')
    if (onChange) onChange(clamped)
  }

  const handleInputFieldChange = (value: string, shouldClamp = false) => {
    handleChange(value)
    if (value === '') setInputFieldValue('')
    else if (shouldClamp) setInputFieldValue(clamp(value) + '')
  }

  return (
    <>
      <div className="gds-slider-label-container">
        <div>
          {label && (
            <>
              <label htmlFor={name} id={`${name}-label`}>
                {label}
              </label>
              {instruction && <p>{instruction}</p>}
            </>
          )}
        </div>
        {hasTextbox && (
          <InputWrapper unitLabel={unitLabel}>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={inputFieldValue}
              id={`${name}-textbox`}
              name={name}
              aria-labelledby={`${name}-label`}
              enterKeyHint={enterKeyHint}
              className={errorMessage ? 'is-invalid' : ''}
              disabled={disabled}
              onChange={(e) => handleInputFieldChange(e.currentTarget.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' &&
                handleInputFieldChange(e.currentTarget.value, true)
              }
              onBlur={(e) =>
                handleInputFieldChange(e.currentTarget.value, true)
              }
              min={min}
              max={max}
              onInvalid={(e) => {
                e.preventDefault()
              }}
            />
          </InputWrapper>
        )}
      </div>
      <input
        type="range"
        value={sliderValue || 0}
        id={name}
        name={name}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => handleChange(e.currentTarget.value)}
        aria-valuenow={sliderValue || 0}
        style={{
          background,
        }}
      />
      {showMinMax && (
        <div className="gds-slider-min-max">
          <div>{minMaxFormat(min, unitLabel)}</div>
          <div>{minMaxFormat(max, unitLabel)}</div>
        </div>
      )}
      {errorMessage && <p className="gds-slider-error-info">{errorMessage}</p>}
    </>
  )
}

export default Slider
