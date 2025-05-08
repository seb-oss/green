import React from 'react'

import { IValidator, ValidatorRules } from '@sebgroup/extract'
import { useFormContext } from './formContext'
import { validateInputValue } from './validateInput'

export interface FormItemsProps {
  children: React.ReactElement<any>
  name: string
  validate?: IValidator
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const FormItems: React.FC<FormItemsProps> = ({
  children,
  name,
  validate,
  onChange: _onFormItemsChanged,
}) => {
  const { values, setValues, setErrors, setFields, errors } = useFormContext()

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
      checked
        ? setValues((values: Record<string, any>) => ({
            ...values,
            [name]: value,
          }))
        : setValues((values: Record<string, any>) => ({
            ...values,
            [name]: null,
          }))
    } else {
      inputValue = value
      /* eslint-disable-next-line */
      setValues((values: Record<string, any>) => ({ ...values, [name]: value }))
    }

    validateInputValue(
      { value: inputValue as string, name, type, checked },
      validate?.rules as ValidatorRules,
      setErrors,
    )
  }

  /* eslint-disable-next-line */
  return React.cloneElement(children, {
    validator: errors?.[name] && validate,
    name,
    value: values?.[name],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof _onFormItemsChanged === 'function') {
        _onFormItemsChanged(event)
      }

      onChange(event)
    },
  })
}

export default FormItems
