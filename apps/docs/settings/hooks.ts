'use client'

import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'

import { SettingsContext } from './context'
import { DEFAULT_SETTINGS, EXCLUSIVE_PANELS } from './defaults'
import { settingsStorage } from './storage'
import { getNextColorScheme } from './theme/hooks'

import type {
  AudioRefs,
  DeviceState,
  Panel,
  SettingsState,
  SettingsTogglePath,
  TransitionState,
  UIState,
  UXState,
} from './types'

type NestedBooleanPaths<T> = {
  [K in keyof T]: T[K] extends boolean
    ? `${string & K}`
    : T[K] extends object
      ? `${string & K}.${NestedBooleanPaths<T[K]>}`
      : never
}[keyof T]

type TogglePath = SettingsTogglePath | NestedBooleanPaths<SettingsState>
type PanelKey = keyof Panel & (typeof EXCLUSIVE_PANELS)[number]

export function useLoadingStates() {
  const [settingsLoaded, setSettingsLoaded] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)
  const isFullyLoaded = settingsLoaded && contentLoaded

  return useMemo(
    () => ({
      isFullyLoaded,
      settingsLoaded,
      contentLoaded,
      setSettingsLoaded,
      setContentLoaded,
    }),
    [isFullyLoaded, settingsLoaded, contentLoaded],
  )
}

// In hooks.ts, update handlePanelToggle

function handlePanelToggle(
  settings: SettingsState,
  panelKey: PanelKey,
): SettingsState {
  const newPanelState = { ...settings.UI.Panel }

  if (panelKey === 'All') {
    // Close all panels
    EXCLUSIVE_PANELS.forEach((panel) => {
      newPanelState[panel] = false
    })
    return {
      ...settings,
      UI: {
        ...settings.UI,
        Panel: newPanelState,
      },
    }
  }

  // Handle regular panel toggling
  const isOpening = !settings.UI.Panel[panelKey]

  if (isOpening) {
    // If opening, first close all exclusive panels
    EXCLUSIVE_PANELS.forEach((panel) => {
      newPanelState[panel] = false
    })
    // Then open the requested panel
    newPanelState[panelKey] = true
  } else {
    // If closing, simply close the panel
    newPanelState[panelKey] = false
  }

  return {
    ...settings,
    UI: {
      ...settings.UI,
      Panel: newPanelState,
    },
  }
}

function toggleUISettings(
  settings: SettingsState,
  category: keyof UIState,
  key: string,
): SettingsState {
  const section = settings.UI[category]
  if (typeof section === 'object' && key in section) {
    const value = section[key as keyof typeof section]
    if (typeof value === 'boolean') {
      return {
        ...settings,
        UI: {
          ...settings.UI,
          [category]: {
            ...section,
            [key]: !value,
          },
        },
      }
    }
  }
  return settings
}

function toggleUXSettings(
  settings: SettingsState,
  category: keyof UXState,
  key: string,
): SettingsState {
  const section = settings.UX[category]
  if (typeof section === 'object' && key in section) {
    const value = section[key as keyof typeof section]
    if (typeof value === 'boolean') {
      return {
        ...settings,
        UX: {
          ...settings.UX,
          [category]: {
            ...section,
            [key]: !value,
          },
        },
      }
    }
  }
  return settings
}

export function updateNestedBoolean(
  settings: SettingsState,
  path: string[],
): SettingsState {
  const [section, ...rest] = path

  switch (section) {
    case 'UI': {
      const [category, key] = rest
      return toggleUISettings(settings, category as keyof UIState, key)
    }
    case 'UX': {
      const [category, key] = rest
      return toggleUXSettings(settings, category as keyof UXState, key)
    }
    case 'Device': {
      const [key] = rest
      if (key in settings.Device) {
        return {
          ...settings,
          Device: {
            ...settings.Device,
            [key]: !settings.Device[key as keyof DeviceState],
          },
        }
      }
      return settings
    }

    default:
      return settings
  }
}

export function toggleSetting(
  settings: SettingsState,
  path: TogglePath,
): SettingsState {
  const parts = path.split('.')

  if (parts[0] === 'UI' && parts[1] === 'Panel') {
    const panelKey = parts[2] as PanelKey
    if (EXCLUSIVE_PANELS.includes(panelKey)) {
      return handlePanelToggle(settings, panelKey)
    }
  }

  return updateNestedBoolean(settings, parts)
}

