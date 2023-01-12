import { FormDirection, Size } from '@sebgroup/extract'
import { HTMLProps, ReactNode } from 'react'
import { FormProvider } from './formContext'

/* eslint-disable-next-line */
export interface FormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode
  direction?: FormDirection
  formSize?: Size
  /* eslint-disable-next-line */
  onFormSubmit?: (values: any) => void
}

export const Form: React.FC<FormProps> = (props: FormProps) => {
  return <FormProvider {...props} />
}

export default Form
