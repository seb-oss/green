import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { randomId } from '@sebgroup/extract/src/id'
import { CheckboxProps, InputListener } from './types'

export const useInput = <T>(
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (element: HTMLInputElement) => T | undefined,
  notify?: InputListener<T>
): InputHTMLAttributes<HTMLInputElement> & { ref: RefObject<HTMLInputElement> } => {
  const id = useMemo(() => props.id || randomId(), [props.id])
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(props.value)
  const [checked, setChecked] = useState((props as CheckboxProps).checked)

  const resetListener = (): void => {
    setValue(props.value)
    setChecked((props as CheckboxProps).checked)
  }
  
  useEffect(() => {
    if (ref.current && ref.current.form) {
      const form = ref.current.form
      form.addEventListener('reset', resetListener)
      return () => form.removeEventListener('reset', resetListener)
    }
  }, [ref.current])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
    setChecked(event.target.checked)
    if (notify) notify(evaluator(event.target))
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