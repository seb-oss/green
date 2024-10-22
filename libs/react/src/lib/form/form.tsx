import { HTMLProps, ReactNode } from 'react'

import { FormDirection, Size } from '@sebgroup/extract'
import { FormProvider } from './formContext'

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
