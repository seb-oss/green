import { ReactNode, MouseEvent, forwardRef, ForwardedRef } from 'react'
import { ButtonType } from '@sebgroup/extract'
import { Button, ButtonProps } from '../button/button'

export const IconButton = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <Button {...props} className={`icon`} ref={ref}>
        {props.children}
      </Button>
    )
  },
)
