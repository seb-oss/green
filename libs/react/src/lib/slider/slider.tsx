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

  const clamp = (origValue: number | undefined) => {
    if (!enableClamping || origValue === undefined) return origValue

    let newValue = origValue
    let hasClamped = false

    if (newValue < min) {
      hasClamped = true
      newValue = min
    }
    if (newValue > max) {
      hasClamped = true
      newValue = max
    }
    if (hasClamped && onClamp) onClamp(Number(origValue))

    return newValue
  }

  const setNumValueOrEmpty = (value: number | undefined | string) => {
    let numValue: number | undefined = Number(value)

    if (Number.isNaN(numValue) || value === '') numValue = undefined

    setSliderValue(clamp(numValue))

    return numValue
  }

  React.useEffect(() => {
    setNumValueOrEmpty(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newVal = setNumValueOrEmpty(value)
    if (onChange) onChange(newVal)
  }

  return (
    <>
      {label && (
        <div className="gds-slider-label-container">
          <div>
            <label htmlFor={name}>{label}</label>
            {instruction && <p>{instruction}</p>}
          </div>
          {hasTextbox && (
            <InputWrapper unitLabel={unitLabel}>
              <input
                type="number"
                value={sliderValue ?? ''}
                id={`${name}-textbox`}
                name={name}
                className={errorMessage ? 'is-invalid' : ''}
                disabled={disabled}
                onChange={handleChange}
                min={min}
                max={max}
                onInvalid={(e) => {
                  e.preventDefault()
                }}
              />
            </InputWrapper>
          )}
        </div>
      )}
      <input
        type="range"
        value={sliderValue || 0}
        id={name}
        name={name}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={handleChange}
        style={{
          background,
        }}
      />
      {errorMessage && <p className="gds-slider-error-info">{errorMessage}</p>}
    </>
  )
}

export default Slider
