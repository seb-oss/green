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
      <div className="group group-border">
        {children}
        <span className="form-text">{unitLabel}</span>
      </div>
    ) : (
      children
    )}
  </>
)

export function Slider({
  name = `${randomId()}-slider`,
  value,
  defaultValue,
  min = 0,
  max = 100,
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
}: SliderProps) {
  const [background, setBackground] = React.useState<string>()
  const [sliderValue, setSliderValue] = React.useState<number | undefined>(
    value ?? defaultValue
  )
  const [inputFieldValue, setInputFieldValue] = React.useState<string>(
    sliderValue + ''
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
    if (!enableClamping || unclamped === undefined) return Number(unclamped)

    if (!unclamped || Number.isNaN(unclamped)) return min
    if (typeof unclamped === 'string') unclamped = Number(unclamped)

    let clamped = unclamped
    let hasClamped = false

    if (clamped < min) {
      hasClamped = true
      clamped = min
    }
    if (clamped > max) {
      hasClamped = true
      clamped = max
    }
    if (hasClamped && onClamp) onClamp(unclamped)

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
              <label htmlFor={name}>{label}</label>
              {instruction && <p>{instruction}</p>}
            </>
          )}
        </div>
        {hasTextbox && (
          <InputWrapper unitLabel={unitLabel}>
            <input
              type="number"
              value={inputFieldValue}
              id={`${name}-textbox`}
              name={name}
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
        style={{
          background,
        }}
      />
      {errorMessage && <p className="gds-slider-error-info">{errorMessage}</p>}
    </>
  )
}

export default Slider
