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

    let percent: number = 0
    if (sliderValue !== undefined)
      percent = ((sliderValue - min) / (max - min)) * 100

    setBackground(getSliderTrackBackground(percent))
  }, [disabled, sliderValue])

  React.useEffect(() => {
    let numValue = Number(value)
    if (Number.isNaN(numValue)) setSliderValue(undefined)
    else setSliderValue(Number(value))
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSliderValue(Number(value))
    if (onChange) onChange(Number(value))
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
