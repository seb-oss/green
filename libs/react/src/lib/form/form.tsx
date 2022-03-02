import { FormDirection, Size } from '@sebgroup/extract'
import { HTMLProps, ReactNode } from 'react'
import { FormProvider } from './formContext'
import useForm from './useForm'

/* eslint-disable-next-line */
export interface FormProps extends HTMLProps<HTMLFormElement> {
  children?: ReactNode
  direction?: FormDirection
  formSize?: Size
}

function FormStructure({
  children,
  direction = 'vertical',
  formSize = 'md',
  ...props
}: FormProps) {
  const { formSubmit } = useForm()

  return (
    <form
      className={[direction, `size-${formSize}`].join(' ')}
      {...props}
      onSubmit={formSubmit}
    >
      {children}
    </form>
  )
}

export const Form: React.FC<FormProps> = (props: FormProps) => (
  <FormProvider>
    <FormStructure {...props} />
  </FormProvider>
)

export default Form
