import { ReactElement, useEffect, useState } from 'react'
import { ButtonVariant } from '@sebgroup/extract'
import { Button, ButtonProps } from '../button/button'
import { Group } from '../'

interface ButtonGroupProps {
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[]
  selectedIndex?: number
  variant?: ButtonVariant
}
type Props = ButtonProps & JSX.IntrinsicAttributes
export const ButtonGroup = ({
  children,
  selectedIndex,
  variant,
}: ButtonGroupProps) => {
  const [selected, setSelected] = useState(selectedIndex)
  const [buttons, setButtons] = useState<Props[]>([])

  useEffect(() => {
    const buttonProps: Props[] = (
      children instanceof Array ? children : [children]
    )
      .filter((b) => b && (b as ReactElement).props)
      .map((b, ix) => {
        const bp = (b as ReactElement).props
        const props: Props = {
          ...bp,
          variant,
          key: bp.key || `btn_${ix}`,
          active: ix === selected,
          onClick: (e) => {
            setSelected(ix)
            if (bp.onClick) bp.onClick(e)
          },
        }
        return props
      })
    setButtons(buttonProps)
  }, [children, selected, variant])

  return (
    <Group>
      {buttons.map((props) => (
        <Button key={props.key} {...props} />
      ))}
    </Group>
  )
}

export default ButtonGroup
