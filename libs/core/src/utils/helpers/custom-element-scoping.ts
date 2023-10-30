/**
 * # Custom element scoping
 *
 * One problem with the current state of the Custom Elements standard is that there is
 * only a single, global, `CustomElementRegistry`. This means that if you have two different
 * libraries, or two different versions of the same library, that both define a custom
 * element with the same name, only one of them will be registered, and the other will
 * throw an error.
 *
 * This is a problem for Green, because we need it to work well in a microfrontend
 * architecture, where multiple apps can be loaded on the same page, and each app can
 * potentially have its own version of Green.
 *
 * There is a (proposal)[https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md]
 * for enabling user instantiated CustomElementRegistry scoped to a ShodowRoot, but as of
 * mid 2023 this is still only available in Chrome canary behind experimental flags.
 *
 * ## Solution
 *
 * To get around the problem we define our own scoping mechanism. It will works like this:
 *
 * * Green Core has its own lookup table of custom elements, and a suffix is added to the
 *   name of each custom element. For example, `gds-popover` becomes `gds-popover-<versionstring>`.
 *   The version string is deterministically generated based on the version of the Green
 *   Core package.
 *
 * * We also define a new `customElement` decorator that will be used to register custom
 *   elements. `@gdsCustomElement` will automatically add the version suffix to the name of
 *   the custom element, and register it in the lookup table. If the custom element is already
 *   registered, it will abort silently, with the assumption that the custom element was
 *   already registered by the same version of Green Core and is therefor compatible.
 *
 * * There is also a custom `html` template tag that will automatically rewrite all custom
 *   element names from the lookup table to include the version suffix, before passing the
 *   template on to the Lit `html` tag. Alternatively, a templte tag factory can be used
 *   to create a custom `html` tag, if Lit is not used by the consumer
 *
 * ## Caveats
 *
 * Consumers using top-level components from Green Core will have to add the version suffix
 * in some way. The React and Angular wrappers takes care of this automatically. Another way
 * is to use the `html` template tag or template tag factory from Green Core, but it will only
 * work if the consumer is using javascript template literals.
 *
 * If the consumer is using hard coded HTML, or a templating language that does not support
 * template tags, the consumer will have to manually add the version suffix to the custom
 * element names, which would be cumbersome. In this edge-case, the scoping feature can be disabled,
 * and the consumer will have to make sure that only a single version of Green Core is used
 * on the page.
 *
 * The recommendation is to only consume Green Core though the React or Angular wrappers, or to
 * use the `html` template tag or template tag factory from Green Core.
 *
 * At some point in the future, when the scoped custom element registry proposal has been
 * implemented in all major browsers, we might remove this custom scoping mechanism and
 * switch to using native scoped registries instead.
 */

import { html as litHtml } from 'lit'
import { customElement } from 'lit/decorators.js'

export const VER_SUFFIX = '-gdsvsuffix'
const elementLookupTable = new Map<string, string>()

/**
 * Class decorator factory that defines the decorated class as a custom element, and registers
 * it with the custom element registry under a versioned name.
 *
 * ```js
 * @gdsCustomElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
export const gdsCustomElement = (tagName: string) => {
  if ((globalThis as any).GDS_DISABLE_VERSIONED_ELEMENTS) {
    return customElement(tagName)
  }

  const versionedTagName = tagName + VER_SUFFIX
  elementLookupTable.set(tagName, versionedTagName)

  // Bail out if the element is already registered
  if (customElements.get(versionedTagName))
    return (_classOrDescriptor: any) => false

  return customElement(versionedTagName)
}

/**
 * This function replaces all custom element names from the lookup table to include the
 * version suffix. We also cache the result, so that we don't have to do the replacement
 * more than once for each template, and also so that the Lit template caching works properly,
 * since it expects the same TemplateStringArray instance to be passed in each time.
 */
const templateCache = new WeakMap<TemplateStringsArray, string[]>()
function applyElementScoping(
  strings: TemplateStringsArray,
  ...values: any[]
): [string[], ...any[]] {
  let modstrings = templateCache.get(strings)

  if (!modstrings) {
    modstrings = replaceTags(strings)
    ;(modstrings as any).raw = replaceTags(strings.raw)
    templateCache.set(strings, modstrings)
  }

  return [modstrings as any, ...values]
}

const replaceTags = (inStr: TemplateStringsArray | readonly string[]) =>
  inStr.map((s) => {
    for (const [key, value] of elementLookupTable.entries()) {
      s = s.split(key).join(value)
    }
    return s
  })

/**
 * Template tag factory that creates a new template tag, which rewrites all custom element names from the
 * lookup table to include the version suffix, and then passes the template on to the provided template tag.
 */
export function htmlTemplateTagFactory(
  extendedTag: (strings: TemplateStringsArray, ...values: any[]) => any
) {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    if ((globalThis as any).GDS_DISABLE_VERSIONED_ELEMENTS) {
      return extendedTag(strings, ...values)
    }

    const [modstrings, ...modvalues] = applyElementScoping(strings, ...values)
    return extendedTag(modstrings as any, ...modvalues)
  }
}

/**
 * Template tag that rewrites all custom element names from the lookup table to include the
 * version suffix, before passing the template on to the Lit `html` tag.
 */
export const html = htmlTemplateTagFactory(litHtml)

/**
 * Returns the correctly scoped tag name for the given tag.
 * @param tagName The tag name to scope
 */
export function getScopedTagName(tagName: string) {
  return elementLookupTable.get(tagName) ?? tagName
}

/**
 * Returns the unscoped tag name for the given scoped tag.
 * @param tagName The scoped tag name to unscope
 */
export function getUnscopedTagName(tagName: string) {
  return [...elementLookupTable.entries()].find(
    ([, value]) => value === tagName
  )?.[0]
}

export default {}
