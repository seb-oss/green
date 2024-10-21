import { ValidatorRules } from '@sebgroup/extract'

interface InputTargetType {
  name: string
  value: string
  type?: string
  checked?: boolean
}

/* eslint-disable-next-line */
export const validateInputValue = (
  target: InputTargetType,
  rules: ValidatorRules,
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>,
) => {
  const errorMessage: string | undefined = validateInputValueErrors(
    rules,
    target,
  ) as string
  errorMessage
    ? setErrorInsert(setError, target.name)
    : setErrorRemove(setError, target.name)
  return errorMessage
}

const validateInputValueErrors = (
  rules: ValidatorRules,
  target: InputTargetType,
) => {
  const { value } = target

  if (rules?.custom instanceof Function) {
    return rules?.custom()
  }
  return validateTextInputValues(value, rules)
}

/* eslint-disable-next-line */
const setErrorInsert = (
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  name: string,
) => {
  /* eslint-disable-next-line */
  setError((errors: Record<string, any>) => {
    return {
      ...errors,
      [name]: true,
    }
  })
}

/* eslint-disable-next-line */
const setErrorRemove = (
  setError: React.Dispatch<React.SetStateAction<Record<string, any>>>,
  name: string,
) => {
  /* eslint-disable-next-line */
  setError((errors: Record<string, any>) => {
    /* eslint-disable-next-line */
    const newError: Record<string, any> = { ...errors }
    delete newError[name]
    return newError
  })
}

const validateTextInputValues = (value: string, rules: ValidatorRules) => {
  switch (rules?.type) {
    case 'Required': {
      return value === '' || value === undefined || value === null
        ? 'error'
        : null
    }
    default: {
      return
    }
  }
}
