// settings/shortcuts/manager.ts
'use client'

import { DefaultShortcuts } from './defaults'
import { KeySymbols } from './symbols'

import type { SettingsContextType, SettingsTogglePath } from '../types'
import type {
  ShortcutDefinition,
  ShortcutManagerInterface,
  ShortcutScope,
} from './types'

export class ShortcutManager implements ShortcutManagerInterface {
  private shortcuts: Map<SettingsTogglePath, ShortcutDefinition>
  private context: SettingsContextType

  constructor(context: SettingsContextType) {
    this.shortcuts = new Map(
      Object.entries(DefaultShortcuts) as [
        SettingsTogglePath,
        ShortcutDefinition,
      ][],
    )
    this.context = context
  }

  public register(
    path: SettingsTogglePath,
    definition: ShortcutDefinition,
  ): void {
    this.shortcuts.set(path, definition)
  }

  public unregister(path: SettingsTogglePath): void {
    this.shortcuts.delete(path)
  }

  public getByScope(
    scope: ShortcutScope,
  ): Map<SettingsTogglePath, ShortcutDefinition> {
    return new Map(
      Array.from(this.shortcuts.entries()).filter(([, def]) =>
        def.scope?.includes(scope),
      ),
    )
  }

  public getWithHints(): Map<SettingsTogglePath, ShortcutDefinition> {
    return new Map(
      Array.from(this.shortcuts.entries()).filter(([, def]) => def.hint),
    )
  }

  private isInputElement(element: Element | null): boolean {
    if (!element) return false

    const tagName = element.tagName.toLowerCase()
    const isContentEditable = (element as HTMLElement).isContentEditable

    return (
      tagName === 'input' ||
      tagName === 'textarea' ||
      tagName === 'select' ||
      isContentEditable
    )
  }

  public handleKeyEvent(event: KeyboardEvent): void {
    const isInInput = this.isInputElement(document.activeElement)

    for (const [, definition] of this.shortcuts.entries()) {
      if (this.matchShortcut(event, definition.keys)) {
        if (isInInput && !definition.allowInInput) {
          continue
        }

        event.preventDefault()
        definition.action?.(this.context)
        break
      }
    }
  }

  public formatKeys(keys: string[]): string {
    return keys
      .map(
        (key) =>
          KeySymbols[key.toLowerCase() as keyof typeof KeySymbols] ||
          key.toUpperCase(),
      )
      .join(' ')
  }

  public updateContext(context: SettingsContextType): void {
    this.context = context
  }

  private matchShortcut(event: KeyboardEvent, keys: string[]): boolean {
    const lowerKeys = keys.map((key) => key.toLowerCase())
    const expectedKey = lowerKeys[lowerKeys.length - 1]

    return (
      (!lowerKeys.includes('shift') || event.shiftKey) &&
      (!lowerKeys.includes('ctrl') || event.ctrlKey) &&
      (!lowerKeys.includes('alt') || event.altKey) &&
      (!lowerKeys.includes('meta') || event.metaKey) &&
      event.key.toLowerCase() === expectedKey
    )
  }
}
