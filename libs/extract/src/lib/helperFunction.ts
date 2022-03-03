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

export const validateInputValue = (
  name: string,
  rules: ValidatorRules,
  value: string,
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>
) => {
  const errorMessage: string | undefined = validateInputValueErrors(
    rules,
    value
  ) as string
  errorMessage ? setErrorInsert(setError, name) : setErrorRemove(setError, name)
  return errorMessage
}

const validateInputValueErrors = (rules: ValidatorRules, value: string) => {
  if (rules?.custom instanceof Function) {
    return rules?.custom()
  }

  switch (rules.type) {
    case 'Required': {
      return value === '' || value === undefined || value === undefined
        ? 'error'
        : null
    }
    default: {
      return
    }
  }
}

const setErrorInsert = (
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  name: string
) => {
  setError((errors: Record<string, any>) => {
    return {
      ...errors,
      [name]: true,
    }
  })
}

const setErrorRemove = (
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  name: string
) => {
  setError((errors: Record<string, any>) => {
    const newError: Record<string, any> = { ...errors }
    delete newError[name]
    return newError
  })
}