export function useSettings() {
  const [settings, setSettings] = useState<SettingsState>(DEFAULT_SETTINGS)
  const [isLoaded, setIsLoaded] = useState(false)
  const loading = useLoadingStates()

  useEffect(() => {
    settingsStorage.load().then((savedSettings) => {
      setSettings(savedSettings)
      setIsLoaded(true)
      loading.setSettingsLoaded(true)
    })
  }, [loading])

  useEffect(() => {
    if (isLoaded) {
      settingsStorage.save(settings)
    }
  }, [settings, isLoaded])

  const toggle = useCallback((path: SettingsTogglePath) => {
    // console.log(path)

    setSettings((prev) => {
      const newSettings = toggleSetting(prev, path)
      settingsStorage.save(newSettings)
      if (path === 'UI.Theme.ColorScheme') {
        return {
          ...prev,
          UI: {
            ...prev.UI,
            Theme: {
              ...prev.UI.Theme,
              ColorScheme: getNextColorScheme(prev.UI.Theme.ColorScheme),
            },
          },
        }
      }

      return newSettings
    })
  }, [])

  const reset = useCallback(async () => {
    const defaultSettings = await settingsStorage.reset()
    setSettings(defaultSettings)
  }, [])

  useEffect(() => {
    const checkDevice = () => {
      setSettings((prev) => ({
        ...prev,
        Device: {
          ...prev.Device,
          Mobile: window.innerWidth < 768,
        },
      }))
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return useMemo(
    () => ({
      settings,
      isLoaded,
      loading,
      actions: {
        toggle,
        reset,
        setSettings,
      },
    }),
    [settings, isLoaded, loading, toggle, reset],
  )
}

// settings context

export function useSettingsContext() {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettingsContext must be used within SettingsProvider')
  }

  return context
}

export function useSettingsValue<T>(
  selector: (settings: SettingsState) => T,
): T {
  const { settings } = useSettingsContext()
  return selector(settings)
}

// Transitions

const TRANSITION_DURATION = 1600

interface UseTransitionProps {
  isAudioEnabled: boolean
}

export function useTransition({ isAudioEnabled }: UseTransitionProps) {
  const pathname = usePathname()
  const [changes, setChanges] = useState(0)
  // Create refs first
  const hoverRef = useRef<HTMLAudioElement | null>(null)
  const routeRef = useRef<HTMLAudioElement | null>(null)
  const signatureRef = useRef<HTMLAudioElement | null>(null)

  // Then create the stable audioRefs object
  const audioRefs = useMemo<AudioRefs>(
    () => ({
      Hover: hoverRef,
      Route: routeRef,
      Signature: signatureRef,
    }),
    [],
  )

  // Transition refs
  const timeoutRef = useRef<NodeJS.Timeout>(null)
  const progressInterval = useRef<NodeJS.Timer>(null)

  // Transition state
  const [transition, setTransition] = useState<TransitionState>({
    Active: false,
    Progress: 0,
    Direction: 'in',
    Previous: null,
  })

  const handleTransition = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current as NodeJS.Timeout)
    }

    setTransition((prev) => ({
      Active: true,
      Progress: 0,
      Direction: 'in',
      Previous: prev.Previous !== pathname ? prev.Previous : null,
    }))

    const startTime = Date.now()
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / TRANSITION_DURATION, 1)

      setTransition((prev) => ({
        ...prev,
        Progress: progress,
        Direction: progress < 0.5 ? 'in' : 'out',
      }))

      if (progress >= 1) {
        clearInterval(progressInterval.current as NodeJS.Timeout)
      }
    }, 16)

    timeoutRef.current = setTimeout(() => {
      setTransition((prev) => ({
        ...prev,
        Active: false,
        Progress: 0,
        Previous: pathname,
      }))
    }, TRANSITION_DURATION)
  }, [pathname])

  useEffect(() => {
    setChanges((prev) => prev + 1)
    handleTransition()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (progressInterval.current)
        clearInterval(progressInterval.current as NodeJS.Timeout)
    }
  }, [pathname, handleTransition])

  return {
    transition,
    audioRefs,
    changes,
  }
}

// set a single setting
export function useSet() {
  const { actions } = useSettingsContext()

  const set = useCallback(
    (path: SettingsTogglePath, value: unknown) => {
      actions.setSettings((prev) => ({
        ...prev,
        UX: {
          ...prev.UX,
        },
      }))
    },
    [actions],
  )

  return set
}
