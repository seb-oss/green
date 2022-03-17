import * as React from 'react'

export type IndicatorType = 'success' | 'error' | 'info'

export type ValidatorType = 'Required' | 'Email'

export interface ValidatorRules {
  type: ValidatorType
  custom?: () => string | undefined
}

export const validateClassName = (value: IndicatorType) => {
  switch (value) {
    case 'success':
      return 'is-valid'
    case 'error':
      return 'is-invalid'
    default:
      return ''
  }
}
