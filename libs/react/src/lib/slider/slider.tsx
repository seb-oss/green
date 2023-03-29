import React from 'react'
import {
  getSliderTrackBackground,
  randomId,
  sliderColors,
} from '@sebgroup/extract'

import { SliderProps } from '../../types'

export function Slider({
  name = `${randomId()}-slider`,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  label,
  instruction,
  errorMessage,
  hasTextbox = false,
  disabled = false,
  onChange,
}: SliderProps) {
  const [background, setBackground] = React.useState<string>()
  const [sliderValue, setSliderValue] = React.useState<number>(
    defaultValue ?? 0
  )

  React.useLayoutEffect(() => {
    if (disabled) {
      setBackground(sliderColors.disabled)
      return
    }

    const percent: number = ((sliderValue - min) / (max - min)) * 100
    setBackground(getSliderTrackBackground(percent))
  }, [disabled, sliderValue])

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
            <div className="form-group">
              <input
                type="number"
                value={sliderValue}
                id={`${name}-textbox`}
                name={name}
                className={errorMessage ? 'is-invalid' : ''}
                disabled={disabled}
                onChange={handleChange}
              />
              <span className="form-info"></span>
            </div>
          )}
        </div>
      )}
      <input
        type="range"
        value={sliderValue}
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
