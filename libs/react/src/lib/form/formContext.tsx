import React, { Children } from 'react'

interface FormContextReturnType {
  setValues: React.Dispatch<React.SetStateAction<Record<string, any>>>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, any>>>
  errors?: Record<string, any>
  values?: Record<string, any>
}

export const FormContext = React.createContext<FormContextReturnType>(
  {} as FormContextReturnType
)

export const useFormContext = () => {
  return React.useContext(FormContext)
}

export const FormProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [values, setValues] = React.useState<Record<string, any>>()
  const [errors, setErrors] = React.useState<Record<string, any>>()

  return (
    <FormContext.Provider value={{ setValues, setErrors, errors, values }}>
      {children}
    </FormContext.Provider>
  )
}
