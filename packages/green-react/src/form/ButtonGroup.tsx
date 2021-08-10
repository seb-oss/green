import { FC, ReactElement, useEffect, useState } from 'react'
import { ButtonVariant } from '../../../extract/src/button'
import Button from '../button'
import { ButtonProps } from '../button/Button'
import { Group } from '../layout'

interface ButtonGroupProps {
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[]
  selectedIndex?: number
  variant?: ButtonVariant
}
type Props = ButtonProps & JSX.IntrinsicAttributes
const ButtonGroup: FC<ButtonGroupProps> = ({ children, selectedIndex, variant }) => {
  const [selected, setSelected] = useState(selectedIndex)
  const [buttons, setButtons] = useState<Props[]>([])

  useEffect(() => {
    const buttonProps: Props[] = ((children instanceof Array) ? children : [children])
      .filter((b) => b && (b as ReactElement).props)
      .map((b, ix) => {
        const bp = (b as ReactElement).props
        const props: Props = {
          ...bp,
          variant,
          key: bp.key || `btn_${ix}`,
          active: (ix === selected),
          onClick: (e) => {
            setSelected(ix)
            if (bp.onClick) bp.onClick(e)
          }
        }
        return props
      })
    setButtons(buttonProps)
  }, [children, selected])
  

  return (
    <Group>
      {buttons.map((props) => (
        <Button key={props.key} {...props} />
      ))}
    </Group>
  )
}

export default ButtonGroup
