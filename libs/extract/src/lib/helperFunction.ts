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
  rules: any,
  value: string,
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>
) => {
  if (rules?.custom instanceof Function) {
    const ruleResult: string = rules?.custom()
    if (ruleResult) {
      setErrorInsert(setError, name)
      return 'error'
    } else {
      setErrorRemove(setError, name)
      return
    }
  } else {
    switch (rules.type) {
      case 'Required': {
        if (value === '' || value === undefined || value === null) {
          setErrorInsert(setError, name)
          return 'error'
        } else {
          setErrorRemove(setError, name)
          return
        }
      }
      default: {
        return
      }
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
