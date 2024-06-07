import { Directive, PartInfo, PartType, directive } from 'lit/directive.js'
import { ElementPart } from 'lit/directive.js'
import { nothing } from 'lit/html.js'

/**
 * A directive that forwards attributes from the host element to the target element in the component.
 *
 * If an attribute name starts with `gds-`, the `gds-` prefix is removed.
 *
 * @param filter A function that determines which attributes to forward.
 *
 * @example
 * Here, all attributes that start with `gds-aria` or are named `gds-role`, will be forwarded:
 * ```html
 * <button
 *    ${forwardAttributes(
 *      (attr) => attr.name.startsWith('gds-aria') || attr.name === 'gds-role'
 *    )}
 * >Button</button>
 * ```
 */
class ForwardAttributesDirective extends Directive {
  constructor(partInfo: PartInfo) {
    super(partInfo)
    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error(
        'The `forwardAttributes` directive must be used in element bindings',
      )
    }
  }

  render(_filter: (attr: Attr) => boolean) {
    return nothing
  }

  update(part: ElementPart, [filter]: Parameters<this['render']>) {
    const element = part.element
    const host = part.options?.host as Element

    // TODO: Also remove attributes that are no longer present on the host
    Array.from(host.attributes).forEach((attr) => {
      if (filter(attr)) {
        element.setAttribute(attr.name.replace('gds-', ''), attr.value)
      }
    })
  }
}

export const forwardAttributes = directive(ForwardAttributesDirective)
