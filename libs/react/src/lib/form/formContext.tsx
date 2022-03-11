import React from 'react'
import { FormProps } from './form'
import { validateInputValue } from './validateInput'

interface FormContextReturnType {
  setValues: React.Dispatch<React.SetStateAction<Record<string, any>>>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, any>>>
  setFields: React.Dispatch<React.SetStateAction<Record<string, any>>>
  errors?: Record<string, any>
  values?: Record<string, any>
}

export const FormContext = React.createContext<FormContextReturnType>({} as FormContextReturnType)

export const useFormContext = () => {
  return React.useContext(FormContext)
}

export const FormProvider = ({ children, direction = 'vertical', formSize = 'md', onSubmit, onFormSubmit, ...props }: React.PropsWithChildren<FormProps>) => {
  const [values, setValues] = React.useState<Record<string, any>>()
  const [errors, setErrors] = React.useState<Record<string, any>>()
  const [fields, setFields] = React.useState<Record<string, any>>({})

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let hasError = false
    event.preventDefault()

    Object.keys(fields).forEach((key: string) => {
      const errorMessage: string = validateInputValue({ name: key, value: values?.[key] }, fields[key], setErrors) as string
      hasError = hasError || !!errorMessage
    })

    if (!hasError) {
      onFormSubmit && onFormSubmit(values)
    }
  }

  const resetForm = () => {
    setValues({})
    setErrors({})
  }

  return (
    <FormContext.Provider value={{ setValues, setErrors, setFields, errors, values }}>
      <form className={[direction, `size-${formSize}`].join(' ')} onSubmit={formSubmit} {...props} onReset={resetForm}>
        {children}
      </form>
    </FormContext.Provider>
  )
}
