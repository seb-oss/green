// settings/toast/hooks.ts
'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { DEFAULT_TOAST_STATE, TOAST_CONFIG } from './config'

import type { ToastContext, ToastItem } from './types'

export function useToast(): ToastContext {
  const [state, setState] = useState(DEFAULT_TOAST_STATE)
  const timeoutsRef = useRef<Record<string, NodeJS.Timeout>>({})

  const add = useCallback((toast: Omit<ToastItem, 'id'>) => {
    setState((prev) => {
      const items = prev.items.slice(-TOAST_CONFIG.maxToasts + 1)

      const newToast: ToastItem = {
        ...toast,
        id: Date.now().toString(),
        autoClose: toast.autoClose ?? TOAST_CONFIG.autoClose,
      }

      // Only add duration if autoClose is true
      if (newToast.autoClose) {
        newToast.duration = toast.duration ?? TOAST_CONFIG.defaultDuration
      }

      // Clear any existing timeout
      if (timeoutsRef.current[newToast.id]) {
        clearTimeout(timeoutsRef.current[newToast.id])
        delete timeoutsRef.current[newToast.id]
      }

      // Only set timeout if autoClose is true
      if (newToast.autoClose) {
        timeoutsRef.current[newToast.id] = setTimeout(() => {
          remove(newToast.id)
        }, newToast.duration)
      }

      return { items: [...items, newToast] }
    })
  }, [])

  const remove = useCallback((id: string) => {
    if (timeoutsRef.current[id]) {
      clearTimeout(timeoutsRef.current[id])
      delete timeoutsRef.current[id]
    }

    setState((prev) => ({
      items: prev.items.filter((toast) => toast.id !== id),
    }))
  }, [])

  const clear = useCallback(() => {
    Object.values(timeoutsRef.current).forEach(clearTimeout)
    timeoutsRef.current = {}
    setState(DEFAULT_TOAST_STATE)
  }, [])

  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout)
    }
  }, [])

  return {
    state,
    actions: {
      add,
      remove,
      clear,
    },
  }
}
