import { Directive, PartInfo, PartType, directive } from 'lit/directive.js'
import { ElementPart } from 'lit-html/directive.js'
import { Part, nothing } from 'lit/html.js'

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
        element.setAttribute(attr.name, attr.value)
      }
    })
  }
}

export const forwardAttributes = directive(ForwardAttributesDirective)
