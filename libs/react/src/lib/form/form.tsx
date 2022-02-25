import { FormDirection, Size } from '@sebgroup/extract'
import React, { HTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import useForm from './useForm'

/* eslint-disable-next-line */
export interface FormProps extends HTMLProps<HTMLFormElement> {
  children: ReactNode
  direction?: FormDirection
  formSize?: Size
}

export function Form({
  children,
  direction = 'vertical',
  formSize = 'md',
  ...props
}: FormProps) {
  const { handleSubmit, handleChange, errors, values } = useForm()
  return (
    <form
      {...props}
      className={[direction, `size-${formSize}`].join(' ')}
      onSubmit={handleSubmit}
      noValidate
    >
      {React.Children.map(children, (Child: React.ReactNode) => {
        return React.isValidElement<InputHTMLAttributes<HTMLInputElement>>(
          Child
        )
          ? React.cloneElement<any>(Child, {
              errors,
              values,
              onChange: handleChange,
            })
          : Child
      })}
    </form>
  )
}

export default Form
