'use client'

import { DBSchema, IDBPDatabase, openDB } from 'idb'

import type { ContentStore } from './types'

interface ContentSchema extends DBSchema {
  store: {
    key: 'content'
    value: ContentStore
  }
}

const DB_CONFIG = {
  name: 'seb-io-content',
  version: 1,
  store: 'store',
} as const

export class ContentStorage {
  private db: Promise<IDBPDatabase<ContentSchema>> | null = null

  constructor() {
    if (typeof window !== 'undefined') {
      this.db = this.initDB()
    }
  }

  private initDB() {
    if (typeof window === 'undefined') return null

    return openDB<ContentSchema>(DB_CONFIG.name, DB_CONFIG.version, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(DB_CONFIG.store)) {
          db.createObjectStore(DB_CONFIG.store)
        }
      },
    })
  }

  async getStore(): Promise<ContentStore | undefined> {
    if (!this.db) return undefined

    try {
      const db = await this.db
      return db.get(DB_CONFIG.store, 'content')
    } catch (error) {
      console.error('Failed to get store:', error)
      return undefined
    }
  }

  async setStore(store: ContentStore): Promise<void> {
    if (!this.db) return

    try {
      const db = await this.db
      await db.put(DB_CONFIG.store, store, 'content')
    } catch (error) {
      console.error('Failed to set store:', error)
    }
  }

  async clearStore(): Promise<void> {
    if (!this.db) return

    try {
      const db = await this.db
      await db.clear(DB_CONFIG.store)
    } catch (error) {
      console.error('Failed to clear store:', error)
    }
  }
}

export const contentStorage =
  typeof window !== 'undefined' ? new ContentStorage() : null
