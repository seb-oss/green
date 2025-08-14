// settings/shortcuts/hooks.ts
"use client"

import { useContext, useEffect, useMemo, useRef } from "react"

import { SettingsContext } from "../context"
import { ShortcutManager } from "./manager"
import type { ShortcutScope } from "./types"

export function useShortcuts() {
  const context = useContext(SettingsContext)
  const managerRef = useRef<ShortcutManager>(null)

  useEffect(() => {
    if (!managerRef.current) {
      managerRef.current = new ShortcutManager(context)
    } else {
      managerRef.current.updateContext(context)
    }
  }, [context])

  useEffect(() => {
    const manager = managerRef.current
    if (!manager) return

    const handleKeyDown = (event: KeyboardEvent) => {
      manager.handleKeyEvent(event)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return managerRef.current
}

export function useShortcutInfo() {
  const context = useContext(SettingsContext)

  return useMemo(() => {
    const manager = new ShortcutManager(context)

    return {
      getFormattedKeys: (keys: string[]) => manager.formatKeys(keys),
      getGlobalShortcuts: () => manager.getByScope("global" as ShortcutScope),
      getPageShortcuts: () => manager.getByScope("page" as ShortcutScope),
      getPostShortcuts: () => manager.getByScope("post" as ShortcutScope),
      getHints: () => manager.getWithHints(),
    }
  }, [context])
}
