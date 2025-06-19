// settings/toast/context.ts
'use client'

/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

import { DEFAULT_TOAST_STATE } from './config'

import type { ToastContext } from './types'

export const toastContext = createContext<ToastContext>({
  state: DEFAULT_TOAST_STATE,
  actions: {
    add: () => {},
    remove: () => {},
    clear: () => {},
  },
})
