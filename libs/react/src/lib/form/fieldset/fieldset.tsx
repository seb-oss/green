import classNames from 'classnames'
import { DetailedHTMLProps, FieldsetHTMLAttributes } from 'react'

interface IFieldSetProps
  extends DetailedHTMLProps<
    FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  > {
  marginBottom?: boolean
}

export const Fieldset = ({
  className,
  marginBottom,
  ...otherPorps
}: IFieldSetProps) => {
  const fieldSetClassName = classNames(className, 'bg-light p-4', {
    'mb-6': marginBottom,
  })

  return <fieldset className={fieldSetClassName} {...otherPorps} />
}

export default Fieldset
