import { validateInputValue } from '@sebgroup/extract'
import React, { Children } from 'react'
import { FormProps } from './form'

interface FormContextReturnType {
  setValues: React.Dispatch<React.SetStateAction<Record<string, any>>>
  setErrors: React.Dispatch<React.SetStateAction<Record<string, any>>>
  setFields: React.Dispatch<React.SetStateAction<Record<string, any>>>
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
  direction = 'vertical',
  formSize = 'md',
  ...props
}: React.PropsWithChildren<FormProps>) => {
  const [values, setValues] = React.useState<Record<string, any>>()
  const [errors, setErrors] = React.useState<Record<string, any>>()
  const [fields, setFields] = React.useState<Record<string, any>>()
  const formRef: React.RefObject<HTMLFormElement> = React.useRef(null)

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (fields) {
      const newErrors: Array<string | undefined> = []
      Object.keys(fields).map((keys: string) =>
        newErrors.push(
          validateInputValue(keys, fields[keys], values?.[keys], setErrors)
        )
      )
      if (!newErrors.includes('error')) {
        console.log('submitted')
      }
    }
  }

  React.useEffect(() => {
    if (formRef.current) {
      const currentRef: HTMLFormElement = formRef.current
      const resetErrors = () => {
        setErrors({})
      }
      currentRef.addEventListener('reset', resetErrors)

      return () => currentRef.removeEventListener('reset', resetErrors)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
  }, [])

  return (
    <FormContext.Provider
      value={{ setValues, setErrors, setFields, errors, values }}
    >
      <form
        ref={formRef}
        className={[direction, `size-${formSize}`].join(' ')}
        onSubmit={formSubmit}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}
