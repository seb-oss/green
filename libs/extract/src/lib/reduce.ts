import { recursive } from 'merge'

export const reduce = <T>(...items: Partial<T>[]): T =>
  recursive(true, ...items) as T

export default reduce
