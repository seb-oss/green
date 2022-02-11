import { randomId } from '@sebgroup/extract'
import {
  ChangeEventHandler,
  InputHTMLAttributes,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { CheckboxProps, InputListener } from './types'

const useInput = <T>(
  props: InputHTMLAttributes<HTMLInputElement>,
  evaluator: (element: HTMLInputElement) => T | undefined,
  notify?: InputListener<T>
): InputHTMLAttributes<HTMLInputElement> & {
  ref: RefObject<HTMLInputElement>
} => {
  const id = useMemo(() => props.id || randomId(), [props.id])
  const ref = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(props.value)
  const [checked, setChecked] = useState((props as CheckboxProps).checked)

  useEffect(() => {
    if (ref.current && ref.current.form) {
      const resetListener = (): void => {
        props.value && setValue(props.value)
        props.checked && setChecked((props as CheckboxProps).checked)
      }
      const form = ref.current.form
      form.addEventListener('reset', resetListener)
      return () => form.removeEventListener('reset', resetListener)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    }
  }, [props])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    props.value && setValue(event.target.value)
    props.checked && setChecked(event.target.checked)
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

export default useInput
