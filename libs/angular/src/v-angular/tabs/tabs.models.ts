import { TabDirective } from './tab.directive'

export interface Tab {
  /** Sets the title displayed in the tab list for this child. */
  tab: string
  id?: string | number
  thook?: string
  active?: boolean
  disabled?: boolean
  link?: string
  directive?: TabDirective
}

export type EventTabChange =
  | {
      type: 'start'
      prev: Tab | undefined
      next: Tab
      cancel: () => void
    }
  | {
      type: 'cancel'
      prev: Tab | undefined
      next: Tab
    }
  | {
      type: 'end'
      prev: Tab | undefined
      next: Tab
    }
