import * as React from 'react'

export type IndicatorType = 'valid' | 'invalid' | 'neutral'

export const validateClassName = (value: IndicatorType) => {
  switch (value) {
    case 'valid':
      return 'is-valid'
    case 'invalid':
      return 'is-invalid'
    default:
      return ''
  }
}

export const validateInputValue = (
  name: string,
  validateType: string,
  value: string,
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>
) => {
  switch (validateType) {
    case 'Required': {
      if (value === '' || typeof value === 'undefined') {
        setError((errors: Record<string, any>) => {
          return {
            ...errors,
            [name]: true,
          }
        })
      } else {
        setError((errors: Record<string, any>) => {
          const newError: Record<string, any> = { ...errors }
          delete newError[name]
          return newError
        })
      }
      break
    }
  }
}
