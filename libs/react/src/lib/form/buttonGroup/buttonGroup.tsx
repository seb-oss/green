import React, {
  ReactElement,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ButtonSize, ButtonVariant } from '@sebgroup/extract'
import { Button, ButtonProps } from '../button/button'
import classNames from 'classnames'

interface ButtonGroupProps {
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[]
  /** Class names passed to the child elements */
  className?: string
  selectedIndex?: number
  variant?: ButtonVariant
  size?: ButtonSize
}
type Props = ButtonProps & JSX.IntrinsicAttributes

const chevronRightIcon = (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M8.772 5.19066L8.15329 5.80935C8.00685 5.95579 8.00685 6.19322 8.15329 6.33969L13.8001 12L8.15329 17.6603C8.00685 17.8068 8.00685 18.0442 8.15329 18.1907L8.772 18.8094C8.91844 18.9558 9.15588 18.9558 9.30235 18.8094L15.8465 12.2652C15.993 12.1188 15.993 11.8813 15.8465 11.7348L9.30235 5.19066C9.15588 5.04419 8.91844 5.04419 8.772 5.19066Z" />
  </svg>
)

const chevronLeftIcon = (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M15.2278 18.8094L15.8465 18.1906C15.993 18.0442 15.993 17.8068 15.8465 17.6603L10.1997 12L15.8465 6.3397C15.993 6.19326 15.993 5.95583 15.8465 5.80936L15.2278 5.19064C15.0814 5.0442 14.8439 5.0442 14.6975 5.19064L8.15329 11.7349C8.00685 11.8813 8.00685 12.1187 8.15329 12.2652L14.6975 18.8094C14.8439 18.9558 15.0814 18.9558 15.2278 18.8094Z" />
  </svg>
)

export const ButtonGroup = ({
  children,
  className,
  selectedIndex,
  variant,
  size,
}: ButtonGroupProps) => {
  const [selected, setSelected] = useState(selectedIndex)
  const buttonGroupRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false)
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false)
  const [isOverflowing, setIsOverflowing] = React.useState<boolean>(false)

  const buttons: Props[] = useMemo(() => {
    return (children instanceof Array ? children : [children])
      .filter((b) => b && (b as ReactElement).props)
      .map((b, ix) => {
        const bp = (b as ReactElement).props
        const props: Props = {
          ...bp,
          variant,
          active: ix === selected,
          onClick: (e) => {
            setSelected(ix)
            if (bp.onClick) bp.onClick(e)
          },
          className: classNames(bp.className, className),
        }
        return props
      })
  }, [children, selected, variant, className])

  const onClickLeftArrow = () => {
    const currentRef = buttonGroupRef.current as HTMLDivElement
    currentRef.scrollLeft -= Math.round(currentRef.scrollWidth / buttons.length)
  }

  const onClickRightArrow = () => {
    const currentRef = buttonGroupRef.current as HTMLDivElement
    currentRef.scrollLeft += Math.round(currentRef.scrollWidth / buttons.length)
  }

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const currentTarget: HTMLDivElement = event.currentTarget
    const maxScroll: number =
      currentTarget.scrollWidth - currentTarget.clientWidth
    setShowRightArrow(maxScroll - Math.round(currentTarget.scrollLeft) > 2)
    setShowLeftArrow(currentTarget.scrollLeft > 0)
  }

  useEffect(() => {
    const checkOverflow = () => {
      const currentRef = buttonGroupRef.current as HTMLDivElement
      setShowRightArrow(currentRef.scrollWidth > currentRef.clientWidth)
      setIsOverflowing(currentRef.scrollWidth > currentRef.clientWidth)
    }
    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => {
      window.removeEventListener('resize', checkOverflow)
    }
  }, [])

  useEffect(() => {
    if (selected !== undefined && isOverflowing) {
      buttonGroupRef.current
        ?.querySelectorAll('.btn-group button')
        [selected]?.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    }
  }, [selected, isOverflowing])

  return (
    <div className="button-group-wrapper">
      {showLeftArrow && (
        <Button
          onClick={onClickLeftArrow}
          size={size}
          className="control-btn-left"
          variant={variant}
        >
          {chevronLeftIcon}
        </Button>
      )}
      <div className="group btn-group" ref={buttonGroupRef} onScroll={onScroll}>
        {buttons.map((props: Props, index: number) => (
          <Button {...props} key={index} size={size} />
        ))}
      </div>
      {showRightArrow && (
        <Button
          onClick={onClickRightArrow}
          size={size}
          className="control-btn-right"
          variant={variant}
        >
          {chevronRightIcon}
        </Button>
      )}
    </div>
  )
}

export default ButtonGroup
