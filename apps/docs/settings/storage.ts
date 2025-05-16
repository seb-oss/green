// settings/storage.ts
'use client'

import { DBSchema, IDBPDatabase, openDB } from 'idb'

import { DEFAULT_SETTINGS } from './defaults'

import type { SettingsState } from './types'

const CONFIG = {
  name: 'seb-io-settings',
  version: 1,
  store: 'settings',
} as const

interface StorageSchema extends DBSchema {
  settings: {
    key: string
    value: {
      data: SettingsState
      updatedAt: string
    }
  }
}

interface StorageData {
  data: SettingsState
  updatedAt: string
}

class SettingsStorage {
  private db: Promise<IDBPDatabase<StorageSchema>> | null = null

  constructor() {
    if (typeof window !== 'undefined') {
      this.db = this.initDB()
    }
  }

  private initDB() {
    return openDB<StorageSchema>(CONFIG.name, CONFIG.version, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(CONFIG.store)) {
          db.createObjectStore(CONFIG.store)
        }
      },
    })
  }

  async load(): Promise<SettingsState> {
    if (!this.db) {
      console.warn('IndexedDB is not available, using default settings')
      return DEFAULT_SETTINGS
    }

    try {
      const db = await this.db
      const result = (await db.get(CONFIG.store, 'current')) as
        | StorageData
        | undefined
      return result?.data || DEFAULT_SETTINGS
    } catch (error) {
      console.error('Failed to load settings:', error)
      return DEFAULT_SETTINGS
    }
  }

  async save(settings: SettingsState): Promise<void> {
    if (!this.db) {
      console.warn('IndexedDB is not available, settings not saved')
      return
    }

    try {
      const db = await this.db
      await db.put(
        CONFIG.store,
        {
          data: settings,
          updatedAt: new Date().toISOString(),
        },
        'current',
      )
    } catch (error) {
      console.error('Failed to save settings:', error)
    }
  }

  async reset(): Promise<SettingsState> {
    if (!this.db) {
      console.warn('IndexedDB is not available')
      return DEFAULT_SETTINGS
    }

    try {
      const db = await this.db
      await db.delete(CONFIG.store, 'current')
      return DEFAULT_SETTINGS
    } catch (error) {
      console.error('Failed to reset settings:', error)
      return DEFAULT_SETTINGS
    }
  }
}

export const settingsStorage = new SettingsStorage()
