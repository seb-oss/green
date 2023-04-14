import { randomId } from '@sebgroup/extract'
import React, { InputHTMLAttributes, RefObject, useMemo, useRef } from 'react'

const useInput = (
  props: InputHTMLAttributes<HTMLInputElement>,
  onChanges?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeInput?: (value: string) => string
): InputHTMLAttributes<HTMLInputElement> & {
  ref: RefObject<HTMLInputElement>
} => {
  const id = useMemo(() => props.id || randomId(), [props.id])
  const ref = useRef<HTMLInputElement>(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChanges && onChanges(event)
    onChangeInput && onChangeInput(event.target.value)
  }

  return {
    ...props,
    id,
    ref,
    onChange,
  }
}

export default useInput
