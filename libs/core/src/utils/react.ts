import { useLayoutEffect, useRef } from 'react'

import type * as React from 'react'

import { getScopedTagName } from '../scoping'

type WithReactChildren<T> = Omit<T, 'children'> & {
  children?: React.ReactNode
}

type GdsComponentProps<T> = WithReactChildren<{
  [K in keyof T]?: T[K]
}> &
  Omit<React.HTMLAttributes<HTMLElement>, 'children'> &
  React.RefAttributes<HTMLElement>

/**
 * Get a React 19 compatible component from a GDS component
 *
 * @example
 * ```tsx
 * import { getReactComponent } from '@sebgroup/green-core/utils/react'
 * import type { GdsButton as GdsButtonType } from '@sebgroup/green-core/components/button/index.js'
 * import '@sebgroup/green-core/components/button/index.js'
 *
 * const GdsButton = getReactComponent<GdsButtonType>('gds-button')
 *
 * // Now you can use <GdsButton> as a React component with correct typings
 * ```
 */
export function getReactComponent<T>(tagName: string) {
  return getScopedTagName(tagName) as unknown as React.ComponentType<
    GdsComponentProps<T>
  >
}

/**
 * Hook to implement controlled component behavior for form controls with a value property
 */
export function useControlledValue<TElement extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<TElement | null>,
  value: any,
  defaultValue: any,
  onChange?: (event: any) => void,
  onInput?: (event: any) => void,
) {
  const controlledValueRef = useRef<any>(undefined)
  const isControlled = value !== undefined

  // Track the current controlled value in a ref so event handlers can access it
  controlledValueRef.current = value

  // Sync value to element property after every render
  useLayoutEffect(() => {
    const element = elementRef.current as any
    if (!element) return

    if (isControlled) {
      // Controlled: sync value prop to element on every render
      const controlledValue = controlledValueRef.current
      if (element.value !== controlledValue) {
        element.value = controlledValue
      }
    } else if (defaultValue !== undefined && element.value === '') {
      // Uncontrolled: set defaultValue only if element value is empty (mount behavior)
      element.value = defaultValue
    }

    // Only intercept input events for controlled components
    if (!isControlled) return

    // Intercept input events to implement controlled component behavior
    const handleInput = (e: Event) => {
      // Stop propagation to prevent React's event delegation from handling it
      e.stopPropagation()

      // Call the consumer's onChange handler (React idiom: onChange fires on every input)
      if (onChange) {
        onChange(e)
      }

      // Also call onInput if provided
      if (onInput) {
        onInput(e)
      }

      // After handlers run, check if value should be reset (controlled/readonly behavior)
      // Use queueMicrotask to allow React's setState and re-render to complete first
      queueMicrotask(() => {
        const currentControlledValue = controlledValueRef.current
        if (
          currentControlledValue !== undefined &&
          element.value !== currentControlledValue
        ) {
          element.value = currentControlledValue
        }
      })
    }

    element.addEventListener('input', handleInput)
    return () => element.removeEventListener('input', handleInput)
  })
}

/**
 * Hook to implement controlled component behavior for checkbox form controls with a checked property
 */
export function useControlledChecked<
  TElement extends HTMLElement = HTMLElement,
>(
  elementRef: React.RefObject<TElement | null>,
  checked: boolean | undefined,
  defaultChecked: boolean | undefined,
  onChange?: (event: any) => void,
  onInput?: (event: any) => void,
) {
  const controlledCheckedRef = useRef<boolean | undefined>(undefined)
  const isControlled = checked !== undefined

  // Track the current controlled checked state in a ref so event handlers can access it
  controlledCheckedRef.current = checked

  // Sync checked state to element property after every render
  useLayoutEffect(() => {
    const element = elementRef.current as any
    if (!element) return

    if (isControlled) {
      // Controlled: sync checked prop to element on every render
      const controlledChecked = controlledCheckedRef.current
      if (element.checked !== controlledChecked) {
        element.checked = !!controlledChecked
      }
    } else if (defaultChecked !== undefined && !element.checked) {
      // Uncontrolled: set defaultChecked only if element is unchecked (mount behavior)
      element.checked = defaultChecked
    }

    // Only intercept input events for controlled components
    if (!isControlled) return

    // Intercept input events to implement controlled component behavior
    const handleInput = (e: Event) => {
      // Stop propagation to prevent React's event delegation from handling it
      e.stopPropagation()

      // Call the consumer's onChange handler (React idiom: onChange fires on every input)
      if (onChange) {
        onChange(e)
      }

      // Also call onInput if provided
      if (onInput) {
        onInput(e)
      }

      // After handlers run, check if checked should be reset (controlled/readonly behavior)
      // Use queueMicrotask to allow React's setState and re-render to complete first
      queueMicrotask(() => {
        const currentControlledChecked = controlledCheckedRef.current
        if (
          currentControlledChecked !== undefined &&
          element.checked !== currentControlledChecked
        ) {
          element.checked = currentControlledChecked
        }
      })
    }

    element.addEventListener('input', handleInput)
    return () => element.removeEventListener('input', handleInput)
  })
}
