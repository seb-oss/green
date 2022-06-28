import { randomId } from '@sebgroup/extract'
import React, { forwardRef } from 'react'

type InputType = 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url'

interface InputProps {
  type: InputType
  label?: string
  info?: string
  id?: string
  value?: string
  error?: Error
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({type, label, info, value, error, id = randomId()}, ref) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      {info && (
        <span className="form-info" id={`${id}_info`}>
          {info}
        </span>
      )}
      <input type={type} value={value} ref={ref} />
      {error && <span className="form-info">{error.message}</span>}
    </div>
  )
})
