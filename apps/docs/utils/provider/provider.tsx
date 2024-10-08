'use client'

import React, { createContext, useState } from 'react'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Toaster } from 'sonner'

interface DataContextProps {
  fullscreen: boolean
  setFullscreen: (value: boolean) => void
}

export const DataContext = createContext<DataContextProps>({
  fullscreen: false,
  setFullscreen: () => {},
})

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [fullscreen, setFullscreen] = useState(false)

  const value = {
    fullscreen,
    setFullscreen,
  }

  return (
    <NextThemesProvider {...props}>
      <DataContext.Provider value={value}>
        {children}
        <Toaster
          richColors
          theme="light"
          position="bottom-center"
          expand={false}
          closeButton={true}
          duration={4428}
        />
      </DataContext.Provider>
    </NextThemesProvider>
  )
}
