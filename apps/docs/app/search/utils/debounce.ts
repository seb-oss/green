// app/search/utils/debounce.ts
'use client'

import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number = 0): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
