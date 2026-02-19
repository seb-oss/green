import { html, render, TemplateResult } from 'lit'
import { page, userEvent } from '@vitest/browser/context'

// Re-export html from lit for tests
export { html }

const CLICK_TIMEOUT_MS = 3000

/**
 * Renders a lit template into a container and returns the first element child.
 * Replacement for @open-wc/testing fixture function.
 */
export async function fixture<T extends Element>(
  template: TemplateResult,
): Promise<T> {
  const container = document.createElement('div')
  document.body.appendChild(container)
  render(template, container)
  await new Promise((resolve) => setTimeout(resolve, 0))
  // Wait for any custom elements to upgrade
  await Promise.resolve()
  const element = container.firstElementChild as T
  return element
}

/**
 * Wait for a specified number of milliseconds.
 * Replacement for @open-wc/testing aTimeout function.
 */
export function aTimeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Wait until a condition becomes true or timeout.
 * Replacement for @open-wc/testing waitUntil function.
 */
export async function waitUntil(
  condition: () => boolean | Promise<boolean>,
  message?: string,
  options: { interval?: number; timeout?: number } = {},
): Promise<void> {
  const { interval = 50, timeout = 1000 } = options
  const startTime = Date.now()

  while (Date.now() - startTime <= timeout) {
    const result = await condition()
    if (result) return

    await new Promise((resolve) => setTimeout(resolve, interval))
  }

  throw new Error(message || `waitUntil timed out after ${timeout}ms`)
}

/** A testing utility that clicks on an element. */
export async function clickOnElement(
  /** The element to click */
  el: Element,
  /** The location of the element to click (ignored for now, clicks center) */
  _position: 'top' | 'right' | 'bottom' | 'left' | 'center' = 'center',
  /** The horizontal offset to apply to the position when clicking (ignored) */
  _offsetX = 0,
  /** The vertical offset to apply to the position when clicking (ignored) */
  _offsetY = 0,
) {
  const rect = el.getBoundingClientRect()
  const position = getClickPosition(rect, _position, _offsetX, _offsetY)
  try {
    await withTimeout(userEvent.click(el, { position }), CLICK_TIMEOUT_MS)
  } catch (error) {
    // Fallback to forced click to avoid pointer interception issues in browser mode
    await withTimeout(
      userEvent.click(el, { position, force: true }),
      CLICK_TIMEOUT_MS,
    )
  }
}

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`click timed out after ${ms}ms`))
    }, ms)
  })
  try {
    return await Promise.race([promise, timeout])
  } finally {
    if (timeoutId) clearTimeout(timeoutId)
  }
}

function getClickPosition(
  rect: DOMRect,
  position: 'top' | 'right' | 'bottom' | 'left' | 'center',
  offsetX: number,
  offsetY: number,
): { x: number; y: number } {
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  let x = centerX
  let y = centerY

  switch (position) {
    case 'top':
      y = 1
      break
    case 'bottom':
      y = Math.max(1, rect.height - 1)
      break
    case 'left':
      x = 1
      break
    case 'right':
      x = Math.max(1, rect.width - 1)
      break
    case 'center':
    default:
      break
  }

  return {
    x: Math.max(1, x + offsetX),
    y: Math.max(1, y + offsetY),
  }
}

/** A testing utility that moves the mouse onto an element. */
export async function moveMouseOnElement(
  /** The element to hover */
  el: Element,
  /** The location of the element (ignored for now, hovers center) */
  _position: 'top' | 'right' | 'bottom' | 'left' | 'center' = 'center',
  /** The horizontal offset to apply (ignored) */
  _offsetX = 0,
  /** The vertical offset to apply (ignored) */
  _offsetY = 0,
) {
  await userEvent.hover(el)
}

/** A testing utility that drags an element with the mouse. */
export async function dragElement(
  /** The element to drag */
  source: Element,
  /** The horizontal distance to drag in pixels */
  deltaX = 0,
  /** The vertical distance to drag in pixels */
  deltaY = 0,
): Promise<void> {
  // Create a temporary target element at the destination
  const rect = source.getBoundingClientRect()
  const targetX = rect.left + rect.width / 2 + deltaX
  const targetY = rect.top + rect.height / 2 + deltaY

  // For now, use the basic drag and drop if there's a target element
  // Otherwise, simulate with hover/click sequence
  await userEvent.hover(source)

  // Note: For complex drag operations, you may need to use CDP or Playwright directly
  // This is a simplified implementation
  const event = new MouseEvent('mousedown', {
    bubbles: true,
    cancelable: true,
    clientX: rect.left + rect.width / 2,
    clientY: rect.top + rect.height / 2,
  })
  source.dispatchEvent(event)

  const moveEvent = new MouseEvent('mousemove', {
    bubbles: true,
    cancelable: true,
    clientX: targetX,
    clientY: targetY,
  })
  source.dispatchEvent(moveEvent)

  const upEvent = new MouseEvent('mouseup', {
    bubbles: true,
    cancelable: true,
    clientX: targetX,
    clientY: targetY,
  })
  source.dispatchEvent(upEvent)
}

export function isWebKit() {
  return (
    navigator.userAgent.toLowerCase().indexOf('safari') > -1 &&
    navigator.userAgent.toLowerCase().indexOf('chrome') < 0
  )
}

/**
 * WebKit-aware Tab helper.
 * On WebKit, use Alt+Tab to move focus
 */
export async function tabNext(options?: { shift?: boolean }) {
  if (isWebKit()) {
    if (options?.shift) {
      await userEvent.keyboard('{Alt>}{Shift>}{Tab}{/Shift}{/Alt}')
      return
    }
    await userEvent.keyboard('{Alt>}{Tab}{/Alt}')
    return
  }

  await userEvent.tab(options)
}

export function isChromium() {
  return navigator.userAgent.toLowerCase().indexOf('chrome') > -1
}

export function isFirefox() {
  return navigator.userAgent.toLowerCase().indexOf('firefox') > -1
}

export function onlyDate(date: Date | undefined) {
  if (!date) return undefined
  return date.toISOString().split('T')[0]
}

/** A helper to wait for a specific amount of time */
export function timeout(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** A helper to wait for a condition to become true */
export function conditionToBeTrue(
  condition: () => boolean,
  timeoutMs = 1000,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const startTime = Date.now()
    const check = () => {
      if (condition()) {
        resolve()
      } else if (Date.now() - startTime > timeoutMs) {
        reject(new Error('Condition was not met within timeout'))
      } else {
        requestAnimationFrame(check)
      }
    }
    check()
  })
}

export async function setViewportSize(width: number, height: number) {
  const originalSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  if (page) {
    await page.viewport(width, height)
  }

  return async () => {
    if (page) {
      await page.viewport(originalSize.width, originalSize.height)
    }
  }
}
