import * as axe from 'axe-core'
import { afterEach, expect } from 'vitest'

interface AccessibleOptions {
  rules?: Record<string, { enabled: boolean }>
}

expect.extend({
  async toBeAccessible(
    received: Element,
    options: AccessibleOptions = {},
  ): Promise<{ pass: boolean; message: () => string }> {
    const { rules = {} } = options

    const results = await axe.run(received, {
      rules: {
        // Disable color-contrast by default as it's often problematic in test environments
        'color-contrast': { enabled: false },
        ...rules,
      },
    })

    const violations = results.violations

    if (violations.length === 0) {
      return {
        pass: true,
        message: () => 'Expected element to have accessibility violations',
      }
    }

    const formattedViolations = violations
      .map((violation) => {
        const nodes = violation.nodes
          .map((node) => `    - ${node.html}`)
          .join('\n')
        return `  ${violation.id}: ${violation.description}\n${nodes}`
      })
      .join('\n\n')

    return {
      pass: false,
      message: () =>
        `Expected element to be accessible, but found the following violations:\n\n${formattedViolations}`,
    }
  },
})

afterEach(() => {
  // Reset DOM between tests to avoid leftover overlays or modal state
  document.body.innerHTML = ''
})

// TypeScript declarations for the custom matcher
declare module 'vitest' {
  interface Assertion {
    toBeAccessible(options?: AccessibleOptions): Promise<void>
  }
  interface AsymmetricMatchersContaining {
    toBeAccessible(options?: AccessibleOptions): void
  }
}
