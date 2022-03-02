import { validateInputValue } from '@sebgroup/extract'
import React from 'react'
import { useFormContext } from './formContext'
import { IValidator, ValidatorType } from './types'

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
  const { setValues, errors, setErrors } = useFormContext()

  React.useEffect(() => {
    setValues((values: Record<string, any>) => {
      return {
        ...values,
        [name]: '',
      }
    })
  }, [])

  const onChangeText = (text: string) => {
    setValues((values: Record<string, any>) => {
      return {
        ...values,
        [name]: text,
      }
    })
    validateInputValue(name, validate?.type as ValidatorType, text, setErrors)
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
