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
