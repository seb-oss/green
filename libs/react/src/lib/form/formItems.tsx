import { validateInputValue, ValidatorRules } from '@sebgroup/extract'
import React from 'react'
import { useFormContext } from './formContext'
import { IValidator } from './types'

export interface FormItemsProps {
  children: React.ReactNode
  validate?: IValidator
  name: string
}

export const FormItems: React.FC<FormItemsProps> = ({
  children,
  validate,
  name,
}) => {
  const { setValues, setErrors, setFields, errors } = useFormContext()

  React.useEffect(() => {
    setFields((fields: Record<string, any>) => ({
      ...fields,
      [name]: validate?.rules,
    }))
  }, [])

  const onChangeText = (text: string) => {
    setValues((values: Record<string, any>) => {
      return {
        ...values,
        [name]: text,
      }
    })
    validateInputValue(name, validate?.rules as ValidatorRules, text, setErrors)
  }

  return (
    <React.Fragment>
      {React.cloneElement(children as any, {
        validator: errors?.[name] && validate,
        name,
        onChangeText,
      })}
    </React.Fragment>
  )
}

export default FormItems
