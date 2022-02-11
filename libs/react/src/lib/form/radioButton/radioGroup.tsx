import React from 'react'
import { RadioButtonProps } from '../types'

export type IndicatorType = 'valid' | 'invalid'

interface IValidator {
  message: string
  indicator: IndicatorType
}
export interface RadioGroupProps {
  title?: string
  description?: string
  validator?: IValidator
}

export const RadioGroup = ({
  description,
  title,
  validator,
  children,
}: React.PropsWithChildren<RadioGroupProps>) => {
  let fieldsetClassName: string
  switch (validator?.indicator) {
    case 'valid': {
      fieldsetClassName = 'is-valid'
      break
    }
    case 'invalid': {
      fieldsetClassName = 'is-invalid'
      break
    }
    default: {
      fieldsetClassName = ''
    }
  }
  return (
    <div className="form-group">
      <fieldset className={fieldsetClassName}>
        <legend>{title}</legend>
        <span className="form-info">{description}</span>
        {React.Children.toArray(children).map((child: React.ReactNode) => {
          return React.isValidElement<React.FC<RadioButtonProps>>(child)
            ? React.cloneElement<any>(child, {
                validator: validator?.indicator,
              })
            : child
        })}
      </fieldset>
      {validator?.message && (
        <span className="form-info">{validator?.message}</span>
      )}
    </div>
  )
}

export default RadioGroup
