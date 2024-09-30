const templateCache = new WeakMap<TemplateStringsArray, string[]>()

/**
 * A template tag that strips whitespace from the template. In some situatiuons
 * whitespace can cause inconsistent gap behaviour when `<slot>` is used with `flexbox`
 * elements. This template tag can be used to strip whitespace from the template in these
 * cases.
 *
 * Use with caution and only when necessary.
 *
 * @internal
 * @param extendedTag Template literal tag to extend
 * @returns A new template literal tag that strips whitespace from the template
 */
export function stripWhitespace(
  extendedTag: (strings: TemplateStringsArray, ...values: any[]) => any,
) {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    let modstrings = templateCache.get(strings)

    if (!modstrings) {
      modstrings = strings.map((s) => s.replace(/\n[\s]+</gm, '<'))
      ;(modstrings as any).raw = strings.raw
      templateCache.set(strings, modstrings)
    }

    return extendedTag(modstrings as any, ...values)
  }
}
