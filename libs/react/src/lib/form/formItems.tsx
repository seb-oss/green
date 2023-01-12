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
    /* eslint-disable-next-line */
    setFields((fields: Record<string, any>) => ({
      ...fields,
      [name]: validate?.rules,
    }))

    /* eslint-disable-next-line */
    const removeValues = (values: Record<string, any>) => {
      /* eslint-disable-next-line */
      const newValues: Record<string, any> = { ...values }
      delete newValues[name]
      return newValues
    }

    return () => {
      /* eslint-disable-next-line */
      setFields((fields: Record<string, any>) => removeValues(fields))
      /* eslint-disable-next-line */
      setValues((values: Record<string, any>) => removeValues(values))
      /* eslint-disable-next-line */
      setErrors((errors: Record<string, any>) => removeValues(errors))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (!event.target) return

    const { value, name, type, checked } = event.target

    let inputValue
    if (type === 'checkbox') {
      inputValue = checked ? value : null
      /* eslint-disable-next-line */
      checked ? setValues((values: Record<string, any>) => ({ ...values, [name]: value })) : setValues((values: Record<string, any>) => ({ ...values, [name]: null }))
    } else {
      inputValue = value
      /* eslint-disable-next-line */
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
