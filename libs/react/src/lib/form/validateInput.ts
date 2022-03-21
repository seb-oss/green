import { ValidatorRules } from '@sebgroup/extract'

interface InputTargetType {
  name: string
  value: string
  type?: string
  checked?: boolean
}

export const validateInputValue = (target: InputTargetType, rules: ValidatorRules, setError: React.Dispatch<React.SetStateAction<Record<string, any>>>) => {
  const errorMessage: string | undefined = validateInputValueErrors(rules, target) as string
  errorMessage ? setErrorInsert(setError, target.name) : setErrorRemove(setError, target.name)
  return errorMessage
}

const validateInputValueErrors = (rules: ValidatorRules, target: InputTargetType) => {
  const { value, type, checked } = target

  if (rules?.custom instanceof Function) {
    return rules?.custom()
  }

  switch (type) {
    case 'text':
    case 'email':
    case 'number':
    case 'radio':
      return validateTextInputValues(value, rules)
    case 'checkbox':
      return validateCheckBoxInput(checked as boolean)
    default:
      return validateTextInputValues(value, rules)
  }
}

const setErrorInsert = (setError: React.Dispatch<React.SetStateAction<Record<string, any>>>, name: string) => {
  setError((errors: Record<string, any>) => {
    return {
      ...errors,
      [name]: true,
    }
  })
}

const setErrorRemove = (setError: React.Dispatch<React.SetStateAction<Record<string, any>>>, name: string) => {
  setError((errors: Record<string, any>) => {
    const newError: Record<string, any> = { ...errors }
    delete newError[name]
    return newError
  })
}

const validateTextInputValues = (value: string, rules: ValidatorRules) => {
  switch (rules?.type) {
    case 'Required': {
      return value === '' || value === undefined || value === null ? 'error' : null
    }
    default: {
      return
    }
  }
}

const validateCheckBoxInput = (checked: boolean) => {
  if (!checked) {
    return 'error'
  }
  return null
}
