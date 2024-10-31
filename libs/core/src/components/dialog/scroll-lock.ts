/**
 * Based on https://github.com/shoelace-style/shoelace/blob/next/src/internal/scroll.ts
 */

import { css } from 'lit'

import { GlobalStylesRegistry } from '../../utils/global-styles'

const locks = new Set()

export function registerGlobalScrollLockStyles() {
  GlobalStylesRegistry.instance.injectGlobalStyles(
    'dialog-scroll-lock',
    css`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `,
  )
}

/**
 * Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible
 * without premature unlocking.
 */
export function lockBodyScrolling(lockingEl: HTMLElement) {
  locks.add(lockingEl)

  // When the first lock is created, set the scroll lock size to match the scrollbar's width to prevent content from
  // shifting. We only do this on the first lock because the scrollbar width will measure zero after overflow is hidden.
  if (!document.documentElement.classList.contains('gds-scroll-lock')) {
    /** Scrollbar width + body padding calculation can go away once Safari has scrollbar-gutter support. */
    const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding() // must be measured before the `sl-scroll-lock` class is applied

    let scrollbarGutterProperty = getComputedStyle(
      document.documentElement,
    ).scrollbarGutter

    // default is auto, unsupported browsers is "undefined"
    if (!scrollbarGutterProperty || scrollbarGutterProperty === 'auto') {
      scrollbarGutterProperty = 'stable'
    }

    /** Sometimes the scrollbar width is 1px, even then, we assume nothing is overflowing. */
    if (scrollbarWidth < 2) {
      // if there's no scrollbar, just set it to an empty string so whatever the user has set gets used. This is useful if the page is not overflowing and showing a scrollbar, or if the user has overflow: hidden, or any other reason a scrollbar may not be showing.
      scrollbarGutterProperty = ''
    }
    document.documentElement.style.setProperty(
      '--gds-scroll-lock-gutter',
      scrollbarGutterProperty,
    )
    document.documentElement.classList.add('gds-scroll-lock')
    document.documentElement.style.setProperty(
      '--gds-scroll-lock-size',
      `${scrollbarWidth}px`,
    )
  }
}

/**
 * Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method.
 */
export function unlockBodyScrolling(lockingEl: HTMLElement) {
  locks.delete(lockingEl)

  if (locks.size === 0) {
    document.documentElement.classList.remove('gds-scroll-lock')
    document.documentElement.style.removeProperty('--gds-scroll-lock-size')
  }
}

/** Returns the width of the document's scrollbar */
function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth
  return Math.abs(window.innerWidth - documentWidth)
}

/**
 * Used in conjunction with `scrollbarWidth` to set proper body padding in case the user has padding already on the `<body>` element.
 */
function getExistingBodyPadding() {
  const padding = Number(
    getComputedStyle(document.body).paddingRight.replace(/px/, ''),
  )

  if (isNaN(padding) || !padding) {
    return 0
  }

  return padding
}
