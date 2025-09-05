// design/studio/tools/icons/icons.context.tsx
'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

interface IconsContextType {
  search: string
  setSearch: (value: string) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
  isSolid: boolean
  setIsSolid: (solid: boolean) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  migrationSearch: string
  setMigrationSearch: (value: string) => void
}

const IconsContext = createContext<IconsContextType | undefined>(undefined)

export function IconsProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState('')
  const [selectedSize, setSelectedSize] = useState('l')
  const [isSolid, setIsSolid] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [migrationSearch, setMigrationSearch] = useState('')

  return (
    <IconsContext.Provider
      value={{
        search,
        setSearch,
        selectedSize,
        setSelectedSize,
        isSolid,
        setIsSolid,
        selectedCategory,
        setSelectedCategory,
        migrationSearch,
        setMigrationSearch,
      }}
    >
      {children}
    </IconsContext.Provider>
  )
}

export const useIcons = () => {
  const context = useContext(IconsContext)
  if (!context) throw new Error('useIcons must be used within IconsProvider')
  return context
}
