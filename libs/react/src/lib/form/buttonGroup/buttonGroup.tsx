import { JSX, ReactElement, useEffect, useState } from 'react'
import classNames from 'classnames'

import { ButtonVariant } from '@sebgroup/extract'
import { Group } from '../'
import { Button, ButtonProps } from '../button/button'

interface ButtonGroupProps {
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[]
  /** Class names passed to the child elements */
  className?: string
  selectedIndex?: number
  variant?: ButtonVariant
  id?: string
}
type Props = ButtonProps & JSX.IntrinsicAttributes
export const ButtonGroup = ({
  children,
  className,
  selectedIndex,
  variant,
  id,
}: ButtonGroupProps) => {
  const [selected, setSelected] = useState(selectedIndex)
  const [buttons, setButtons] = useState<Props[]>([])

  useEffect(() => {
    const buttonProps: Props[] = (
      children instanceof Array ? children : [children]
    )
      .filter((b) => b && b.props)
      .map((b, ix) => {
        const bp = b.props
        const props: Props = {
          ...bp,
          variant,
          key: bp.key || `btn_${ix}`,
          active: ix === selected,
          onClick: (e) => {
            setSelected(ix)
            if (bp.onClick) bp.onClick(e)
          },
          className: classNames(bp.className, className),
        }
        return props
      })
    setButtons(buttonProps)
  }, [children, selected, variant, className])

  return (
    <Group data-label="button-group" id={id}>
      {buttons.map(({ key, ...props }) => (
        <Button key={key} {...props} />
      ))}
    </Group>
  )
}

export default ButtonGroup
