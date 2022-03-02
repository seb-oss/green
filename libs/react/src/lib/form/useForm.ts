import { validateInputValue } from '@sebgroup/extract'
import React from 'react'
import { useFormContext } from './formContext'

const useForm = (
  callback?: (values: Record<string, any>, errors: Record<string, any>) => void
) => {
  const { values, errors, setErrors } = useFormContext()

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (values) {
      const inputNames: string[] = Object.keys(values).filter(
        (keys: string) => values[keys] === ''
      )
      if (inputNames.length === 0) {
        if (errors && Object.keys(errors).length === 0) {
          console.log('submitted')
          callback && callback(values, errors)
        } else {
          return
        }
      } else {
        inputNames.map((name: string) =>
          validateInputValue(name, 'Required', '', setErrors)
        )
      }
    } else {
      return
    }
  }

  return { formSubmit }
}

export default useForm
