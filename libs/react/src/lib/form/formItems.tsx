import { ValidatorRules } from '@sebgroup/extract'
import React from 'react'
import { useFormContext } from './formContext'
import { IValidator } from './types'
import { validateInputValue } from './validateInput'

export interface FormItemsProps {
  children: React.ReactNode
  validate?: IValidator
  name: string
}

export const FormItems: React.FC<FormItemsProps> = ({ children, validate, name }) => {
  const { setValues, setErrors, setFields, errors } = useFormContext()

  React.useEffect(() => {
    setFields((fields: Record<string, any>) => ({
      ...fields,
      [name]: validate?.rules,
    }))

    const removeValues = (values: Record<string, any>) => {
      const newValues: Record<string, any> = { ...values }
      delete newValues[name]
      return newValues
    }

    return () => {
      setFields((fields: Record<string, any>) => removeValues(fields))
      setValues((values: Record<string, any>) => removeValues(values))
      setErrors((errors: Record<string, any>) => removeValues(errors))
    }
  }, [])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type, checked } = event.target
    if (type === 'checkbox') {
      if (checked) {
        setValues((values: Record<string, any>) => {
          return {
            ...values,
            [name]: { value, checked },
          }
        })
      } else {
        setValues((values: Record<string, any>) => {
          return {
            ...values,
            [name]: null,
          }
        })
      }
    } else {
      setValues((values: Record<string, any>) => {
        return {
          ...values,
          [name]: value,
        }
      })
    }

    validateInputValue({ value, name, type, checked }, validate?.rules as ValidatorRules, setErrors)
  }

  return React.cloneElement(children as any, {
    validator: errors?.[name] && validate,
    name,
    onChange,
  })
}

export default FormItems
