/* eslint-disable @nx/enforce-module-boundaries */
import '../../../.storybook/preview'

const preview = {
  parameters: {
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) => {
        if (a.id.includes('docs') && !b.id.includes('docs')) {
          return -1
        }

        if (b.id.includes('docs') && !a.id.includes('docs')) {
          return 1
        }

        return a.id === b.id ? 0 : a.id.localeCompare(b.id)
      },
    },
  },
}

export default preview
