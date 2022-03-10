import { randomId } from '@sebgroup/extract'
import React, { InputHTMLAttributes, RefObject, useEffect, useMemo, useRef, useState } from 'react'

const useInput = (
  props: InputHTMLAttributes<HTMLInputElement>,
  onChanges?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeInput?: (value: string) => string
): InputHTMLAttributes<HTMLInputElement> & {
  ref: RefObject<HTMLInputElement>
} => {
  const id = useMemo(() => props.id || randomId(), [props.id])
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(props.value ? props.value : '')
  const [checked, setChecked] = useState(props.checked ? props.checked : false)

  useEffect(() => {
    if (ref.current && ref.current.form) {
      const resetListener = (): void => {
        setValue(props.value ? props.value : '')
        setChecked(props.checked ? props.checked : false)
      }
      const form = ref.current.form
      form.addEventListener('reset', resetListener)
      return () => form.removeEventListener('reset', resetListener)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
  }, [props])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setChecked(event.currentTarget.checked)

    onChanges && onChanges(event)
    onChangeInput && onChangeInput(event.target.value)
  }

  return {
    ...props,
    id,
    ref,
    value,
    checked,
    onChange,
  }
}

export default useInput
