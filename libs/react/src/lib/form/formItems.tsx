import { IValidator, ValidatorRules } from '@sebgroup/extract'
import React from 'react'
import { useFormContext } from './formContext'
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

    if (!event.target) return

    const { value, name, type, checked } = event.target

    let inputValue
    if (type === 'checkbox') {
      inputValue = checked ? value : null
      checked ? setValues((values: Record<string, any>) => ({ ...values, [name]: value })) : setValues((values: Record<string, any>) => ({ ...values, [name]: null }))
    } else {
      inputValue = value
      setValues((values: Record<string, any>) => ({ ...values, [name]: value }))
    }

    validateInputValue({ value: inputValue as string, name, type, checked }, validate?.rules as ValidatorRules, setErrors)
  }

  return React.cloneElement(children as any, {
    validator: errors?.[name] && validate,
    name,
    onChange,
  })
}

export default FormItems
