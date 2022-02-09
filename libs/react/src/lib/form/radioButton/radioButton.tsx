import React from 'react'
import { OnChangeRadioButton } from './radioGroup'

export interface RadioButtonProps {
  label?: string
  value?: string
  disabled?: boolean
  onChange?: (value: OnChangeRadioButton) => void
}

export const RadioButton = ({
  label,
  value,
  disabled,
  onChange,
}: RadioButtonProps) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange &&
      onChange({
        value: event.currentTarget.value,
        checked: event.currentTarget.checked,
      })
  }

  return (
    <label className="form-control">
      <input
        type="radio"
        name="default"
        value={value}
        disabled={disabled}
        onChange={onChangeInput}
      />
      <span>{label}</span>
      <i />
    </label>
  )
}

export default RadioButton
